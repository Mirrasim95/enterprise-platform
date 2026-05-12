import { orders } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return NextResponse.json("Not found", { status: 404 });
  }

  return NextResponse.json(order);
}
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const order = orders.find((order) => order.id === id);
  if (!order) {
    return NextResponse.json("Not found", { status: 404 });
  }
  try {
    const body = await request.json();
    Object.assign(order, body);
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  return NextResponse.json(order);
}
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return NextResponse.json("Not found", { status: 404 });
  }
  const newOrders = orders.filter((o) => o.id !== order.id);
  orders.length = 0;
  orders.push(...newOrders);

  return NextResponse.json(orders);
}
