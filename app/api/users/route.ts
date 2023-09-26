import prisma from '@/app/modules/db';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request, response: Response) {
  const res = await prisma.user.findMany();
  const users = await JSON.stringify(res);
  console.log(users)
  return NextResponse.json({users}, {status: 200})
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