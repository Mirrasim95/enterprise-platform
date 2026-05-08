import { products } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json("Not Found", { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  const body = await request.json();
  if (!product) {
    return NextResponse.json("Not found", { status: 404 });
  }
  Object.assign(product, body);
  return NextResponse.json(product);
}
