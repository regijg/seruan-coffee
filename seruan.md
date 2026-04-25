# SYSTEM INSTRUCTION

Mode: GENERATE FULL PROJECT (PREMIUM LEVEL + SEO + OG)

GOAL:
Buat website landing page produk coffee modern (tanpa database) dengan fitur:

* List produk kopi
* Detail produk (multi page, tanpa DB)
* Klik produk → redirect ke WhatsApp (auto message + preview link)
* UI premium (startup-level, Apple-like clean UI)
* Dark mode toggle
* Animasi smooth (Framer Motion)
* Tanpa reload (SPA feel)
* SEO basic + Open Graph (WA preview)
* Siap deploy ke Vercel

---

# PRIORITY (WAJIB DIIKUTI)

* Design HARUS premium (startup-level)
* UX cepat & clean
* Preview WhatsApp HARUS muncul (pakai OG)
* Mobile-first
* Animasi halus

---

# TECH STACK (WAJIB)

* Next.js (App Router)
* Tailwind CSS
* Framer Motion
* Lucide React
* next-themes
* No backend
* No database

---

# CORE FEATURES

## 1. PRODUCT DATA

File: `/data/products.ts`

```ts
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
    image: "/images/espresso.jpg"
  },
  {
    id: 2,
    slug: "americano",
    name: "Americano",
    price: "Rp 20.000",
    description: "Smooth espresso with hot water",
    image: "/images/americano.jpg"
  },
  {
    id: 3,
    slug: "cappuccino",
    name: "Cappuccino",
    price: "Rp 25.000",
    description: "Perfect balance of coffee & milk",
    image: "/images/cappuccino.jpg"
  },
  {
    id: 4,
    slug: "latte",
    name: "Latte",
    price: "Rp 27.000",
    description: "Creamy milk with espresso",
    image: "/images/latte.jpg"
  },
  {
    id: 5,
    slug: "cold-brew",
    name: "Cold Brew",
    price: "Rp 28.000",
    description: "Cold extracted smooth coffee",
    image: "/images/coldbrew.jpg"
  },
  {
    id: 6,
    slug: "kopi-susu",
    name: "Kopi Susu Gula Aren",
    price: "Rp 22.000",
    description: "Local favorite with palm sugar",
    image: "/images/kopisusu.jpg"
  }
]
```

---

## 2. WHATSAPP REDIRECT (UPDATED - WAJIB PAKAI LINK DETAIL)

```ts
export const orderViaWhatsApp = (product: Product) => {
  const phone = "6281234567890"

  const baseUrl = window.location.origin

  const message = `Halo, saya mau pesan:

☕ ${product.name}
💰 ${product.price}

Detail produk:
${baseUrl}/product/${product.slug}
`

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}
```

---

## 3. ROUTING

```
/app
  layout.tsx
  page.tsx
  /product
    /[slug]
      page.tsx
```

---

## 4. OPEN GRAPH (WAJIB - SUPER PENTING)

### GLOBAL METADATA

Di `layout.tsx`:

```ts
export const metadata = {
  title: "Seruan Coffee - Premium Coffee",
  description: "Nikmati kopi premium tanpa ribet",
  openGraph: {
    title: "Seruan Coffee",
    description: "Ngopi Gak Harus Ribet",
    images: ["/images/og-default.jpg"]
  }
}
```

---

### DYNAMIC OG (DETAIL PAGE)

WAJIB pakai `generateMetadata`

```ts
import { products } from "@/data/products"

export async function generateMetadata({ params }) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    return {
      title: "Product Not Found"
    }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  }
}
```

---

## 5. COMPONENT STRUCTURE

```
/components
  Navbar.tsx
  Hero.tsx
  ProductCard.tsx
  ProductList.tsx
  Footer.tsx
  ThemeToggle.tsx
```

---

## 6. HERO

* Full screen
* Background kopi
* Overlay gelap
* Headline:
  "Ngopi Gak Harus Ribet"

---

## 7. PRODUCT GRID

* Responsive
* Framer Motion animation
* Stagger effect

---

## 8. PRODUCT CARD

* Image
* Nama
* Harga
* Button:

  * Detail
  * WhatsApp

---

## 9. DETAIL PAGE

* Image besar
* Nama
* Harga
* Deskripsi
* Button WA
* Back button

---

## 10. DARK MODE

* next-themes
* Toggle icon
* Smooth transition

---

## 11. ANIMATION

* Fade in
* Stagger
* Hover scale
* Page transition

---

## 12. SEO BASIC

WAJIB ADA:

* title
* description
* openGraph
* viewport

---

## 13. IMAGE

* next/image
* Lazy load
* Responsive

---

## 14. NO RELOAD

* Gunakan Link
* Smooth scroll

---

## 15. DEPLOYMENT

* Harus langsung jalan di Vercel

---

## OUTPUT FORMAT

Claude HARUS:

1. Generate semua file
2. Langsung runnable
3. Clean code
4. Tanpa penjelasan
5. Production ready

---

## STRICT RULES

* NO backend
* NO database
* NO reload
* WAJIB OG aktif (WA preview harus muncul)
* WAJIB premium UI
