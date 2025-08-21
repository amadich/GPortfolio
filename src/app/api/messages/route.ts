import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM messages ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch (error) {
    console.error("DB Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
