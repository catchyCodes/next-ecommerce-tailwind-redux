import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

function Search() {
  const [showInput, setShowInput]: [Boolean, Function] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  function buttonHandler() {
    const searchValue = searchRef.current?.value;
    if (searchValue == "") {
      setShowInput((pre: Boolean) => !pre);
      return;
    }
    setShowInput(false)
   document.getElementById("simple-search")?.setAttribute("value","")
    router.push(`/search?q=${searchValue}`)
  }
  return (
    <div className="flex justify-between items-center max-w-sm mx-auto">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div
        className={`flex relative w-full transition-all ${
          showInput ? "" : "w-1 opacity-0 overflow-hidden"
        }`}
      >
        <input
          ref={searchRef}
          type="text"
          id="simple-search"
          className="bg-gray-50 border focus:ring-0 border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
          placeholder="Search products..."
          required
        />
      </div>
      <button
        onClick={buttonHandler}
        className="focus:p-2.5 font-medium bg-transparent rounded-lg focus:ring-0 focus:outline-none"
      >
        <CiSearch className="w-6 h-6" />
      </button>
    </div>
  );
}

export default Search;
