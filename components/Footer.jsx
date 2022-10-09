
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsWhatsapp,
} from "react-icons/bs";
import {HiChevronUp} from 'react-icons/hi'
import { BsFacebook, BsInstagram,BsTwitter} from "react-icons/bs";
import logo from "../public/images/logo-full.svg";



const Footer = () => {
     const router = useRouter();
     const pathname = router.pathname;
      
  return (
    <div className="text-[12px] bg-green-dark/90 grid place-items-center w-full text-white/60">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col items-center md:px-4">
        <div className="w-full flex items-center justify-between h-14 lg:border-b border-white/20 px-2">
          <h1 className="uppercase">Queens & canons safaris</h1>
          <a href="#hero" className="flex items-center px-4">
            TOP <HiChevronUp fontSize={20} />
          </a>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:flex-lg items-start lg:items-center px-2 mt-4">
          <div className="hidden lg:block">
            <Image
              src={"/images/logo-full.svg"}
              alt="Queens and canons safaris logo"
              width={120}
              height={40}
              objectFit={"contain"}
              className="h-28"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-center font-[500] py-2 text-white">ABOUT</h1>
            <p className="text-[12px] font-light pr-4 max-w-[350px]">
              Queens And Canons Safaris Ltd is a private Africa travel company
              operating tours in East & Southern Africa countries with . Head
              office based in Uganda And other offices with professional
              representatives and guides in all our 9 countries of operation in
              East and Southern Africa. Specializing in tailor made safaris and
              holidays in East and Southern Africa countries. Our focus is on
              you. We do not take you on one of our safaris, instead you will be
              the one creating perfect trip with the help of our safari
              specialist. Your safari satisfaction is our mission.
            </p>
            <div className="flex mt-4">
              <a
                href="https://www.facebook.com/queensandcanonssafaristours/"
                className="text-2xl hover:text-green-light duration-300"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/Q_canonssafaris/"
                className="text-2xl mx-4 hover:text-green-light duration-300"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <BsInstagram />
              </a>
              <a
                href="https://twitter.com/Q_CanonsSafaris"
                className="text-2xl hover:text-green-light duration-300"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <BsTwitter />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start mt-4">
            <h1 className="text-center font-[500] py-2 text-white">
              QUICK LINKS
            </h1>
            <ul
              className={`justify-between text-white/80 items-start w-full flex flex-col`}
            >
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
              ].map(([item, path]) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => {
                    window.reload();
                  }}
                >
                  <a
                    className={`h-8 grid place-items-center first:ml-0 mb-1 hover:text-green-light/50 [@supports(backdrop-filter:blur(0px))]:hover:bg-green-light/50 tracking-wide transition-colors duration-300 ${
                      pathname === path && "text-green-light"
                    }`}
                  >
                    {item}
                  </a>
                </Link>
              ))}
              <a
                href={
                  "https://github.com/xapis-21/queens-and-cannons-nextjs/raw/main/public/images/queensandsafaris-terms-and-conditions.pdf"
                }
                target="_blank"
                rel={"noreferrer"}
                className={`h-8 grid place-items-center first:ml-0 mb-1 hover:text-green-light/50 [@supports(backdrop-filter:blur(0px))]:hover:bg-green-light/50 tracking-wide transition-colors duration-300 `}
              >
                Terms and conditions
              </a>
            </ul>
          </div>
          <div className="flex flex-col items-start  mt-4">
            <h1 className="text-center font-[500] py-2 text-white">CONTACT</h1>
            <p className="flex flex-col items-start ">
              <a
                href={`tel:+256 393 242323`}
                className="flex justify-start w-full items-center mb-4"
              >
                <span className=" text-lg ml-2 rounded-full">
                  <BsTelephoneFill />
                </span>
                <span className="ml-2 ">+256 393 242323</span>
              </a>
              <a
                href={`tel:+256 200 906713`}
                className="flex justify-start items-center mb-4"
              >
                <span className=" text-lg ml-2 rounded-full">
                  <BsWhatsapp />
                </span>
                <span className="ml-2">+256 703 728935</span>
              </a>
              <a
                href={`mailto:queensandcanonssafaris@gmail.com`}
                className="flex justify-start items-center mb-4"
              >
                <span className=" text-lg ml-2 rounded-full">
                  <BsFillEnvelopeFill />
                </span>

                <span className="ml-2">queensandcanonssafaris@gmail.com</span>
              </a>
              <a
                href={`mailto:queens.canons@gmail.com`}
                className="flex justify-start items-center mb-4"
              >
                <span className=" text-lg ml-2 rounded-full">
                  <BsFillEnvelopeFill />
                </span>

                <span className="ml-2">queens.canons@gmail.com</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-between text-[9px] mx-2  border-t border-t-white/10 py-2 mt-2">
        <span>&copy;2022 Queens & canons safaris</span>
        <a href="mailto:xapisofficial@gmail.com">
          <span>
            Designed and developed by dev xapis | zziwa shafic - Tateno Pictures
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer