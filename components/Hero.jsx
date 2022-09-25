import { urlFor } from "../lib/sanity";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link  from "next/link";
import Image from "next/image";


const Hero = ({ featured }) => {
  
  return (
    <div
      id="hero"
      className="h-screen max-h-[1000px] w-screen bg-cover bg-center bg-no-repeat isolate z-40 "
      style={
        featured &&
        featured.image && {
          backgroundImage: `url(${urlFor(featured?.image).url()})`,
        }
      }
    >
      <div className="w-full h-full absolute bg-black/60 -z-10 max-h-[1000px]" />
      <div className="w-full h-full flex justify-center items-center mx-auto max-w-[1728px]">
        <div className="text-white px-4">
          <h1 className="uppercase text-[24px] md:text-[60px] 2xl:text-[100px] md:text-center font-[500] md:font-bold leading-tight tracking-tighter max-w-[1200px]">
            {featured?.title}
          </h1>
          <p className="text-[12px] md:text-[18px] mt-4 max-w-[800px] md:font-thin text-white md:text-center mx-auto">
            {featured?.excerpt}
          </p>
          <div className="flex mt-14 py-4 justify-center items-center">
            <Link href={`/tours/${featured?.slug?.current}`}>
              <button className="group bg-green-light/90 h-14 md:h-16 w-80 rounded-lg hover:bg-green-light flex items-center justify-center transition-all duration-300">
                READ MORE
                <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 ml-2 text-xl  text-white duration-500" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
