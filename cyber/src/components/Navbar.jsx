import { useState } from "react";
import logo from "../assets/img/logo-header.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemsMenu = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact Us", link: "#" },
    { name: "Blog", link: "#" },
  ];

  return (
    <>
      <header className="w-full bg-white h-[8dvh] px-4 gap-8 flex justify-between sm:justify-center items-center border-b-2 border-gray-300 sm:shadow-lg">
        {/* logo */}
        <div className="w-24 h-7">
          <a href="/">
            <img src={logo} alt="Logo header" />
          </a>
        </div>

        {/*  pesquisa  */}
        <div className="hidden sm:flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-[433px] p-4 bg-[#f5f5f5] rounded-xs focus:outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        {/*  menu  */}
        <nav className="gap-6 text-sm font-medium hidden sm:flex">
          {itemsMenu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-zinc-400 hover:text-zinc-900 font-bold"
            >
              {item.name}
            </a>
          ))}
          {/* <a href="#" className="text-zinc-400 hover:text-zinc-900">
            Home
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-900">
            About
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-900">
            Contact Us
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-900">
            Blog
          </a> */}
        </nav>

        {/* icons */}
        <div className="hidden sm:flex justify-center items-center gap-6">
          <a href="#" className="hover:opacity-70">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="#" className="hover:opacity-70">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* mobile nav */}

        <div className="flex sm:hidden justify-center items-center gap-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:opacity-70"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
                fill="#080341"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
                fill="#080341"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
                fill="#080341"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <nav className="flex flex-col justify-center items-center position absolute top-18 left-0 w-full bg-white py-4 gap-4 shadow-md z-10 transition-all duration-300 ease-in ">
              {itemsMenu.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-zinc-400 hover:text-zinc-900 font-bold"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
      {/*<Subnav /> */}
    </>
  );
};

export default Navbar;
