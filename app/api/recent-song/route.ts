import { getRecentSong } from "@/lib/get_song";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getRecentSong();
    return NextResponse.json(data);
  } catch (err) {
    console.error("recent-song route error:", err);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
