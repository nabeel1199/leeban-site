import Link from "next/link"

export default function About() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#FF6B35] via-[#C4247E] to-[#7B2D8B]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-5xl font-black text-white md:text-6xl">About Us</h1>
          <p className="mt-4 text-xl text-white/80">Who we are and what drives us.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              <strong className="text-[#3D1F5C]">Leeban Soft.Dev. (SMC-Private) Limited</strong> is a
              software development company dedicated to building world-class mobile applications for the
              student community.
            </p>
            <p>
              Founded with a vision to connect university students through technology, we design and develop
              apps that solve real problems students face every day — from campus social interactions to
              peer-to-peer marketplaces and group events.
            </p>
            <p>
              Our flagship product,{" "}
              <a href="https://myuniloop.com" className="font-bold text-orange-500 hover:underline">
                MyUniLoop
              </a>
              , is a fully-featured student platform combining social networking, marketplace functionality,
              location-based loops, and real-time chat in one seamless mobile experience.
            </p>
            <p>
              We are committed to clean design, strong performance, and user experiences that feel native
              and intuitive — especially on mobile. Every product we build starts with the student
              in mind.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#FF6B35] via-[#C4247E] to-[#7B2D8B] p-px">
            <div className="rounded-2xl bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-[#C4247E]">Company Details</p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p><strong className="text-[#3D1F5C]">Legal Name:</strong> Leeban Soft.Dev. (SMC-Private) Limited</p>
                <p><strong className="text-[#3D1F5C]">Country:</strong> Pakistan</p>
                <p><strong className="text-[#3D1F5C]">Focus:</strong> Student mobile applications</p>
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
