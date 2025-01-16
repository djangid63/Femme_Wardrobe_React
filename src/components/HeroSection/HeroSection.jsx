import React from "react";
import logo from "../../images/BgImages/HeroBgImg.jpeg";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineMenu,
} from "react-icons/ai";

function App() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover "
        style={{
          backgroundImage: `url(${logo})`,
          backgroundAttachment: 'fixed',
        }}
        role="img"
        aria-label="Hero Background"
      ></div>

      {/*Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center text-white justify-evenly">
        {/* Navbar */}
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

        {/* Welcome Message */}
        <div className="flex items-center justify-center flex-grow ">
          <div className="flex justify-center items-center flex-col gap-2 w-[50%] h-[50%]">
            <p className="clear-both text-white font-mont font-semibold text-[12px] tracking-[2px] leading-[13.75px] break-words uppercase">
              Casual & Everyday
            </p>
            <h1 className="md:text-[76px] text-4xl font-bold italic break-words text-center font-mainHead leading-none mb-6">
              Effortlessly Blend Comfort & Style!
            </h1>
            <p className="font-mont text-[8px] md:text-[16px] font-semibold text-center mb-4">
              Effortlessly blend comfort and style with our Casual & Everyday
              collection, featuring cozy sweaters, versatile denim, laid-back
              tees, and relaxed-fit joggers for your everyday adventures
            </p>
            <div>
              <button className="text-[14px] uppercase text-white border border-white font-mont font-semibold  py-4 px-11 hover:bg-white hover:text-black">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
