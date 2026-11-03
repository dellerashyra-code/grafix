
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Please keep your question under 2,000 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "The AI assistant is not configured yet." },
        { status: 503 }
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: "You are GraFix, a friendly Pre-Calculus tutor for Senior High School students. Focus on graph transformations. Explain in clear student-friendly language, show steps for math, distinguish inside versus outside changes, and use y = a f(b(x - h)) + k when relevant. Be accurate. If a question is unrelated, briefly redirect to graph transformations. Do not claim to see a graph unless the student describes it.",
              },
            ],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: message }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 900,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error("Gemini API error:", await response.text());
      return NextResponse.json(
        { error: "The AI service could not complete the request. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();

    const reply =
      data.candidates?.[0]?.content?.parts
        ?.map((part: { text?: string }) => part.text || "")
        .join("\n")
        .trim() || "I couldn't form a response. Please try rephrasing your question.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("GraFix assistant error:", error);

    return NextResponse.json(
      { error: "The request could not be processed. Please try again." },
      { status: 500 }
    );
  }
}
