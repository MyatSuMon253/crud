import prisma from '@/app/modules/db';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request, response: Response) {
  const res = await prisma.post.findMany();
  const posts = await JSON.stringify(res);
  console.log(posts)
  return NextResponse.json({posts}, {status: 200})
}

export async function POST(request: Request) {
  const {title, content, published} = await request.json();
  console.log(title, content, published)
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: published
    },
  })
  console.log(post)
  return NextResponse.json({post}, {status: 200})
}