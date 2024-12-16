// Importing required dependencies
import Image from 'next/image';
import { MdPersonOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Furniro Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-black">Furniro</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-700 font-medium hover:text-[#B88E2F]">Home</a>
        <a href="#" className="text-gray-700 font-medium hover:text-[#B88E2F]">Shop</a>
        <a href="#" className="text-gray-700 font-medium hover:text-[#B88E2F]">Blog</a>
        <a href="#" className="text-gray-700 font-medium hover:text-[#B88E2F]">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-6 text-gray-700">
        <MdPersonOutline size={20} className="cursor-pointer hover:text-[#B88E2F]" />
        <IoSearch size={20} className="cursor-pointer hover:text-[#B88E2F]" />
        <FaRegHeart size={20} className="cursor-pointer hover:text-[#B88E2F]" />
        <BsCart3 size={20} className="cursor-pointer hover:text-[#B88E2F]" />
      </div>
    </header>
  );
}