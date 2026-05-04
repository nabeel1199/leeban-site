export default function Contact() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#FF6B35] via-[#C4247E] to-[#7B2D8B]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-5xl font-black text-white md:text-6xl">Contact</h1>
          <p className="mt-4 text-xl text-white/80">We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <p className="text-lg text-gray-600">
            For business inquiries, partnerships, or general questions:
          </p>

          <a
            href="mailto:info@leeban.co"
            className="mt-6 inline-block text-2xl font-bold text-[#C4247E] hover:text-[#7B2D8B] transition-colors"
          >
            info@leeban.co
          </a>

          <div className="mt-12 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8 text-left space-y-4">
            <div>
              <p className="text-sm font-bold text-[#3D1F5C]">Business Inquiries</p>
              <p className="text-gray-500 text-sm mt-1">Partnerships, collaborations, and enterprise opportunities.</p>
            </div>
            <div className="border-t border-gray-100" />
            <div>
              <p className="text-sm font-bold text-[#3D1F5C]">App Support</p>
              <p className="text-gray-500 text-sm mt-1">
                For MyUniLoop app support, visit{" "}
                <a href="https://myuniloop.com/contact" className="text-orange-500 hover:underline">
                  myuniloop.com/contact
                </a>
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-400">
            Based in Pakistan · Building for the world
          </p>
        </div>
      </section>
    </main>
  )
}
