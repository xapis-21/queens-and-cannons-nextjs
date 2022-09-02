import Card from "./Card";
import  Link  from "next/link";
import { urlFor } from "../lib/sanity";
import { HiLink } from "react-icons/hi";

const Populars = ({ title, path, data }) => {
  return (
    <div
      className={`w-full py-4 lg:py-8 px-2 md:px-4 ${
        data.length === 0 && "hidden"
      }`}
    >
      <div className="sm:col-span-2 xs:col-span-2 lg:col-span-4 2xl:col-span-5 flex items-center text-2xl font-[500] uppercase">
        <Link href={`${path}`}>
          <a className="group flex items-center">
            <HiLink className="text-2xl duration-500  text-green-light" />
            {title}
          </a>
        </Link>
      </div>
      <div className="flex items-center overflow-x-scroll py-2 justify-start md:grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 md:gap-4 lg:gap-8 md:overscroll-x-hidden populars">
        
        {data?.map((item) => (
          <Card
            title={item?.title}
            key={item?.slug.current}
            slug={item?.slug.current}
            route={path}
            image={
              item?.images
                ? urlFor(item?.images[0]).width(350).height(200).url()
                : urlFor(item?.image).width(350).height(200).url()
            }
            price={item.low}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Populars;
