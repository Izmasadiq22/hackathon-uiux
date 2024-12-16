import React from "react";
import Image from "next/image";

export default function OurProducts() {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      badge: "-30%",
      image: "/images/syltherine.png",
     },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      badge: null,
      image:"/images/levisosa.png",
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      badge: "-50%",
      image: "/images/lolito.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      badge: "New",
      image: "/images/respiro1.png",
    },
    {
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/images/griffo.png",
    },
    {
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      badge: "New",
      image: "/images/muggo.png",
    },
    {
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      badge: "-50%",
      image: "/images/pingky.png",
    },
    {
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      badge: "New",
      image: "/images/potty.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-md overflow-hidden"
          >
            {product.badge && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </span>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              layout="responsive"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[#B88E2F] font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
}
