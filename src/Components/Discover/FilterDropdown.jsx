import { useState } from "react";
import { Link } from "react-router-dom";
const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:inline-block text-left hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center gap-1 w-full px-4 py-2 text-sm font-medium text-[#371C87] bg-[#DCDCDC33] border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:border-[#371C87] focus:border-[#371C87] focus:ring-white rounded-[100px]"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_0_399)">
            <path
              d="M9.33333 20H14.6667V17.3333H9.33333V20ZM0 4V6.66667H24V4H0ZM4 13.3333H20V10.6667H4V13.3333Z"
              fill="#371C87"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_399">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        All Filters
      </button>

      <div
        className={`${
          isOpen ? "visible" : "hidden"
        } absolute z-50 mt-2 origin-top-right right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Art
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Celebrities
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Gaming
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
