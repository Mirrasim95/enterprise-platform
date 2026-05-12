import { orders } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();
  orders.push(body);
  return NextResponse.json(body, { status: 201 });
}
