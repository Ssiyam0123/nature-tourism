import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/lib/db";
import { auth } from "@/lib/firebase";

export const POST = async (request: Request) => {
  try {
    // Connect to database
    await connect();

    // Parse and validate request data
    const { name, email, password, profileImage } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }


//     const fireBaseUser = await auth.currentUser({
//         email,
//         password,
//         displayName: name,
//         photoUrl : profileImage || ''
//     })
// console.log(fireBaseUser)




    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      avatar: profileImage || "",
      role: "tourist", // Default role
      isVerified: false
    });

    // Save to database
    await newUser.save();

    return NextResponse.json(
      { 
        success: true, 
        message: "User registered successfully",
        userId: newUser._id 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Internal server error" 
      },
      { status: 500 }
    );
  }
};