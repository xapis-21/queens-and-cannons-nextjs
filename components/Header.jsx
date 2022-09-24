import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { HiOutlineMenu} from "react-icons/hi";
import Link  from "next/link";
import { Menu, Navbar } from "./Navbar";
import Image from "next/image";

const Header = () => {
  const [stickNav, setStickNav] = useState(false);
  const [toggleNav,setToggleNav] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info (explained in more detail below)
    setStickNav(prevScrollPos > 100);
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  },[]); 
   const router = useRouter();
   const pathname = router.pathname;

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, stickNav, handleScroll]);

  return (
    <div
      className={`fixed w-full h-16  z-50 top-0 left-0 backdrop:blur-lg ${
        stickNav && "bg-green-dark md:bg-green-dark/95"
      }  ${
        pathname !== "/" && "bg-green-dark md:bg-green-dark/95"
      } transition-colors duration-500`}
    >
      <div
        className={` w-full h-full flex text-white items-center justify-between text-sm px-2 lg:px-4 mx-auto`}
      >
        <Link href={"/"}>
          <a className="flex items-center w-fit">
            <Image
              src={"/images/logo-full.svg"}
              width={150}
              height={100}
              alt="Queens and canons safaris logo"
              className="md:h-14 h-10"
            />
          </a>
        </Link>

        <div className="flex items-center h-full">
          <Navbar stick={stickNav} />
          <a
            href="mailto:queensandcanonssafaris@gmail.com "
            className="flex items-center ml-4"
          >
            <span className="border p-2 rounded-full">
              <BsFillEnvelopeFill fontSize={10} />
            </span>
          </a>
          <a href="tel:+256 0200 906713" className="flex items-center ml-4">
            <span className="border p-2 rounded-full">
              <BsTelephoneFill fontSize={10} />
            </span>
          </a>
          <button
            type="button"
            className="h-[70%] rounded-md w-14 grid place-items-center text-4xl hover:text-2xl ml-4 lg:hidden hover:bg-green-dark/80 transition-all duration-300"
            onClick={() => {
              setToggleNav(true);
            }}
          >
            <HiOutlineMenu />
          </button>
          {toggleNav && (
            <Menu
              toggle={toggleNav}
              func={() => {
                setToggleNav(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
