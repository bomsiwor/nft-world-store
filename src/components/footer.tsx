export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Subscribe Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to get the latest updates on new
              arrivals and exclusive offers.
            </p>
            <div className="relative gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-[2px] top-1/2 -translate-y-1/2 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-100 hover:text-black transition-colors font-medium cursor-pointer">
                Subscribe Feed
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/faq"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="/returns"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
