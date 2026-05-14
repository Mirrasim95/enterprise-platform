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
    <form
      action={handleSubmit}
      className="border border-gray-300 rounded-2xl p-5 flex items-center"
    >
      <input
        name="name"
        placeholder="Name"
        className="border rounded-lg px-3 py-2 mr-2 border-gray-300"
      />
      <input
        name="price"
        placeholder="Price"
        className="border rounded-lg px-3 py-2 mr-2 border-gray-300"
      />
      <input
        name="stock"
        placeholder="Stock"
        className="border rounded-lg px-3 py-2 mr-2 border-gray-300"
      />
      <input
        name="category"
        placeholder="Category"
        className="border rounded-lg px-3 py-2 mr-2 border-gray-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
      >
        Add Product
      </button>
    </form>
  );
}
