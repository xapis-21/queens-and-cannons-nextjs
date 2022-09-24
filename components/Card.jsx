import Link  from "next/link";
import TextTruncate from "react-text-truncate";

const Card = ({ title, location, price, image, css, slug, route }) => {

  return (
    <div
      className={`card-shadow group rounded-[20px] bg-white pt-2 px-2 flex flex-col items-center shrink-0 mr-4 max-w-[300px] md:max-w-none md:grid-cols-3 2xl:grid-cols-5 ${css}`}
    >
      <div className="w-full h-[200px] rounded-[20px] overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 brightness-75 group-hover:brightness-100 duration-500"
        />
      </div>
      <div className="w-full px-2">
        <h2 className="text-[15px] translate-y-2 py-2 h-20">
          <TextTruncate text={title} line={3} element="span" truncateText="…" />
        </h2>
      </div>
      <span className="w-full text-[12px] px-2 text-green-dark/70">
        {location}
      </span>
      <div className="rounded-b-[40px] rounded-t-md flex w-full justify-between items-center px-2 pb-4">
        <div className="w-full mr-1 flex justify-start items-center text-xl font-[500]">
          <span className="text-green-light">US$</span>
          <span>{price}</span>
        </div>
        <Link href={`/${route}/${slug}`} replace>
          <a className="border text-sm text-green-light group-hover:bg-green-light group-hover:text-white h-12 w-40 ml-1 grid place-items-center rounded-full transition-all duration-500">
            
          Read more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
