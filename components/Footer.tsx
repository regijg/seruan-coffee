import { Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Coffee className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-xl tracking-tight">Seruan Coffee</span>
          </div>

          <p className="text-zinc-400 text-sm text-center">
            Pesan via WhatsApp, nikmati di mana saja.
          </p>

          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Seruan Coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
