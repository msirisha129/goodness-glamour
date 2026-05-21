import express from "express";
import { getAIResponse } from "../services/aiService.js";

const router = express.Router();

// POST /api/chat
router.post("/", async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await getAIResponse(
      sessionId || "web-user",
      message,
      "chat"
    );

    res.json({
      success: true,
      reply: response.message,
      sessionId: response.sessionId,
    });

  } catch (error) {
    console.error("Chat API Error:", error);

    res.status(500).json({
      success: false,
      error: "AI assistant failed",
    });
  }
});

export default router;