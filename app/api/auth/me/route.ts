import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/lib/data";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const decoded = jwt.verify(token, "secret") as { userId: string };
  const userId = decoded.userId;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return NextResponse.json("Not found", { status: 404 });
  }

  const { password, ...userWithoutPassword } = user;

  return NextResponse.json(userWithoutPassword);
}
