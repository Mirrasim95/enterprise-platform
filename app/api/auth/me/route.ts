import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/lib/data";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "secret") as {
    userId: string;
  };
  const userId = decoded.userId;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return NextResponse.json("Not found", { status: 404 });
  }

  const { password, ...userWithoutPassword } = user;

  return NextResponse.json(userWithoutPassword);
}
