import { useState } from "react";

// Mock data - replace with your Astro content collection
const hotProducts = [
  {
    id: 1,
    title: "NFT Hot Product 1",
    image: "/assets/01.webp",
  },
  {
    id: 2,
    title: "NFT Hot Product 2",
    image: "/assets/02.webp",
  },
  {
    id: 3,
    title: "NFT Hot Product 3",
    image: "/assets/03.webp",
  },
  {
    id: 4,
    title: "NFT Hot Product 4",
    image: "/assets/04.webp",
  },
  {
    id: 5,
    title: "NFT Hot Product 5",
    image: "/assets/05.webp",
  },
];

const recentProducts = [
  {
    id: 1,
    title: "New Product 1",
    price: "IDR 99.000",
    image: "/assets/01.webp",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    title: "New Product 2",
    price: "IDR 149.000",
    image: "/assets/02.webp",
    createdAt: "2024-01-14",
  },
  {
    id: 3,
    title: "New Product 3",
    price: "IDR 199.000",
    image: "/assets/03.webp",
    createdAt: "2024-01-13",
  },
  {
    id: 4,
    title: "New Product 4",
    price: "IDR 79.000",
    image: "/assets/04.webp",
    createdAt: "2024-01-12",
  },
];

export default function NewArrivalSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + hotProducts.length) % hotProducts.length,
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        New Arrivals
      </h2>

      {/* Hot Products Carousel */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">Featured</h3>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 z-10 bg-white/80 hover:bg-white border border-gray-300 rounded-md p-2 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex space-x-4 overflow-hidden max-w-4xl">
              {hotProducts.map((product, index) => {
                const isActive = index === currentSlide;
                const isVisible =
                  Math.abs(index - currentSlide) <= 1 ||
                  (currentSlide === 0 && index === hotProducts.length - 1) ||
                  (currentSlide === hotProducts.length - 1 && index === 0);

                return (
                  <div
                    key={product.id}
                    className={`relative transition-all duration-300 ${
                      isVisible ? "block" : "hidden"
                    } ${isActive ? "scale-100" : "scale-90"}`}
                  >
                    <div className="relative w-80 h-80">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg" />
                      )}
                    </div>
                    <h4 className="text-center mt-4 font-medium">
                      {product.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-4 z-10 bg-white/80 hover:bg-white border border-gray-300 rounded-md p-2 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Products Grid */}
      <div className="">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Latest Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProducts.map((product) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-medium mb-2">{product.title}</h4>
              <p className="text-lg font-semibold">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
