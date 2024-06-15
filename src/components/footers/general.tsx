import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub,  FaDribbble } from "react-icons/fa6" ;

const Footer: React.FC = () => {
  return (
    <footer aria-label="Site footer" className="bg-gradient-to-br from-purple-50 to-purple-100 px-8 py-12">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-12 gap-y-8 sm:gap-8">
          {/* COMPANY */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <ul className="flex flex-col gap-y-2">
              <li className="text-lg font-medium text-gray-900">COMPANY</li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">About</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">How it works</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Careers</a>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <ul className="flex flex-col gap-y-2">
              <li className="text-lg font-medium text-gray-900">HELP</li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Contact us</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">FAQ</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Legal & Privacy</a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <ul className="flex flex-col gap-y-2">
              <li className="text-lg font-medium text-gray-900">SERVICES</li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Ecommerce Development</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Content Writing</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Digital Marketing</a>
              </li>
              <li>
                <a href="/" className="cursor-pointer text-sm text-gray-700 hover:text-gray-700/60">Website Design</a>
              </li>
            </ul>
          </div>

          {/* TECH INFO */}
          <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3">
            <div>
              <a href="/" className="flex cursor-pointer items-center gap-x-1">
                <img className="h-8 w-8" src="https://ankitcodes.com/uploads/fAPFuFMfl3vI8NS7wgTPopqD9FBtgt-metaZmF2aWNvbi5wbmc=-.png" alt="" />
                <span className="text-sm font-black">TECH.</span>
              </a>
              <div className="mt-3 text-sm">654 Shadow Brook St. Palatine, IL 60067</div>
              <a href="/" className="my-3 block cursor-pointer text-sm font-medium">+1 123 12 12 123</a>
              <a href="/" className="cursor-pointer font-medium text-purple-500 underline hover:text-purple-500/60 focus:text-purple-500/60">youremail@gmail.com</a>
              <ul className="mt-6 flex gap-6">
                <li>
                  <a href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/60 focus:text-gray-700/60">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/60 focus:text-gray-700/60">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/60 focus:text-gray-700/60">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/60 focus:text-gray-700/60">
                    <span className="sr-only">GitHub</span>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/60 focus:text-gray-700/60">
                    <span className="sr-only">Dribbble</span>
                    <FaDribbble />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-sm font-medium text-gray-800">&copy; 2022 All right reserved | Made by ankitcodes</div>
          <div className="mt-4 text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet deserunt nisi, eligendi blanditiis sequi officiis laudantium voluptatum reprehenderit esse ipsa animi minus. Illum vero, voluptatem cumque quas obcaecati quis.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
