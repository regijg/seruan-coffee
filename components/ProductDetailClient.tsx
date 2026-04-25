"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ChevronLeft, Tag } from "lucide-react"
import type { Product } from "@/data/products"
import { orderViaWhatsApp } from "@/lib/whatsapp"

export default function ProductDetailClient({ product }: { product: Product }) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors duration-150"
          >
            <ChevronLeft className="w-4 h-4" />
            Kembali ke Menu
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-2xl shadow-zinc-300/30 dark:shadow-zinc-950/50"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center py-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                Seruan Coffee
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-zinc-500 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">Harga</span>
              <span className="text-4xl font-black text-amber-500 tracking-tight">
                {product.price}
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => orderViaWhatsApp(product)}
              className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-150 text-lg shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan via WhatsApp
            </motion.button>

            <p className="text-zinc-400 dark:text-zinc-500 text-xs mt-4 text-center">
              Klik tombol di atas untuk langsung chat dengan kami
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
