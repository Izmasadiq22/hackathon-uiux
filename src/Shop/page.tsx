import React from "react";

const Shop = () => {
  return (
    <div>
      {/* Background with Blur */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg"
          style={{
            backgroundImage: "url('public/images/Rectangle 1.png')",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold bg-black/50 px-6 py-2 rounded">
            Shop
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="p-4">
        <p className="text-gray-500">
          <span className="hover:underline cursor-pointer">Home</span> &gt;{" "}
          <span className="font-bold text-gray-700">Shop</span>
        </p>
      </div>

      {/* Products Grid */}
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
          <div
            key={product}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            {/* <img
              src={`https://via.placeholder.com/300x200?text=Product+${product}`}
              alt={`Product ${product}`}
              className="w-full h-48 object-cover"
            /> */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">Product {product}</h3>
              <p className="text-gray-600 mt-1">$20.00</p>
              <button className="mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;
