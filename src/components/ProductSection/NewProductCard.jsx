import React from 'react'
import { useState } from 'react'
const NewProductCard = ({ newProductData }) => {
  const [products, setProducts] = useState(newProductData);

  const handleProductPrice = (size, index) => {
    setProducts((prevProducts) => {
      const xsPrice = "145 - 150";
      return prevProducts.map((product, i) =>
        i === index
          ? {
            ...product,
            price: size === "XS" ? xsPrice : 165,
          }
          : product
      )
    });

  };
  return (
    <div className="w-[100%] h-[100%] lg:px-32 py-32 bg-white">
      <div className="text-4xl md:text-6xl font-bold text-center font-mainHead italic capitalize tracking-[2px]">
        Most Popular
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {products.map((product, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <img
                className="max-w-96 h-auto md:w-[320px] md:h-[386px] mt-8 mb-4"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="w-[100%] flex flex-col gap-2 text-center">
              <p className="font-mont text-gray-300 font-semibold text-[12px]">
                {product.subtitle}
              </p>
              <h2 className="font-mainHead text-[16px] font-bold cursor-pointer">
                {product.title}
              </h2>
              <p className="font-mont text-gray-500 font-bold text-[16px]">
                ${product.price}
              </p>
              <div className="flex items-center justify-center gap-2 mb-5">
                {product.sizes.map((size, sizeIndex) => (
                  <button
                    key={sizeIndex}
                    onClick={() => handleProductPrice(size, index)}
                    className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4">
                {product.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className={`w-5 h-5 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${color === "white" ? "border border-gray-500" : ""
                      }`}
                    style={{ backgroundColor: color }}
                    tabIndex="0"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewProductCard