export type Product = {
  id: number
  slug: string
  name: string
  price: string
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: "espresso",
    name: "Espresso",
    price: "Rp 18.000",
    description: "Strong and bold espresso shot",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80",
  },
  {
    id: 2,
    slug: "americano",
    name: "Americano",
    price: "Rp 20.000",
    description: "Smooth espresso with hot water",
    image: "https://images.unsplash.com/photo-1521302200778-33500795e128?w=800&q=80",
  },
  {
    id: 3,
    slug: "cappuccino",
    name: "Cappuccino",
    price: "Rp 25.000",
    description: "Perfect balance of coffee & milk",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
  },
  {
    id: 4,
    slug: "latte",
    name: "Latte",
    price: "Rp 27.000",
    description: "Creamy milk with espresso",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&q=80",
  },
  {
    id: 5,
    slug: "cold-brew",
    name: "Cold Brew",
    price: "Rp 28.000",
    description: "Cold extracted smooth coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  },
  {
    id: 6,
    slug: "kopi-susu",
    name: "Kopi Susu Gula Aren",
    price: "Rp 22.000",
    description: "Local favorite with palm sugar",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
  },
]
