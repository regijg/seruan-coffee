import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { products } from "@/data/products"
import ProductDetailClient from "@/components/ProductDetailClient"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} — Seruan Coffee`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) notFound()

  return <ProductDetailClient product={product} />
}
