const Message = require("../models/messageModel");

/**
 * Fetches all messages for a specific chat.
 * @param {Object} req - The request object containing the chat ID.
 * @param {Object} res - The response object.
 * @returns {Object[]} An array of message objects.
 */
const allMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "-password")
      .populate("receiver", "-password")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Sends a message to a chat.
 * @param {Object} req - The request object containing message details.
 * @param {Object} res - The response object.
 * @returns {Object} The newly created message object.
 */
const sendMessage = async (req, res) => {
  try {
    const { content, chatId, receiverId } = req.body;
    const senderId = req.user._id;

    // Create a new message
    const message = new Message({
      content,
      sender: senderId,
      chat: chatId,
      receiver: receiverId,
    });

    // Save the message
    await message.save();

    // Update the lastMessage in the chat
    await Chat.findByIdAndUpdate(chatId, { lastMessage: message._id });

    // Return success message or the new message object
    res.json({ message: "Message sent successfully.", data: message });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { allMessages, sendMessage };
