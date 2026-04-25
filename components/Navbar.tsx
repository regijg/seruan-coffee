"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200/60 dark:border-zinc-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-xl text-zinc-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          <Coffee className="w-5 h-5 text-amber-500" />
          <span>Seruan Coffee</span>
        </Link>
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
