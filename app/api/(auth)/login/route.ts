import connect from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const newUserData = await request.json();
        await connect();
        const newUser = new User(newUserData);
        await newUser.save();
        return new NextResponse(JSON.stringify({ message: "New user added successfully" }), { status: 200 })
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "error while adding user in db", error }))
    }
}