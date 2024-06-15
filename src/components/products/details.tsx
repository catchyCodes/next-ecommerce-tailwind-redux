"use client";
import { CiStar } from "react-icons/ci";
import { FaCircle, FaMinus, FaPlus } from "react-icons/fa";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const ProductDetails = ({quantity,decrement,increment}:any) => {
  return (
          <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
            <p className="font-medium text-lg text-indigo-600 mb-4">
              Travel &nbsp; / &nbsp; Menswear
            </p>
            <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
              Yellow Summer Travel Bag
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                $220
              </h6>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                </div>
                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                  1624 review
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-base font-normal mb-8">
              the perfect companion for your next adventure! Embrace the spirit
              of sunny escapades with this vibrant and versatile bag designed to
              cater to your travel needs while adding a pop of color to your
              journey.
            </p>
            <div className="block w-full">
              <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                Bag Color
              </p>
              <div className="text">
                <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500 :border-emerald-500">
                    <FaCircle className="text-green-500" />
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400 focus-within:border-amber-400">
                    <FaCircle className="text-yellow-500" />
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500 focus-within:border-red-500">
                    <FaCircle className="text-red-500" />
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-blue-400 focus-within:border-blue-400">
                    <FaCircle className="text-blue-500" />
                  </button>
                </div>
                <div className="block w-full mb-6">
                  <p className="font-medium text-lg leading-8 text-gray-900 mb-4">
                    Bag size
                  </p>
                  <div className="grid grid-cols-2 min-[400px] lg:grid-cols-3 gap-3">
                    <button className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                      56 cm (S)
                    </button>
                    <button className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                      67 cm (M)
                    </button>
                    <button className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">
                      77 cm (L)
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center justify-center w-full">
                    <button onClick={decrement} className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                      <FaMinus className="text-gray-700 group-hover:text-black" />
                    </button>
                    <span
                      className="group py-3 px-6 border border-gray-400  shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50 text-gray-700 group-hover:text-black"
                    
                    >{quantity}
                    </span>
                    <button onClick={increment} className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                      <FaPlus className="text-gray-700 group-hover:text-black" />
                    </button>
                  </div>
                  <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                    <CiShoppingCart className="text-indigo-600 stroke-indigo-600 transition-all duration-500" />
                    Add to cart
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <button className="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                    <CiHeart className="text-indigo-600 stroke-indigo-600 transition-all duration-500" />
                  </button>
                  <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default ProductDetails;
