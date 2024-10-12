import { Product } from "./app/products/productsSlice"

export const BRAND_NAME = "NilkanthMart"
export const githubRepoLink =
  "https://github.com/Nilkanth-Patadiya/ecommerce-app"
export const allPages = [
  { label: "Products", path: "/products" },
  { label: "My Orders", path: "/orders" },
  { label: "Dashboard", path: "/admin-dashboard" },
  { label: "Customers", path: "/customers" },
]
export const fallbackProduct: Product = {
  id: 0,
  name: "Product1",
  category: "category1",
  price: 0,
  description: "No description available",
  stock: 0,
  imageURL: "default-image-url",
}
