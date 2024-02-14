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
module.exports = { accessChat };
