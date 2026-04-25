"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"
import type { Product } from "@/data/products"
import { orderViaWhatsApp } from "@/lib/whatsapp"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-zinc-300/40 dark:hover:shadow-zinc-950/60 transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-zinc-900 dark:text-white tracking-tight">
          {product.name}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 mb-3 leading-relaxed">
          {product.description}
        </p>
        <p className="text-amber-500 font-extrabold text-2xl mb-4 tracking-tight">
          {product.price}
        </p>

        <div className="flex gap-2">
          <Link
            href={`/product/${product.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-150"
          >
            Detail <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => orderViaWhatsApp(product)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </button>
        </div>
      </div>
    </motion.div>
  )
}
