"use client";

import { useRouter } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import { Order, Product } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/lib/contexts/AuthContext";

export default function Page() {
  const auth = useAuth();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((res) => res.json()),
    refetchInterval: 1000,
  });

  const { data: orders, isLoading: ordersLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetch("/api/orders").then((res) => res.json()),
    refetchInterval: 1000,
  });

  if (!auth?.user) {
    router.push("/login");
    return null;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (ordersLoading) {
    return <div>...Orders is Loading</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <div className="flex justify-around items-center">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <ProductForm />
      </div>

      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {data?.map((item: Product) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-500">${item.price}</p>
            <p className="text-sm text-gray-400">{item.category}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {orders?.map((item: Order) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <p className="font-bold">Order #{item.id}</p>
            <p className="text-gray-500">Quantity: {item.quantity}</p>
            <p className="text-sm text-blue-500">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
