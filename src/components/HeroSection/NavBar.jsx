import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai'

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-center items-center md:justify-between w-[80%] py-4 ">
        {/* Left Navigation */}
        <AiOutlineMenu className="m-2 md:hidden" />
        <ul className="items-center justify-center hidden text-sm font-semibold gap-x-4 font-mont md:flex whitespace-nowrap">
          <li className="cursor-pointer hover:underline">Shop</li>
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>

        {/* Middle Brand */}
        <div className="text-center ml-52 md:mr-60 md:ml-0">
          <div className="text-xl font-thin">
            <img
              src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/logo-01.svg"
              alt="logo"
              className="w-18 h-18"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="hidden space-x-6 md:flex">
          <div className="cursor-pointer">
            <AiOutlineSearch className="w-6 h-6" />
          </div>
          <div className="cursor-pointer">
            <AiOutlineShopping className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
