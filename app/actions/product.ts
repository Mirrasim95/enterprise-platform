"use server";

import { products } from "@/lib/data";
import { z } from "zod";

const Product = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  stock: z.number().positive(),
  category: z.string().min(1),
});

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const category = formData.get("category") as string;

  //Zod validasiyasi burarda
  const result = Product.safeParse({ name, price, stock, category });

  if (!result.success) {
    return { error: result.error.issues };
  }

  const newProduct = {
    id: String(products.length + 1),
    name: name,
    price: price,
    stock: stock,
    category: category,
  };

  products.push(newProduct);
}
