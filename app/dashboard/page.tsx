"use client";

import { Order, Product } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((res) => res.json()),
  });

  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetch("/api/orders").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (ordersLoading) {
    return <div>...Orders is Loading</div>;
  }

  return (
    <div>
      <div>
        {data?.map((item: Product) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <div>
        {orders?.map((item: Order) => (
          <div key={item.id}>
            <p>Product Id - {item.productId}</p>
            <p>Quantity is {item.quantity}</p>
            <p>Status is {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
