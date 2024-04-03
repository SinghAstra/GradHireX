const Chat = require("../models/chatModel");

/**
 * Accesses a chat between the current user and another user.
 * If the chat does not exist, a new chat is created.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The chat object.
 */
const accessChat = async (req, res) => {
  try {
    const { userId } = req.body;

    // Find an existing chat between the current user and the specified user
    var isChat = await Chat.findOne({
      isGroupChat: false,
      users: { $all: [req.user._id, userId], $size: 2 },
    })
      .populate("users", "-password")
      .populate("lastMessage", {
        populate: {
          path: "sender",
          select: "-password",
        },
      });

    // If chat exists, return it
    if (isChat) {
      res.json(isChat);
    } else {
      // If chat does not exist, create a new chat
      var chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [req.user._id, userId],
      };
      try {
        const createdChat = await Chat.create(chatData);
        // Populate the users field to get user details
        const fullChat = await Chat.findById(createdChat._id).populate(
          "users",
          "-password"
        );
        res.json(fullChat);
      } catch (error) {
        res.status(400).json({ message: "Error While Creating new Chat." });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

/**
 * Fetches all chats involving the current user.
 * Populates user details and last message sender details.
 * Sorts chats by updatedAt in descending order.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object[]} Array of chat objects.
 */
const fetchChats = async (req, res) => {
  try {
    const chats = await Chat.find({
      users: { $elemMatch: { $eq: req.user._id } },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

const fetchChat = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId)
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

/**
 * Fetches all group chats.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object[]} Array of group chat objects.
 */
const fetchGroups = async (req, res) => {
  try {
    let filter = {};
    if (req.query.search) {
      filter = { chatName: { $regex: req.query.search, $options: "i" } };
    }

    const groups = await Chat.find({
      isGroupChat: true,
      ...filter,
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .sort({ updatedAt: -1 });

    res.json(groups);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Creates a new group chat.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The created group chat object.
 */
const createGroupChat = async (req, res) => {
  try {
    let { name, users } = req.body;
    if (!name || !users) {
      res.status(400).json({ message: "Data is insufficient." });
    }

    // Parse users if needed
    users = Array.isArray(users) ? users : JSON.parse(users);
    // Add current user ID to the users array
    users.push(req.user._id);
    try {
      const groupChat = await Chat.create({
        chatName: name,
        isGroupChat: true,
        groupAdmin: req.user._id,
        users,
      });
      const fullGroupChat = await Chat.findById(groupChat._id)
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

      res.json(fullGroupChat);
    } catch (error) {
      res.status(500).json({ message: "Error While Creating Group Chat" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Removes a user from a group chat. If the user is the group admin, the entire group chat is deleted.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The updated chat object or a success message.
 */
const exitGroupChat = async (req, res) => {
  try {
    const { chatId } = req.body;

    // Check if chatId is provided
    if (!chatId) {
      return res.status(400).json({ message: "Chat ID is required." });
    }

    // Find the chat
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }

    // Check if user is in the group
    if (!chat.users.includes(req.user._id)) {
      return res
        .status(403)
        .json({ message: "You are not a member of this group." });
    }

    // If user is the group admin, delete the group
    if (chat.groupAdmin.toString() === req.user._id.toString()) {
      await Chat.findByIdAndDelete(chatId);
      return res.json({ message: "Group chat deleted." });
    }

    // Remove user from the group
    chat.users = chat.users.filter(
      (user) => user.toString() !== req.user._id.toString()
    );

    // Save the updated chat
    await chat.save();

    // Return updated chat
    const updatedChat = await Chat.findById(chatId)
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.json({ updatedChat, message: "You have exited the group." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

/**
 * Adds the current user to a group chat.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The updated chat object or a success message.
 */
const addSelfToGroupChat = async (req, res) => {
  try {
    const { chatId } = req.body;

    // Check if chatId is provided
    if (!chatId) {
      return res.status(400).json({ message: "Chat ID is required." });
    }

    // Find the chat
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }

    // Check if user is already in the group
    if (chat.users.includes(req.user._id)) {
      return res
        .status(403)
        .json({ message: "You are already a member of this group." });
    }

    // Add user to the group
    chat.users.push(req.user._id);

    // Save the updated chat
    await chat.save();

    // Return updated chat
    const updatedChat = await Chat.findById(chatId)
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.json({ updatedChat, message: "You have been added to the group." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
};

module.exports = {
  accessChat,
  fetchChats,
  fetchChat,
  fetchGroups,
  createGroupChat,
  exitGroupChat,
  addSelfToGroupChat,
};
