import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const { stock } = await body;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json("Not found ", { status: 404 });
  }

  product.stock = stock;

  return NextResponse.json(product);
}
