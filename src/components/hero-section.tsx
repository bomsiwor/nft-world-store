import { useState, useEffect } from "react";

const heroImages = [
  "hero selection 0.webp",
  "hero selection 1.webp",
  "hero selection 2.webp",
  "hero-logo.webp",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden -z-10">
      {heroImages.map((src, index) => (
        <div
          key={index}
          className={`absolute bg-slate-900 transition-opacity duration-1000 h-full w-full ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-full w-full">
            <img
              src={"/assets/" + src || "/placeholder.svg"}
              alt={`Hero image ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            NFT Streetwear Collection
          </h1>
          <p className="text-xl md:text-2xl">Ready to Shop Now!</p>
          <p className="text-xl md:text-2xl">Get your wallets ready!</p>
        </div>
      </div>
    </section>
  );
}
