import { AiOutlineSearch, AiOutlineShopping } from 'react-icons/ai';

const NavBar = ({ cart }) => {

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full py-6 px-[42px]">

      <ul className="hidden lg:flex items-center justify-center text-[15px] font-semibold gap-x-7 font-mont whitespace-nowrap"
      >
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Shop</li>
        <li className="cursor-pointer hover:underline">About Us</li>
        <li className="cursor-pointer hover:underline">Contact Us</li>
      </ul>

      {/* Middle Brand */}
      <div className="text-center md:mr-36">
        <div className="text-xl font-thin">
          <img
            src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/logo-01.svg"
            alt="logo"
            className="w-18 h-18 text-black filter invert"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="hidden space-x-6 md:flex md:order-3">
        <div className="cursor-pointer">
          <AiOutlineSearch className="w-8 h-8" />
        </div>
        <div className="relative">
          <AiOutlineShopping className="w-8 h-8" />
          <span className="absolute -top-2 -right-3 w-5 h-5 bg-black rounded-full text-white text-xs flex items-center justify-center text-center">
            {cart}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;