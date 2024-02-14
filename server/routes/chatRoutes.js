const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  fetchGroups,
} = require("../controllers/chatController");

router.post("/", authMiddleware, accessChat);
router.get("/", authMiddleware, fetchChats);
router.get("/groups", authMiddleware, fetchGroups);

module.exports = router;
