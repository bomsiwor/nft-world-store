import { useEffect, useState } from "react";

// Mock data - replace with your Astro content collection
const hotProducts = [
  {
    id: 1,
    title: "NFTWRLD - Balaclava Brian Reflective Gothic Style",
    image: "/assets/NFTWRLD_-_Balaclava_Brian.webp",
  },
  {
    id: 2,
    title: "NFTWRLD - T-shirt_Boxy_Axel",
    image: "/assets/NFTWRLD_-_T-shirt_Boxy_Axel.webp",
  },
  {
    id: 3,
    title: "NFTWRLD - Trucker Hat No More Enemies Unisex Retro",
    image: "/assets/NFTWRLD_-_Trucker_Hat_No_More_Enemies_Unisex_Retro-.webp",
  },
  {
    id: 4,
    title: "NFTWRLD - Jersey Boxy Snoop",
    image: "/assets/NFTWRLD_-_Jersey_Boxy_Snoop.webp",
  },
  {
    id: 5,
    title: "NFTWRLD - Trucker Hat Drake",
    image: "/assets/NFTWRLD_-_Trucker_Hat_Sade-.webp",
  },
];

const recentProducts = [
  {
    id: 1,
    title: "NFTWRLD - Jersey Boxy Ghetts Striped Unisex",
    price: "IDR 155.000",
    image: "/assets/new arrival 1.webp",
    createdAt: "2024-01-15",
  },
  {
    id: 7,
    title: "NFTWRLD - Jersey Boxy Denzel",
    price: "IDR 155.000",
    image: "/assets/new arrival 2.webp",
    createdAt: "2024-01-14",
  },
  {
    id: 8,
    title: "NFTWRLD - Jersey Boxy Elliott",
    price: "IDR 199.000",
    image: "/assets/new arrival 3.webp",
    createdAt: "2024-01-13",
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Products
      </h2>

      {/* Hot Products Carousel */}
      <div className="mb-16">
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute -left-2 z-10 bg-white/80 hover:bg-white border border-gray-300 rounded-md p-2 transition-colors"
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

            <div className="flex space-x-4  max-w-4xl -translate-x-[2rem]">
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
              className="absolute -right-4 z-10 bg-white/80 hover:bg-white border border-gray-300 rounded-md p-2 transition-colors"
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

      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center my-4">
        <div className="text-center text-gray-500">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
            </svg>
          </div>
          <p className="text-sm">YouTube Video Placeholder</p>
        </div>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        New Arrival
      </h2>

      {/* Recent Products Grid */}
      <div className="">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          New Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
