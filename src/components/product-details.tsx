import { useState } from "react";
import { ArrowLeft, Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock product data
const products = [
  {
    id: "1",
    title: "NFTWRLD - Balaclava Brian Reflective Gothic Style",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.5,
    reviews: 78,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/NFTWRLD_-_Balaclava_Brian.webp"],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "2",
    title: "NFTWRLD - T-shirt_Boxy_Axel",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.9,
    reviews: 92,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/NFTWRLD_-_T-shirt_Boxy_Axel.webp"],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "3",
    title: "NFTWRLD - Trucker Hat No More Enemies Unisex Retro",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.1,
    reviews: 55,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: [
      "/assets/NFTWRLD_-_Trucker_Hat_No_More_Enemies_Unisex_Retro-.webp",
    ],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "4",
    title: "NFTWRLD - Jersey Boxy Snoop",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.7,
    reviews: 63,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/NFTWRLD_-_Jersey_Boxy_Snoop.webp"],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "5",
    title: "NFTWRLD - Trucker Hat Drake",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.3,
    reviews: 81,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/NFTWRLD_-_Trucker_Hat_Sade-.webp"],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "6",
    title: "NFTWRLD - Jersey Boxy Ghetts Striped Unisex",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.6,
    reviews: 70,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/new arrival 1.webp"],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "7",
    title: "NFTWRLD - Jersey Boxy Denzel",
    price: "IDR 155.000",
    originalPrice: "IDR 249.999",
    rating: 4.2,
    reviews: 99,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/new arrival 2.webp"],
    inStock: true,
    category: "Premium Collection",
  },
  {
    id: "8",
    title: "NFTWRLD - Jersey Boxy Elliott",
    price: "IDR 199.000",
    originalPrice: "IDR 249.999",
    rating: 4.0,
    reviews: 32,
    description:
      "This is a detailed description of the premium product. It features high-quality materials and exceptional craftsmanship that makes it stand out from the competition.",
    features: [
      "High-quality materials",
      "Exceptional craftsmanship",
      "Modern design",
      "Durable construction",
      "Easy maintenance",
    ],
    images: ["/assets/new arrival 3.webp"],
    inStock: true,
    category: "Premium Collection",
  },
];

const relatedProducts = [
  {
    id: 6,
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

export default function ProductDetail({ productId }: { productId: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  console.log(productId);
  const product = products.find((prod) => prod.id == productId) || products[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-black hover:text-gray-600"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </a>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? "text-red-500" : ""}
            >
              <Heart
                className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}
              />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square mb-4">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-black" : "border-gray-200"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <Badge variant="destructive">Sale</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <Button className="flex-1 bg-black text-white hover:bg-gray-800">
                Add to Cart
              </Button>
            </div>

            <div className="text-sm text-gray-600">
              {product.inStock ? (
                <span className="text-green-600">✓ In Stock</span>
              ) : (
                <span className="text-red-600">✗ Out of Stock</span>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-square mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-2">{product.title}</h3>
                <p className="text-lg font-semibold">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
