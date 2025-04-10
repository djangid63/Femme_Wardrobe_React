import '../../index.css';
import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import ShoppingCart from './SideCart';
import { Link } from 'react-router-dom';

const NavBar = ({ cart, product, setCart, selectedSize }) => {
  // Cart Visible State
  const [isCartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    if (isCartVisible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isCartVisible]);

  return (
    <div className="relative flex flex-col md:flex-row justify-evenly items-center w-[100vw] py-6 ">
      <ul className="hidden lg:flex items-center justify-center text-[14px] font-semibold gap-x-7 font-mont whitespace-nowrap">
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
      <div className="text-center md:mr-36">
        <div className="text-sm font-thin">
          <img
            src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/logo-01.svg"
            alt="logo"
            className="w-[90px]  text-black filter invert"
          />
        </div>
      </div>
      {/* Right Icons */}
      <div className="hidden space-x-6 md:flex md:order-3">
        <div className="cursor-pointer">
          <AiOutlineSearch className="w-6 h-6" />
        </div>
        <div className="relative">
          <button onClick={() => setCartVisible(true)}>
            <AiOutlineShopping className="w-6 h-6" />
            <span className="absolute -top-2 -right-3 w-5 h-5 bg-black rounded-full text-white text-xs flex items-center justify-center text-center">
              {cart}
            </span>
          </button>
        </div>
      </div>
      {isCartVisible && (
        <ShoppingCart
          product={product}
          count={cart}
          isCartVisible={isCartVisible}
          setCartVisible={setCartVisible}
          setCart={setCart}
          selectedSize={selectedSize}
        />
      )}
    </div>
  );
};

export default NavBar;