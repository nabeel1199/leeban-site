import Link from "next/link"

const tags = ["Social Feed", "Marketplace", "Loops", "Chat", "Tea Posts", "Premium"]

const stats = [
  { value: "1", label: "App Launched" },
  { value: "📱", label: "Mobile-First" },
  { value: "🇵🇰", label: "Built in Pakistan" },
  { value: "🌍", label: "Built for Everyone" },
]

const values = [
  {
    icon: "🎯",
    title: "Product-Led",
    text: "We obsess over the product. Every detail — from interaction to performance — is intentional.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable",
    text: "We ship quickly without cutting corners. Real-time features, clean architecture, stable apps.",
  },
  {
    icon: "🌍",
    title: "Built for Everyone",
    text: "We design for global audiences. Our apps are inclusive, accessible, and built to scale.",
  },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#E8384D] via-[#C4247E] to-[#7B2D8B]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-white shadow-2xl ring-4 ring-white/30 overflow-hidden flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Leeban Soft.Dev."
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            We Build Apps<br />People Love
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/80">
            Leeban Soft.Dev. is a software development company crafting beautifully
            designed, high-performance mobile applications for everyone.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="rounded-full bg-white px-8 py-4 font-bold text-[#C4247E] shadow-xl hover:shadow-2xl transition-shadow"
            >
              View Our Work
            </a>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-[#3D1F5C] md:text-5xl">What We Do</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              We design and develop mobile applications from concept to launch — with a focus on
              clean UX, real-time features, and products that genuinely improve people&apos;s lives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#3D1F5C]">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#3D1F5C] md:text-5xl">Our Products</h2>
            <p className="mt-4 text-lg text-gray-500">
              Apps we&apos;ve shipped — with more on the way.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl shadow-[#C4247E]/10 hover:shadow-2xl hover:shadow-[#C4247E]/15 transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shrink-0">
                  M
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-[#3D1F5C]">MyUniLoop</h3>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      In Development
                    </span>
                  </div>

                  <p className="text-[#C4247E] font-semibold mb-3">
                    The social platform for university students
                  </p>

                  <p className="text-gray-600 leading-7 mb-6">
                    A feature-rich student app combining social feed, peer-to-peer marketplace,
                    location-based loops & events, real-time group chat, and anonymous tea posts —
                    all built for campus life.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://myuniloop.com"
                      className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      Visit Website →
                    </a>
                    <a
                      href="#"
                      className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* More coming */}
            <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center">
              <p className="text-gray-400 font-medium">More apps coming soon</p>
              <p className="text-sm text-gray-300 mt-1">We&apos;re always building something new.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black text-[#3D1F5C] md:text-5xl">Who We Are</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leeban Soft.Dev. (SMC-Private) Limited is a software development company that
                builds high-quality mobile applications for a wide range of users and industries.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We started with the student space and we&apos;re expanding — every app we ship is
                crafted with the same attention to detail, performance, and design.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#FF6B35] to-[#C4247E] px-8 py-4 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-[#FAFAFA] p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl font-black text-[#C4247E]">{s.value}</p>
                  <p className="mt-2 text-sm font-semibold text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#FF6B35] via-[#C4247E] to-[#7B2D8B]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Have a project in mind or want to learn more about what we build?
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-[#C4247E] shadow-xl hover:shadow-2xl transition-shadow"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  )
}
