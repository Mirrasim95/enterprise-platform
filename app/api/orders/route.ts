import { orders } from "@/lib/data";
import { NextResponse } from "next/server";
import { z } from "zod";

const OrderSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().positive(),
  status: z.string().min(1),
  customerId: z.string().min(1),
});

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();
  const result = OrderSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error.issues }, { status: 400 });
  }

  const newOrder = {
    id: String(orders.length + 1),
    ...result.data,
  };

  orders.push(newOrder);
  return NextResponse.json(newOrder, { status: 201 });
}
