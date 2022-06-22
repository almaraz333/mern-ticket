const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", registerUser);

router.post("/login", loginUser);

router.get("/me", authMiddleware, getMe);

module.exports = router;
