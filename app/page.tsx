import Link from "next/link"

const tags = ["Social Feed", "Marketplace", "Loops", "Chat", "Tea Posts", "Premium"]

const stats = [
  { value: "1", label: "App Launched" },
  { value: "🎓", label: "Student-First" },
  { value: "🇵🇰", label: "Built in Pakistan" },
  { value: "⭐", label: "Premium Quality" },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#E8384D] via-[#C4247E] to-[#7B2D8B]">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-white/20 backdrop-blur ring-4 ring-white/30 flex items-center justify-center shadow-2xl">
            <span className="text-4xl font-black text-white">L</span>
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Building the Future<br />of Student Technology
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/80">
            We craft beautifully designed mobile applications that connect and empower university students worldwide.
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

      {/* ── Products ── */}
      <section id="products" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#3D1F5C] md:text-5xl">Our Products</h2>
            <p className="mt-4 text-lg text-gray-500">Apps built for the real world, designed for students.</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-xl shadow-[#C4247E]/10 hover:shadow-2xl hover:shadow-[#C4247E]/15 transition-shadow">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shrink-0">
                  M
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-[#3D1F5C]">MyUniLoop</h3>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
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
                    <a
                      href="#"
                      className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black text-[#3D1F5C] md:text-5xl">Who We Are</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leeban Soft.Dev. (SMC-Private) Limited is a software development company dedicated to
                building world-class mobile applications for the student community.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Founded with a vision to connect university students through technology, we design and
                develop apps that solve real problems students face every day.
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
                  className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
            Have a project in mind or want to learn more about what we do?
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
