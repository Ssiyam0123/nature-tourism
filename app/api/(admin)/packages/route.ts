import connect from "@/lib/db";
import Package from "@/models/Package";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const packageData = await request.json();
        // console.log(packageData)
        await connect();
        const newPackage = new Package(packageData);
        await newPackage.save()
        console.log(newPackage)

        return new NextResponse(JSON.stringify({ message: "package added successfully" }), { status: 200 })
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: "error while adding package" }), { status: 400 })
    }

}