import { HiOutlineTrophy } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Checkout() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className=" bg-[#FFF3E3] relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/images/Rectangle 1.png')",
        }}
      >
        <div className="bg-opacity-50 px-4 py-2 rounded-md text-black">
          <h1 className="text-2xl md:text-4xl font-bold">Checkout</h1>
          <p className="text-sm mt-2">Home &gt; Checkout</p>
        </div>
      </section>

      {/* Billing and Order Section */}
      <section className="container mx-auto py-8 px-4 md:py-16 md:px-0">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-8 md:mb-12">
          Billing Details
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Billing Form */}
          <div className="lg:w-2/3 space-y-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Company Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country / Region</label>
                <select className="mt-1 p-3 w-full border rounded-md">
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Street Address</label>
                <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Street Address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Town / City</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Town / City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Province</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Province" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="ZIP Code" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md" placeholder="Phone Number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="mt-1 p-3 w-full border rounded-md" placeholder="Email Address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Information</label>
                <textarea className="mt-1 p-3 w-full border rounded-md" rows={4} placeholder="Additional Information"></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 border p-6 rounded-md space-y-6">
            <h3 className="text-xl font-bold">Product</h3>
            <div className="flex justify-between">
              <span>Agagard Sofa x 1</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="text-yellow-500 text-lg font-bold">Rs. 250,000.00</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Method</label>
              <div className="mt-2 space-y-2">
                <div>
                  <input type="radio" id="bank" name="payment" className="mr-2" />
                  <label htmlFor="bank">Direct Bank Transfer</label>
                </div>
                <div>
                  <input type="radio" id="cash" name="payment" className="mr-2" />
                  <label htmlFor="cash">Cash On Delivery</label>
                </div>
              </div>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-3 w-full rounded-md">
              Place Order
            </button>
          </div>
        </div>
      </section>
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
    </main>
  );
}
