export let products = [
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

export let orders = [
  { id: "1", productId: "1", quantity: 2, status: "pending", customerId: "u1" },
  { id: "2", productId: "3", quantity: 1, status: "shipped", customerId: "u2" },
];

export let users = [
  { id: "u1", email: "admin@shop.com", password: "hashed", role: "admin" },
];
