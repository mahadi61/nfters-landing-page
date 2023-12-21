import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../utilities/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = (
    <>
      <li>
        <Link to="#" className="hover:text-[#3D00B7] px-4 font-semibold">
          Marketplace
        </Link>
      </li>
      <li>
        <Link to="#" className="hover:text-[#3D00B7] px-4 font-semibold">
          Resources
        </Link>
      </li>
      <li>
        <Link to="#" className="hover:text-[#3D00B7] px-4 font-semibold">
          About
        </Link>
      </li>
    </>
  );

  return (
    <nav className="border-b-2 border-b-[#EFEFEF] relative">
      <div className="md:w-11/12 lg:max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none pe-2"
          >
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-2xl font-bold text-[#3D00B7] uppercase">NFters</p>

        <ul
          className={` ${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 bg-white border border-[#EFEFEF] mt-1 py-2 px-4 rounded-md shadow-md`}
        >
          {menuItem}
        </ul>

        <ul className={`md:flex space-x-4 hidden `}>{menuItem}</ul>

        <div className="flex items-center space-x-2 ms-1 md:ms-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="md:py-3 py-2 ps-2 md:ps-5 md:pe-16 border border-[#EFEFEF] focus:outline-none rounded-[100px] hidden md:block"
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                  fill="#757575"
                />
                <path
                  d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                  fill="#757575"
                />
              </svg>
            </span>
          </div>

          <Button title={"Upload"}></Button>

          <button className="border-2 border-[#3D00B7] hover:bg-[#3D00B7] px-5 py-4 text-xs font-medium hover:text-white text-[#3D00B7] rounded-[50px] hidden md:inline-block">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
