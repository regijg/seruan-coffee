import type { Product } from "@/data/products"

const WHATSAPP_NUMBER = "6281287627817"

export function orderViaWhatsApp(product: Product) {
  const baseUrl = window.location.origin

  const message = `Halo, saya mau pesan:

☕ ${product.name}
💰 ${product.price}

Detail produk:
${baseUrl}/product/${product.slug}
`

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, "_blank")
}
