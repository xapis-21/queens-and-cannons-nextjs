import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { HiX, HiMenu } from "react-icons/hi";


const Navigation = () => {
     const [open, setOpen] = useState(false);
     const navlinks = [
       ["Tours", "tours"],
       ["Airport taxi", "airport-taxi"],
       ["Portfolio", "/portfolio"],
       ["About", "/about"],
     ];

     const handleClick = () =>{
      setOpen(!open)
      setTimeout(()=>{
         setOpen(false);
      },5000)
     }

  return (
    <header className="fixed w-full top-0 left-0 z-20 px-2 md:px-8 py-2 grid place-items-center">
      <nav className="bg-green-dark/80 backdrop-blur-lg px-2 sm:px-4 py-2 max-w-[1720px] w-full rounded-lg">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/images/logo-full.svg"
                  className="mr-3 h-6 sm:h-9"
                  alt="Queens and Cannon Safaris' logo"
                  height={56}
                  width={148}
                />
              </a>
            </Link>
            <div
              className="hidden justify-between items-center w-full lg:flex md:ml-8 md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                {navlinks.map(([path, pathlink]) => (
                  <Link href={pathlink} key={pathlink}>
                    <a
                      className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                      aria-current="page"
                    >
                      {path}
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex md:order-2">
            <div className="flex items-center text-white">
              <a
                href="mailto:queensandcanonssafaris@gmail.com "
                className="hidden lg:flex items-center ml-4"
              >
                queensandcanonssafaris@gmail.com
              </a>
              <a
                href="tel:+256 703 728935"
                className="hidden lg:flex items-center ml-4"
              >
                +256 703 728935
              </a>
              <a
                href="mailto:queensandcanonssafaris@gmail.com "
                className="flex lg:hidden items-center ml-4"
              >
                <span className="border p-2 rounded-full">
                  <BsFillEnvelopeFill fontSize={10} />
                </span>
              </a>
              <a
                href="tel:+256 0200 906713"
                className="flex lg:hidden items-center ml-4"
              >
                <span className="border p-2 rounded-full">
                  <BsTelephoneFill fontSize={10} />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={handleClick}
            >
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}

              {open ? (
                <HiX className="text-white text-2xl" />
              ) : (
                <HiMenu className="text-white text-2xl" />
              )}

              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <nav className="bg-green-dark/80 backdrop-blur-lg px-2 sm:px-4 py-2 max-w-[1720px] w-full rounded-lg border-t border-white/10 mt-2">
          <ul className="flex flex-col bg-gray-50 md:hidden">
            {navlinks.map(([path, pathlink]) => (
              <Link href={pathlink} key={pathlink}>
                <a
                  className="block py-4 my-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  {path}
                </a>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navigation