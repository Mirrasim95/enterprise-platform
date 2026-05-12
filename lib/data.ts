export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface Order {
  id: string;
  productId: string;
  quantity: number;
  status: string;
  customerId: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: string;
}

export const products: Product[] = [
  { id: "1", name: "Nike Air Max", price: 120, stock: 50, category: "shoes" },
  {
    id: "2",
    name: "Adidas Hoodie",
    price: 80,
    stock: 30,
    category: "clothing",
  },
  { id: "3", name: "Levi's Jeans", price: 60, stock: 20, category: "clothing" },
];

export const orders: Order[] = [
  { id: "1", productId: "1", quantity: 2, status: "pending", customerId: "u1" },
  { id: "2", productId: "3", quantity: 1, status: "shipped", customerId: "u2" },
];

export const users: User[] = [
  { id: "1", email: "admin@shop.com", password: "hashed", role: "admin" },
];
