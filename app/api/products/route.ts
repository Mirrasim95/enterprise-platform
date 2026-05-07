import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  products.push(body);
  return NextResponse.json(body, { status: 201 });
}
