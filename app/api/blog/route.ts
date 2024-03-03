import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


//POST USER MAIL
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newBlog = await prisma.blog.create({
      data: data,
    });
    return NextResponse.json(newBlog);
  } catch (err) {
    console.log("here is error" + err);
    return NextResponse.json(err);
  }
}