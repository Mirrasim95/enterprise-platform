"use client";
import { createProduct } from "@/app/actions/product";
import { useRouter } from "next/navigation";

export default function ProductForm() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await createProduct(formData);
    router.refresh();
  }

  return (
    <form action={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="price" placeholder="Price" />
      <input name="stock" placeholder="Stock" />
      <input name="category" placeholder="Category" />
      <button type="submit">Add Product</button>
    </form>
  );
}
