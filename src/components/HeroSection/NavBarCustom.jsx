import React from 'react'
import { AiOutlineSearch, AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../index.css';
import ShoppingCart from './../CartSection/SideCart.jsx';

const NavBarCustom = ({ navBarTextColor, navBarBgColor }) => {

  return (
    <div className={`flex justify-center items-center md:justify-between py-4 overflow-x-hidden bg-${navBarBgColor}`}>
      <div className='flex w-[100vw] items-center justify-evenly '>
        {/* Left Navigation */}
        <AiOutlineMenu className={`m-2 md:hidden text-${navBarTextColor}`} />
        <ul className={`text-${navBarTextColor} items-center justify-center hidden text-sm font-semibold gap-x-8 font-mont md:flex whitespace-nowrap`}>
          <Link to='/'>
            <li className="cursor-pointer hover:underline">Home</li>
          </Link>
          <Link to='/shop'>
            <li className="cursor-pointer hover:underline">Shop</li>
          </Link>
          <Link to='/about'>
            <li className="cursor-pointer hover:underline">About Us</li>
          </Link>
          <Link to='/contact'>
            <li className="cursor-pointer hover:underline">Contact Us</li>
          </Link>
        </ul>

        {/* Middle Brand */}
        <div className="text-center ml-52 md:mr-60 md:ml-0 ">
          <div className="text-xl font-thin ">
            <img
              src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/logo-01.svg"
              alt="logo"
              className="w-18 h-18"
              style={{ filter: navBarTextColor === 'black' ? 'invert(1)' : 'invert(0)' }}
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className={`hidden space-x-6 md:flex text-${navBarTextColor}`}>
          <div className="cursor-pointer">
            <AiOutlineSearch className="w-6 h-6" />
          </div>
          <div className="cursor-pointer">
            <Link to='/cartHome/id/cart/selectedSize'>
              <AiOutlineShopping className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarCustom
