"use client";
import Link from "next/link";
import Pinned from "./Pinned";
import logo from '../media/pwlogo.png'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav id='nav' className="bg-[#111] p-4 z-50" id="nav">
      <div className="container mx-auto flex items-center [justify-content:space-between]">
        <Link href="/" className="">
          <div className="flex space-x-2 ml-2 flex-row">
            <Image className="invert" src={logo} alt="PriceWise Logo" width={50} height={50} />
            <span className="text-white text-xl font-bold mt-1">PriceWise</span>
          </div>
        </Link>

        <div>
          <Pinned/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
