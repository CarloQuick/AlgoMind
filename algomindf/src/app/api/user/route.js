import { NextResponse } from "next/server";
import User from "../../../models/user";
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(request) {
  const { name, email, points } = await request.json();
  await connectMongoDB();
  await User.create({ name, email, points: 0 });

  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}

export async function PUT(request, email, nums) {
  const body = await request.json();
  await connectMongoDB();
}
