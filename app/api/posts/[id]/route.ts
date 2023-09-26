import prisma from "@/app/modules/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request,{ params }: { params: { id: string } }) => {
  console.log(params)
  const id = Number(params.id);
 
  const post = await prisma.post.findFirstOrThrow({
    where: {
      id: id,
    },
  });
  console.log(post);
  return NextResponse.json({ post }, { status: 200 });
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);
  const { title, content, published } = await req.json();
  const post = await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      content: content,
      published: published
    },
  });
  console.log(post);
  return NextResponse.json({ post }, { status: 200 });
};

export const DELETE = async (req: Request,{ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const post = await prisma.post.delete({
    where: {
      id: id,
    },
  });
  console.log(post);
  return NextResponse.json({post}, { status: 200 });
};
