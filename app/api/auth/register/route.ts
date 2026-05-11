import { users } from "@/lib/data";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (users.find((user) => user.email === email)) {
    return NextResponse.json("User not found", { status: 409 });
  }

  const newUser = {
    id: String(users.length + 1),
    email: email,
    password: hashedPassword,
    role: "user",
  };
  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
