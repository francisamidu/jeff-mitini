import { NextRequest, NextResponse } from "next/server";
import ky from "ky";
import { validateEmail } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.email || !body.fullName) {
      return NextResponse.json(
        { message: "Missing email or fullName" },
        { status: 400 }
      );
    }
    const isValidEmail = validateEmail(body.email);
    if (!isValidEmail) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    const res = await ky.post("https://api.kit.com/v4/subscribers", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_KIT_API_KEY}`,
        "X-Kit-Api-Key": process.env.NEXT_KIT_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email_address: body.email,
        firstName: body.fullName?.split(" ")[0],
        fields: {
          "Last name": body.fullName?.split(" ")[1],
          Source: "Website",
          Birthday: "Feb 17",
        },
      }),
    });
    const data: any = await res.json();

    if (data.status !== 200 || data.status !== 201) {
      return NextResponse.json(
        { message: "Something went wrong while subscribing to the newsletter" },
        { status: 400 }
      );
    }
    return NextResponse.json({
      message:
        "You have been added to the newsletter. Check your email for confirmation.",
    });
  } catch (err: any) {
    console.error("Newsletter handler error:", err);
    return NextResponse.json(
      { message: "Sorry that didn't work, try again" },
      { status: 500 }
    );
  }
}
