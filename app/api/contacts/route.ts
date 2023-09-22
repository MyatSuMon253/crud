import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch('https://dummyjson.com/posts')
  const data = await res.json();
  console.log('api data')

  return NextResponse.json({ data});
}

// export async function createUser() {
//   const res = await fetch('',{
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({})
//   })
//   const data = await res.json();

//   return NextResponse.json({data});
// }