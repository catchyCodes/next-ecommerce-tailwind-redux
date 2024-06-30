"use client";
import React from "react";
import { ReactNode, useState } from "react";
import Ssr from "./ssr";
import { useSelector } from "react-redux";
import { ProductsState } from "@/redux/products/reducer";

interface ClientComponentProps {
  children: ReactNode;
}
const ClientComponent: React.FC<ClientComponentProps> = ({ children }: any) => {
  const toggleCourses = () => {
    setShowAll(!showAll);
  };
  const [showAll, setShowAll] = useState(false);

  const { items }: ProductsState = useSelector((state: any) => state.products);

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
          showAll ? "grid-rows-auto" : "grid-rows-1"
        }`}
      >
        {items.length === 0 ? (
          children
        ) : (
          <>
            {items?.slice(0, showAll ? items.length : 3).map((item, index) => (
              <Singleitem key={index} item={item} index={index} />
            ))}
          </>
        )}
      </div>
      <div className="col-span-12 mt-5">
        <div className="text-center">
          <button
            onClick={toggleCourses}
            className="inline-block cursor-pointer bg-red-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-all hover:rotate-1 hover:scale-95 focus:rotate-1 focus:scale-95"
          >
            {showAll ? "VIEW LESS" : "VIEW MORE"}
          </button>
        </div>
      </div>
    </section>
  );
};



interface SingleitemComponent {
  item: any;
  index: number;
}
export const Singleitem: React.FC<SingleitemComponent> = ({ item, index }) => {
  return (
    <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4">
      <a
        href="/prodcuts/1"
        className="flex flex-col items-stretch cursor-pointer bg-white shadow-md h-full transition-all hover:rotate-1 hover:scale-95 focus:rotate-1 focus:scale-95"
      >
        <div className="relative">
          <img
            className="aspect-[4/2] rounded-t-md h-auto w-full object-cover"
            src={item.image}
            alt=""
          />
          <span className="absolute bottom-2 right-2 border border-gray-900 bg-yellow-200 px-2 text-sm font-medium">
            {}
          </span>
        </div>
        <div className="shadow-sm flex flex-col justify-between h-full rounded-b-md">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
            {/* <div className="text-sm flex gap-x-1 font-medium text-gray-700">
                {item.categories?.map((cat:string,j:number)=><span key={j}>{cat}</span>)}
              </div> */}
            <div className="mt-2 text-justify text-sm text-gray-700">
              {item.description}
            </div>
          </div>
          <div className="flex justify-between border-t border-gray-200">
            <div className="p-4 text-sm font-medium text-gray-900">
              {item.stock > 0 ? "available" : "out of stock"}
            </div>
            <div className="p-4 text-sm font-bold text-red-500">
              ${item.price}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const CartsGroup: React.FC = () => {
  return (
    <>
      {/* <ClientComponent>
        <Ssr />
      </ClientComponent> */}
    </>
  );
};
export default CartsGroup;