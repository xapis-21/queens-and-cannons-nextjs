import Link from "next/link";
import { useRouter } from "next/router";
import { useState} from "react";
import { HiChevronDown, HiX } from "react-icons/hi";

const Navbar = ({ stick }) => {
  return (
    <ul
      className={`justify-between text-white/80 items-center h-full text-md hidden lg:flex`}
    >
      {[
        ["Home", "/"],
        ["Tours", "/tours"],
        ["Airport taxi", "/airport-taxi"],
        ["Portfolio", "/portfolio"],
        ["About", "/about"],
      ].map(([item, path]) => (
        <Link key={path} href={path}>
          <a
            className={`px-8 mx-2 grid place-items-center first:ml-0 last:mr-0 hover:bg-green-light/50  tracking-wide transition-all duration-300 relative ${
              stick ? "h-full" : "h-[50px]"
            } ${item === "Services" && "group"}`}
          >
            {" "}
            {item}
            {item === "Services" && (
              <ul className="group-hover:flex hidden flex-col card-shadow rounded-md absolute top-[100%] w-full py-2">
                {[
                  ["Tours", "tours"],
                  ["Airport taxi", "airport-taxi"],
                  ["Homes for rent", "homes-for-rent"],
                  ["Propery deals", "property-deals"],
                ].map(([serv, link]) => (
                  <Link href={link} key={link}>
                    <a className="px-2 h-[40px] hover:bg-green-light bg-green-dark/90 my-[0.2px] text-[12px] flex items-center">
                      {serv}
                    </a>
                  </Link>
                ))}
              </ul>
            )}
          </a>
        </Link>
      ))}
    </ul>
  );
};

const Menu = ({ func }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [showsub, setShowsub] = useState(false);

  return (
    <ul
      className={` text-black/80 justify-center items-center text-md flex flex-col bg-white h-screen w-screen py-8 absolute top-0 left-0`}
    >
      <button
        type="button"
        className="h-10 border ml-auto mr-8 rounded-md w-10 grid place-items-center text-3xl hover:text-2xl lg:hidden hover:bg-green-dark/80 transition-all duration-300 absolute top-4 right-0"
        onClick={func}
      >
        <HiX />
      </button>
      {[
        ["Home", "/"],
        ["Services", "/services"],
        ["Portfolio", "/portfolio"],
        ["About", "/about"],
      ].map(([item, path]) => (
        <Link key={path} href={path}>
          <a
            className={`px-8 h-14 w-full mb-4 grid place-items-center first:ml-0 last:mr-0 hover:bg-green-light/50 [@supports(backdrop-filter:blur(0px))]:hover:bg-green-light/50 tracking-wide transition-colors duration-300 relative ${
              pathname === path && "bg-green-light/50"
            } ${item === "Services" && "group"}`}
          >
            {item}
            {item === "Services" && (
              <div
                onMouseOver={() => {
                  setShowsub(true);
                }}
              >
                <HiChevronDown />
              </div>
            )}
            {item === "Services" && (
              <ul
                className={`${
                  showsub ? "flex" : "hidden"
                } hidden group-hover:flex flex-col items-center card-shadow rounded-md w-[300px] py-2`}
              >
                {[
                  ["Tours", "tours"],
                  ["Airport taxi", "airport-taxi"],
                  ["Homes for rent", "homes-for-rent"],
                  ["Propery deals", "property-deals"],
                ].map(([serv, link]) => (
                  <Link href={link} key={link}>
                    <a className="px-2 w-full h-[40px] text-center hover:bg-green-light bg-white/90 my-[0.2px] text-[12px] flex items-center justify-center z-50">
               
                      {serv}
                    </a>
                  </Link>
                ))}
              </ul>
            )}
          </a>
        </Link>
      ))}
    </ul>
  );
};

export { Navbar, Menu };
