import { NextResponse } from "next/server";
import { products } from "@/lib/data";
import { z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  stock: z.number().positive(),
  category: z.string().min(1),
});

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  const result = ProductSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error.issues }, { status: 400 });
  }
  const newProduct = { id: String(products.length + 1), ...result.data };
  products.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}
