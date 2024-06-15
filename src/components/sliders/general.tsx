import React, { useEffect } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/splide-core.min.css';
import Splide from '@splidejs/splide';

const Slider: React.FC = () => {
  useEffect(() => {
    const splide = new Splide('#slider', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 3000,
      updateOnMove: true,
      pagination: false,
    });

    splide.mount();

    // Clean up function to destroy the Splide instance on component unmount
    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <header>
      <div id="slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            {/* Slider #1 */}
            <li className="splide__slide">
              <div className="bg-gradient-to-br from-zinc-50 to-zinc-100">
                <div className="mx-auto max-w-screen-xl px-8">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 sm:col-span-6">
                      <div className="flex flex-col gap-y-4 py-8 sm:p-0">
                        <div className="border-l-4 border-zinc-300 pl-4 text-xs font-medium text-gray-700 sm:text-sm md:text-lg">
                          CONSULTING SERVICES
                        </div>
                        <h1 className="text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                          IT Consulting services
                        </h1>
                        <p className="sm:text-md text-sm text-gray-700">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque earum cumque temporibus minus quisquam libero ad eius fuga id laborum?
                        </p>
                        <a className="group flex cursor-pointer items-center gap-x-2">
                          <div className="inline-block rounded-full border bg-white p-2 shadow-lg shadow-zinc-300 transition-all group-hover:bg-zinc-200 sm:p-3">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="h-8 w-8 rounded-full bg-zinc-700 p-2 text-gray-50 sm:h-10 sm:w-10 sm:p-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-zinc-600 group-hover:text-gray-700 sm:text-lg">
                            Free consultation
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-span-12 hidden sm:col-span-6 sm:block">
                      <img src="https://ld-wt73.template-help.com/tf/strategytech/images/person-01-805x900.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Slider #2 */}
            <li className="splide__slide">
              <div className="bg-gradient-to-br from-red-50 to-red-100">
                <div className="mx-auto max-w-screen-xl px-8">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 sm:col-span-6">
                      <div className="flex flex-col gap-y-4 py-8 sm:p-0">
                        <div className="border-l-4 border-red-300 pl-4 text-xs font-medium text-gray-700 sm:text-sm md:text-lg">
                          CONSULTING SERVICES
                        </div>
                        <h1 className="text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                          IT Consulting services
                        </h1>
                        <p className="sm:text-md text-sm text-gray-700">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque earum cumque temporibus minus quisquam libero ad eius fuga id laborum?
                        </p>
                        <a className="group flex cursor-pointer items-center gap-x-2">
                          <div className="inline-block rounded-full border bg-white p-2 shadow-lg shadow-red-300 transition-all group-hover:bg-red-200 sm:p-3">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="h-8 w-8 rounded-full bg-red-700 p-2 text-gray-50 sm:h-10 sm:w-10 sm:p-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-red-600 group-hover:text-gray-700 sm:text-lg">
                            Free consultation
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-span-12 hidden sm:col-span-6 sm:block">
                      <img src="https://ld-wt73.template-help.com/tf/strategytech/images/person-01-805x900.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* Slider #3 */}
            <li className="splide__slide">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100">
                <div className="mx-auto max-w-screen-xl px-8">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 sm:col-span-6">
                      <div className="flex flex-col gap-y-4 py-8 sm:p-0">
                        <div className="border-l-4 border-yellow-300 pl-4 text-xs font-medium text-gray-700 sm:text-sm md:text-lg">
                          CONSULTING SERVICES
                        </div>
                        <h1 className="text-xl font-bold text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                          IT Consulting services
                        </h1>
                        <p className="sm:text-md text-sm text-gray-700">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque earum cumque temporibus minus quisquam libero ad eius fuga id laborum?
                        </p>
                        <a className="group flex cursor-pointer items-center gap-x-2">
                          <div className="inline-block rounded-full border bg-white p-2 shadow-lg shadow-yellow-300 transition-all group-hover:bg-yellow-200 sm:p-3">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="h-8 w-8 rounded-full bg-yellow-700 p-2 text-gray-50 sm:h-10 sm:w-10 sm:p-3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-yellow-600 group-hover:text-gray-700 sm:text-lg">
                            Free consultation
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-span-12 hidden sm:col-span-6 sm:block">
                      <img src="https://ld-wt73.template-help.com/tf/strategytech/images/person-01-805x900.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Slider;
