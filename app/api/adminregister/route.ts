import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// @ts-ignore
import jwt from "jsonwebtoken";
// @ts-ignore
import CryptoJS from "crypto-js";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { userName, password } = data;
        const encryptedPassword: string = CryptoJS.AES.encrypt(data.password, process.env.JWT_SEC).toString();
        const newAdmin = await prisma.admin.create({
            data:{userName,
            password: encryptedPassword,
            }
        });
        const token = jwt.sign({ adminId: newAdmin.id }, process.env.JWT_SEC, { expiresIn: "1h" });

        return NextResponse.json({ admin: newAdmin, token });
      } catch (err) {
        console.log("here is error" + err);
        return NextResponse.json(err);
      }
}