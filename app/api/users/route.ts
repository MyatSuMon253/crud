import { prisma } from '@/app/modules/db';
import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
 
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json({users}, {status: 200})
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)
  if (!validation.success) 
    return NextResponse.json(validation.error.errors);

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return NextResponse.json(user, {status: 201})
}