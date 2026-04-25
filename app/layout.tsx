import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seruan-coffee.vercel.app"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Seruan Coffee — Premium Coffee",
    template: "%s | Seruan Coffee",
  },
  description: "Nikmati kopi premium tanpa ribet. Pilih, pesan, nikmati langsung via WhatsApp.",
  keywords: ["kopi", "coffee", "espresso", "latte", "cappuccino", "seruan coffee"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Seruan Coffee",
    title: "Seruan Coffee — Ngopi Gak Harus Ribet",
    description: "Kopi berkualitas, harga terjangkau. Pesan via WhatsApp.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Seruan Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seruan Coffee",
    description: "Ngopi Gak Harus Ribet",
    images: ["/images/og-default.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white dark:bg-zinc-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
