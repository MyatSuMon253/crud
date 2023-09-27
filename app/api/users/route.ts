import prisma from '@/app/modules/db';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request, response: Response) {
  const res = await prisma.user.findMany();
  return NextResponse.json({users: res}, {status: 200})
}

export async function POST(request: Request) {
  const {name, email} = await request.json();
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  })
  console.log(user)
  return NextResponse.json({user}, {status: 200})
}