import { useRef } from "react";

const Header = () => {
  const menuRef = useRef();

  return (
    <div
      id="home"
      className="relative flex items-center justify-between bg-black px-4 py-2 text-white"
    >
      <div className="flex">
        <h1 className="font-averia align-start text-7xl font-extrabold">S</h1>
        <div className="flex flex-col justify-center pb-1">
          <h2 className="font-averia text-2xl font-extrabold">ciQ</h2>
          <div className="font-matangi text-[10px]">
            <h4>Tutoring</h4>
            <h4>Services</h4>
          </div>
        </div>
      </div>

      <nav className="font-matangi me-3 hidden gap-3 font-bold text-white font-stretch-expanded sm:flex">
        <a href="#home" className="link-underline">
          Home
        </a>
        <a href="#services" className="link-underline">
          Services
        </a>
        <a href="#about" className="link-underline">
          About
        </a>
        <a href="#contact" className="link-underline">
          Contact
        </a>
      </nav>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 hover:text-black focus:outline-none sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => {
          menuRef.current.classList.toggle("hidden");
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        ref={menuRef}
        className="absolute top-20 right-0 z-20 hidden sm:hidden"
        id="navbar-default"
      >
        <ul className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-4 px-8 font-medium dark:border-gray-700 dark:bg-gray-800">
          <li>
            <a
              href="#home"
              autoFocus
              className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 focus:bg-gray-700 focus:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 focus:bg-gray-700 focus:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 focus:bg-gray-700 focus:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
