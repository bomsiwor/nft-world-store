export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
      </div>

      <div className="grid md:grid-cols-1 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-center">Our Story</h3>
          <p className="text-gray-600 leading-relaxed">
            Neophytefortoday adalah streetwear brand yang lahir di tahun 2022,
            built for the new generation yang pengen tampil authentic, bold, dan
            tetap rooted dengan culture mereka. Setiap koleksi yang kami rilis
            bukan cuma soal fashion, but it’s about storytelling—menggabungkan
            desain khas dengan pesan yang relevan sama kehidupan urban sekarang.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Kita percaya streetwear is more than just a style—it's a voice, an
            attitude, and a form of self-expression. That’s why we exist: to
            represent those who move forward, but never forget their roots.
          </p>
        </div>
      </div>
    </section>
  );
}
