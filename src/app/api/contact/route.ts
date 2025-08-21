import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!email || !message) {
      return NextResponse.json({ success: false, error: "Email and message are required" }, { status: 400 });
    }

    await db.query(
      "INSERT INTO messages (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, email, phone, message]
    );

    return NextResponse.json({ success: true, msg: "Message stored in database!" });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
  }
}
