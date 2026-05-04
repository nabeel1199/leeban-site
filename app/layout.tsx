import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Leeban Soft.Dev. — Student Technology",
  description:
    "Leeban Soft.Dev. (SMC-Private) Limited builds world-class mobile apps for university students worldwide.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm overflow-hidden flex items-center justify-center border border-gray-100">
                  <img src="/logo.png" alt="Leeban" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-black tracking-widest text-[#3D1F5C]">LEEBAN</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#FF6B35]">SOFT.DEV.</span>
                </div>
              </Link>

              <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
                <Link href="/#products" className="hidden sm:block hover:text-[#C4247E] transition-colors">
                  Products
                </Link>
                <Link href="/about" className="hidden sm:block hover:text-[#C4247E] transition-colors">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-[#FF6B35] to-[#C4247E] px-5 py-2 text-white font-semibold hover:opacity-90 transition-opacity shadow-sm"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-[#3D1F5C] text-white">
            <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img src="/logo.png" alt="Leeban" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-sm font-black tracking-widest">LEEBAN SOFT.DEV.</p>
                  <p className="text-xs text-white/50">(SMC-Private) Limited</p>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-white/60">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                <a href="https://myuniloop.com" className="hover:text-white transition-colors">MyUniLoop</a>
              </div>

              <p className="text-xs text-white/40">
                © 2025 Leeban Soft.Dev. (SMC-Private) Limited. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
