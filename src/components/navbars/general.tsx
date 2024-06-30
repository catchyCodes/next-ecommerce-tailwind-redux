"use client";
import { Links } from "@/libs/datas";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Search from "./search";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<SVGSVGElement>(null);
  const closeRef = useRef<SVGSVGElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (dropdownRef.current && menuRef.current && closeRef.current) {
      dropdownRef.current.classList.toggle("h-[180px]", dropdownOpen);
      menuRef.current.classList.toggle("hidden", dropdownOpen);
      closeRef.current.classList.toggle("hidden", !dropdownOpen);
    }
  };

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    setIsScrollingDown(true);
  } else {
    setIsScrollingDown(false);
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const links1 = [
  {name:"about", link:Links.AboutUs},
  {name:"contact", link:Links.Contact},
  {name:"blogs", link:Links.Blogs},
]

const links2 = [
  {name:"Home", link:Links.Home},
  {name:"products", link:Links.Products},
  {name:"orders", link:Links.UserOrders},
]

  return (
    <nav  id="header"
    className={`fixed top-0 left-0 right-0 border-b bg-gray-100 p-4 transition-transform duration-300 ${
      isScrollingDown ? '-translate-y-full' : ''
    }`} aria-label="Site Navbar">
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <div className="flex items-center justify-between gap-x-4">
            <ul className="flex items-center gap-x-3">
              {links1.map((link,i)=>
              <li key={i} className="hidden sm:block">
                <Link href={link.link} className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">
                  {link.name}
                </Link>
              </li>
              )}
             
            </ul>
            <ul className="flex items-center gap-x-3">
              <li>
                <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
                 <Search/>
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="mx-auto max-w-screen-xl px-4 py-4">
          <div className="flex items-center justify-between gap-x-8">
            <a className="flex cursor-pointer items-center gap-x-1">
              <img
                width="28"
                height="28"
                className="object-cover"
                src="https://ankitcodes.com/uploads/fAPFuFMfl3vI8NS7wgTPopqD9FBtgt-metaZmF2aWNvbi5wbmc=-.png"
                alt="logo"
              />
              <span className="text-lg font-black text-gray-900">CODES</span>
            </a>
            <ul className="flex items-center gap-x-6">
            {links2.map((link,i)=>
              <li key={i} className="hidden sm:block">
                <Link href={link.link} className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">
                  {link.name}
                </Link>
              </li>
              )}
              <li className="flex items-center gap-x-4 md:hidden">
                <button
                  onClick={toggleDropdown}
                  className="block cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70"
                >
                  <svg
                    ref={menuRef}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    ref={closeRef}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="hidden h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={dropdownRef}
          className={`duration-900 h-0 overflow-y-hidden transition-all ${
            dropdownOpen ? "h-[180px]" : ""
          } md:hidden`}
        >
          <hr />
          <ul className="mx-auto max-w-screen-xl px-4 py-4">
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">
                HOME
              </a>
            </li>
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">
                PRODUCTS
              </a>
            </li>
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">
                SERVICE
              </a>
            </li>
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
    
    </nav>
  );
};

export default Navbar;
