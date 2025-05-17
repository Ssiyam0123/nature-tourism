import connect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const {email, password} = await request.json();
        await connect();

        const isExisted = await User.findOne({email})

        if(!isExisted){
            return new NextResponse(JSON.stringify({message: "user not found"}),{status: 401})
        }

        // const newUser = new User(newUserData);
        // await newUser.save();

        const isPasswordValid = await bcrypt.compare(password, isExisted.password)
        console.log(isPasswordValid)

             
        if (!isPasswordValid) {
            return new NextResponse(
                JSON.stringify({ message: "Invalid credentials" }),
                { status: 401 }
            );
        }

        return new NextResponse(JSON.stringify({ message: "login successfull" }), { status: 200 })
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "error from (/api/login)", error }))
    }
}