import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const blogs = await prisma.blog.findMany();
    // Return the fetched blogs as a response
    return NextResponse.json(blogs);
  } catch (error) {
    // Handle any errors and return an error response
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' });
  }
}


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

