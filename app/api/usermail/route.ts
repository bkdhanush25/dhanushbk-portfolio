import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//POST USER MAIL
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newUser = await prisma.user.create({
      data: data,
    });
    return NextResponse.json(newUser);
  } catch (err) {
    console.log("here is error" + err);
    return NextResponse.json(err);
  }
}

//GET ALL USERMAIL
// export async function GET(request: Request) {
//     try{
//       const users = await prisma.user.findMany({
//         select: {
//           email: true
//         }
//       })
//       return NextResponse.json(users);
//     }catch(err){
//         return NextResponse.json(err);
//     }
// }