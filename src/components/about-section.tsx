export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
              </svg>
            </div>
            <p className="text-sm">YouTube Video Placeholder</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Our Story</h3>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
