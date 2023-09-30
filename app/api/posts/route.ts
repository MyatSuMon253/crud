import { prisma } from '@/app/modules/db';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(request: NextRequest) {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts, {status: 200})
}

export async function POST(request: NextRequest) {
  const {title, content, published} = await request.json();
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: published
    },
  })
  return NextResponse.json(post, {status: 201})
}