import prisma from "@/app/modules/db";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { email: string } }) => {
  const email = params.email;
  const user = await prisma.user.findFirstOrThrow({
    where: {
      email: email,
    },
  });
  console.log(user);
  return NextResponse.json({ user }, { status: 200 });
};

export const PUT = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  const email = params.email;
  const { name } = await req.json();
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      name: name,
    },
  });
  console.log(user);
  return NextResponse.json({ user }, { status: 200 });
};

export const DELETE = async (req: Request,{ params }: { params: { email: string } }) => {
  const email = params.email;
  const user = await prisma.user.delete({
    where: {
      email: email,
    },
  });
  console.log(user);
  return NextResponse.json({user}, { status: 200 });
};
