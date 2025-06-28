import { NextResponse } from "next/server";
import axios from "axios";

// Telegram bot configuration
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

// Helper function to send message to Telegram
async function sendToTelegram(message) {
  try {
    const response = await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });

    return response.data;
  } catch (error) {
    console.error(
      "Error sending message to Telegram:",
      error.response?.data || error.message
    );
    throw error;
  }
}

// POST handler for form submissions
export async function POST(request) {
  try {
    // Validate environment variables
    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json(
        { error: "Telegram configuration is missing" },
        { status: 500 }
      );
    }

    // Get form data from request
    const formData = await request.json();

    // Format message for Telegram
    const message = `🔔 <b>New Form Submission</b>\n\n${Object.entries(formData)
      .map(([key, value]) => `<b>${key}:</b> ${value}`)
      .join("\n")}`;

    // Send message to Telegram
    await sendToTelegram(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
