import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// @ts-ignore
import jwt from "jsonwebtoken";
// @ts-ignore
import CryptoJS from "crypto-js";

const prisma = new PrismaClient();


// Define interfaces for request data
interface LoginData {
    userName: string;
    password: string;
}


export async function POST(request: Request) {
    
    try {
        const data: LoginData = await request.json();
        const { userName, password } = data; // Destructure userName and password from data

        // Find the user by userName
        const users = await prisma.admin.findMany({
            where: {
                OR: [
                    { userName: userName }, // Pass userName as the filter criteria
                    { password: password }, // Also filter by password
                ]
            }
        });

        // Check if any user with the provided username exists
        if (users.length === 0) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Assuming there's only one user with the provided username, we retrieve the first one from the array.
        const user = users[0];

        // Generate JWT token
        const token = jwt.sign({ adminId: user.id }, process.env.JWT_SEC, { expiresIn: "1h" });
        if(CryptoJS.AES.decrypt(user.password, process.env.JWT_SEC).toString(CryptoJS.enc.Utf8) === password){
            return NextResponse.json({ user, token });
        }else{
            // setIsLoggedIn(true);
            return NextResponse.json({ error: "userName or passowrd is wrong" }, { status: 404 });
        }
    } catch (err) {
        console.log("Error:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
