import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Sytherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/syltherine.png",
      sale: "30%",
    },
    {
      id: 2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/levisosa.png",
      sale: "50%",
    },
    {
      id: 3,
      name: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "/images/lolito.png",
      sale: "15%",
    },
    {
      id: 4,
      name: "Respira",
      desc: "Outdoor chair and table",
      price: "Rp 500.000",
      img: "/images/respiro1.png",
      new: true,
    },

    {
      id: 1,
      name: "Sytherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/syltherine.png",
      sale: "30%",
    },
    {
      id: 2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/levisosa.png",
      sale: "50%",
    },
    {
      id: 3,
      name: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "/images/lolito.png",
      sale: "15%",
    },
    {
      id: 4,
      name: "Respira",
      desc: "Outdoor chair and table",
      price: "Rp 500.000",
      img: "/images/respiro1.png",
      new: true,
    },

    {
      id: 1,
      name: "Sytherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/syltherine.png",
      sale: "30%",
    },
    {
      id: 2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/levisosa.png",
      sale: "50%",
    },
    {
      id: 3,
      name: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "/images/lolito.png",
      sale: "15%",
    },
    {
      id: 4,
      name: "Respira",
      desc: "Outdoor chair and table",
      price: "Rp 500.000",
      img: "/images/respiro1.png",
      new: true,
    },

    {
      id: 1,
      name: "Sytherine",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/syltherine.png",
      sale: "30%",
    },
    {
      id: 2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "Rp 2.500.000",
      img: "/images/levisosa.png",
      sale: "50%",
    },
    {
      id: 3,
      name: "Lolito",
      desc: "Luxury big sofa",
      price: "Rp 7.000.000",
      img: "/images/lolito.png",
      sale: "15%",
    },
    {
      id: 4,
      name: "Respira",
      desc: "Outdoor chair and table",
      price: "Rp 500.000",
      img: "/images/respiro1.png",
      new: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/images/Rectangle 1.png')",
        }}
      >
        <div className="bg-opacity-70 px-4 py-2 rounded-md">
          <h1 className="text-4xl font-bold">Shop</h1>
          <p className="text-sm mt-2 text-gray-600">Home &gt; Shop</p>
        </div>
      </section>

      {/* Shop Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gray-50 border-b">
        <div className="flex items-center space-x-4">
          <button className="border px-3 py-1 rounded-md">Filter</button>
          <p className="text-sm text-gray-600">Showing 1–12 of {products.length} results</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-4 mt-4 sm:mt-0">
          <div className="flex items-center">
            <label className="text-sm text-gray-600 mr-2">Show:</label>
            <select className="border p-1 text-sm rounded-md">
              <option>12</option>
              <option>24</option>
            </select>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <label className="text-sm text-gray-600 mr-2">Sort By:</label>
            <select className="border p-1 text-sm rounded-md">
              <option>Default</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="relative border rounded-lg p-4">
            {product.sale && (
              <span className="absolute top-2 left-2 bg-orange-800 text-white text-xs px-2 py-1 rounded">
                {product.sale}
              </span>
            )}
            {product.new && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                New
              </span>
            )}
            <img
              src={product.img}
              alt={`Image of ${product.name}`}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.desc}</p>
            <p className="text-orange-500 font-bold mt-2">{product.price}</p>
            <button className="mt-3 w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 mb-6 space-x-2">
        <button className="border px-3 py-1 rounded-md hover:bg-orange-500 hover:text-white">
          1
        </button>
        <button className="border px-3 py-1 rounded-md hover:bg-orange-500 hover:text-white">
          2
        </button>
        <button className="border px-3 py-1 rounded-md hover:bg-orange-500 hover:text-white">
          Next
        </button>
      </div>

      {/* Icons Section */}
      <div className="bg-[#FFF3E3] p-10 flex flex-wrap gap-6 justify-center">
        <div className="flex flex-col items-center text-center w-60">
          <HiOutlineTrophy className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            High Quality
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <IoShieldCheckmarkOutline className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            Warranty Protection
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <LiaShippingFastSolid className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            Free Shipping
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>

        <div className="flex flex-col items-center text-center w-60">
          <MdOutlineSupportAgent className="h-14 w-14 text-black mb-3" />
          <span className="font-sans font-bold text-black text-lg">
            24/7 Support
          </span>
          <span className="text-gray-400 text-sm">Delivery on all orders</span>
        </div>
      </div>
    </div>
  );
}
