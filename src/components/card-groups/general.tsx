"use client"
import React, { useState } from "react";
import courseData from "./fakeData";

const CartsGroup: React.FC = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleCourses = () => {
    setShowAllCourses(!showAllCourses);
  };
  return (
    <section className="mx-auto my-12 max-w-screen-lg px-4">
      <div>
        <div className="mb-3 text-center text-sm font-medium text-gray-900">
          BEST SELLER COURSES
        </div>
        <h1 className="mx-auto mb-12 max-w-lg text-center text-5xl font-black">
          <span className="text-red-500">Online course</span> that will meet
          your needs
        </h1>
      </div>
      <div
        className={`grid grid-cols-12 gap-y-4 sm:gap-8 ${
          showAllCourses ? "grid-rows-auto" : "grid-rows-1"
        }`}
      >
        {courseData
          .slice(0, showAllCourses ? courseData.length : 3)
          .map((card, index) => (
            <SingleCard card={card} index={index} />
          ))}
      </div>
      <div className="col-span-12 mt-5">
        <div className="text-center">
          <button
            onClick={toggleCourses}
            className="inline-block cursor-pointer bg-red-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-all hover:rotate-1 hover:scale-95 focus:rotate-1 focus:scale-95"
          >
            {showAllCourses ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>
      </div>
    </section>
  );
};


interface SingleCardComponent {
    card: any,
    index:number
}
const SingleCard:React.FC<SingleCardComponent> = ({card,index}) => {
  return (
    <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 ">
      <a
        href="/prodcuts/1"
        className="flex flex-col items-stretch cursor-pointer bg-white shadow-md h-full transition-all hover:rotate-1 hover:scale-95 focus:rotate-1 focus:scale-95"
      >
        <div className="relative">
          <img
            className="aspect-[4/2] h-auto w-full object-cover"
            src={card.imageUrl}
            alt=""
          />
          <span className="absolute bottom-2 right-2 border border-gray-900 bg-yellow-200 px-2 text-sm font-medium">
            {card.bestseller}
          </span>
        </div>
        <div className="border flex flex-col justify-between  h-full border-gray-400">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">{card.title}</h2>
            <div className="text-sm font-medium text-gray-700">
              {card.author}
            </div>
            <div className="mt-2 text-justify text-sm text-gray-700">
              {card.description}
            </div>
          </div>
          <div className="flex justify-between border-t border-gray-400">
            <div className="p-4 text-sm font-medium text-gray-900">
              {card.date}
            </div>
            <div className="p-4 text-sm font-bold text-red-500">
              {card.price}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CartsGroup;
