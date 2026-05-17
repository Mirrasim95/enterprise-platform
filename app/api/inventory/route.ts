import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export async function GET() {
  const inventory = products.map((p) => ({
    id: p.id,
    name: p.name,
    stock: p.stock,
    category: p.category,
  }));
  return NextResponse.json(inventory);
}
