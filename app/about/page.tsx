import Link from "next/link"

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#FF6B35] via-[#C4247E] to-[#7B2D8B]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-5xl font-black text-white md:text-6xl">About Us</h1>
          <p className="mt-4 text-xl text-white/80">
            A software company built on craft, speed, and ambition.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              <strong className="text-[#3D1F5C]">Leeban Soft.Dev. (SMC-Private) Limited</strong> is
              a software development company that designs and builds high-quality mobile applications
              for a wide range of users and industries.
            </p>
            <p>
              We started with the student space — our first product,{" "}
              <a href="https://myuniloop.com" className="font-bold text-orange-500 hover:underline">
                MyUniLoop
              </a>
              , is a social and marketplace platform built for university students. But that&apos;s
              just the beginning. We&apos;re building apps for everyone.
            </p>
            <p>
              Every product we ship reflects the same standards: clean design, strong performance,
              intuitive UX, and real-world utility. We don&apos;t build for the sake of building —
              we build things people actually want to use.
            </p>
            <p>
              We&apos;re based in Pakistan and building for the world.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#FF6B35] via-[#C4247E] to-[#7B2D8B] p-px">
            <div className="rounded-2xl bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-[#C4247E]">
                Company Details
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <strong className="text-[#3D1F5C]">Legal Name:</strong> Leeban Soft.Dev.
                  (SMC-Private) Limited
                </p>
                <p>
                  <strong className="text-[#3D1F5C]">Industry:</strong> Software Development &
                  Mobile Applications
                </p>
                <p>
                  <strong className="text-[#3D1F5C]">Country:</strong> Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#FF6B35] to-[#C4247E] px-8 py-4 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              Get in Touch
            </Link>
            <a
              href="https://myuniloop.com"
              className="rounded-full border border-gray-200 px-8 py-4 font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Visit MyUniLoop →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
