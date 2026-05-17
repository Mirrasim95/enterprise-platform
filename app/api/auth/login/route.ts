import { users } from "@/lib/data";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return NextResponse.json("User not found", { status: 404 });
  }

  const match = await bcrypt.compare(password, user?.password);
  if (!match) {
    return NextResponse.json("User not found", { status: 404 });
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET ?? "secret",
    { expiresIn: "7d" },
  );

  return NextResponse.json({ token });
}
