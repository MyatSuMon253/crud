import { prisma } from "@/app/modules/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(post, { status: 200 });
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { title, content, published } = await request.json();
  const post = await prisma.post.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: title,
      content: content,
      published: published,
    },
  });
  return NextResponse.json(post, { status: 200 });
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const post = await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(post, { status: 200 });
};
