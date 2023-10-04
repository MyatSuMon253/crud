import { NextResponse } from "next/server";
import { Resend } from "resend";
// import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "...",
    subject: "...",
    react: <WelcomeTemplate name="myat" />,
  });

  return NextResponse.json({});
}
