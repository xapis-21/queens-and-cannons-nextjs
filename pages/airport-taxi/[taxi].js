import { useState, useEffect } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useParams } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";
import { client, urlFor } from "../client";
import {
  MdAccessTime,
  MdOutlineLocationOn,
  MdOutlineErrorOutline,
} from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Populars } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Checkout from "./Checkout";

const Details = ({ services, route, mid, low, high, title, type }) => {
  const { slug } = useParams();
  const query = `*[_type == "${type}" && slug.current == "${slug}"][0]`;

  const [selectedService, setSelectedService] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(selectedService?.low);
  const [level, setLevel] = useState("SELECT PACKAGE");
  const [showCheckout, setShowCheckout] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .fetch(query)
      .then((posts_data) => {
        setSelectedService(posts_data);
      })
      .catch(console.error);
  }, [slug, query]);

  let same =
    services &&
    services
      .filter(({ _id }) => {
        return _id !== selectedService?._id;
      })
      .filter((item, i) => i < 5);

  const selectPrice = (e) => {
    setSelectedPrice(e.target.value);
    if (e.target.id === "low") {
      setLevel("BOOK " + low.toUpperCase());
    } else if (e.target.id === "mid") {
      setLevel("BOOK " + mid.toUpperCase());
    } else if (e.target.id === "high") {
      setLevel("BOOK " + high.toUpperCase());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (level === "SELECT PACKAGE" || level === null) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } else {
      setShowCheckout(true);
    }
  };

  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <div className="w-full mx-auto pt-18">
      {showCheckout ? (
        <div className="lg:py-32">
          <h1 className="font-[600] px-2 text-3xl mb-8 max-w-[1000px] mx-auto flex flex-col items-start">
            <button
              className="text-green-dark font-[400] px-2 text-sm mb-2 flex items-center"
              onClick={() => {
                setShowCheckout(false);
              }}
            >
              <HiArrowSmLeft /> Go Back
            </button>
            CHECKOUT
          </h1>
          <Checkout
            checkout={showCheckout}
            price={selectedPrice}
            type={level}
            title={selectedService?.title}
            country={selectedService?.location}
          />
        </div>
      ) : (
        <>
          <div className="w-full mx-auto relative overflow-hidden group transition-all duration-600">
            {selectedService?.images ? (
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                emulateTouch={true}
                className="w-full h-[400px] 2xl:h-[600px]"
              >
                {selectedService?.images.map((image) => (
                  <img
                    src={image && urlFor(image).url()}
                    alt=""
                    className="w-full h-[400px] 2xl:h-[600px] object-cover mx-auto group-hover:scale-110 transition-all duration-500"
                  />
                ))}
              </Carousel>
            ) : (
              <img
                src={selectedService && urlFor(selectedService?.image).url()}
                alt=""
                className="w-full h-[400px] 2xl:h-[600px] object-cover mx-auto group-hover:scale-110 transition-all duration-500"
              />
            )}
            <div className="absolute w-full bg-black/40 group-hover:opacity-0 transition-all duration-500 h-full top-0 left-0 grid place-item-center text-white">
              <div className="flex flex-col justify-center">
                <h1 className="text-[30px] mx-auto text-center text-white font-medium max-w-[1000px] uppercase leading-10 grid place-items-center mb-2">
                  {selectedService?.title}
                </h1>
              </div>
            </div>
          </div>
          <div className=" mx-auto max-w-[1720px] flex justify-center mt-2 lg:mt-8 mb-14 relative">
            <div className="border-green-light w-full flex flex-col items-center lg:items-start lg:flex-row justify-center">
              <div className="w-full max-w-[300px] bg-green-light h-fit flex flex-col items-start px-4 py-4 rounded-[10px] mb-4 relative">
                {error && (
                  <div className="absolute w-full grid place-items-center -bottom-10 z-10 left-0 animate-bounce">
                    <p className="w-fit px-2 py-2 text-[12px] whitespace-nowrap text-[#ff0000] flex items-center rounded-md ">
                      <MdOutlineErrorOutline />
                      Please select atleast one package
                    </p>
                  </div>
                )}
                <div className="flex flex-col items-start">
                  <p className="font-[500] text-green-dark flex items-center">
                    <MdOutlineLocationOn />
                    <span className="ml-2">Location</span>
                  </p>
                  <h1 className="text-2xl font-bold text-white">
                    {selectedService?.location}
                  </h1>
                </div>
                <div className="flex flex-col items-start mt-4 mb-4">
                  <p className="font-[500] text-green-dark flex items-center">
                    <MdAccessTime />
                    <span className="ml-2">Duration</span>
                  </p>
                  <h1 className="text-2xl font-bold text-white">
                    {selectedService?.duration}
                  </h1>
                </div>
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="flex flex-col items-start text-white w-full"
                >
                  <p className="font-[500] text-green-dark flex items-center">
                    <AiOutlineDollarCircle />
                    <span className="ml-2">Price</span>
                  </p>
                  <div className="flex items-center mt-2 w-full">
                    <input
                      type="radio"
                      name="price"
                      onClick={selectPrice}
                      value={selectedService?.low}
                      id="low"
                      className="bg-black/0 border-1 border-white rounded-full h-4 w-4 checked:bg-green-dark focus:bg-green-dark hover:bg-green-dark outline-none"
                    />
                    <label
                      htmlFor="low"
                      className="ml-2 flex justify-between w-full items-center"
                    >
                      <span className="text-[12px] max-w-[60%]">
                        {low}
                        {console.log(selectedService?.low)}
                      </span>
                      <span> USD {selectedService?.low}</span>
                    </label>
                  </div>
                  <div className="flex items-center mt-2  w-full">
                    <input
                      type="radio"
                      name="price"
                      onClick={selectPrice}
                      value={selectedService?.mid}
                      id="mid"
                      className="bg-black/0 border-1 border-white rounded-full h-4 w-4 checked:bg-green-dark focus:bg-green-dark hover:bg-green-dark outline-none"
                    />
                    <label
                      htmlFor="mid"
                      className="ml-2 flex justify-between w-full items-center"
                    >
                      <span className="text-[12px] max-w-[60%]">
                        {mid} {console.log(selectedService?.mid)}
                      </span>
                      <span>USD {selectedService?.mid}</span>
                    </label>
                  </div>
                  <div className="flex items-center  mt-2 w-full">
                    <input
                      type="radio"
                      name="price"
                      onClick={selectPrice}
                      value={selectedService?.high}
                      id="high"
                      className="bg-black/0 border-1 border-white rounded-full h-4 w-4 checked:bg-green-dark focus:bg-green-dark hover:bg-green-dark outline-none"
                    />
                    <label
                      htmlFor="high"
                      className="ml-2 flex justify-between w-full items-center"
                    >
                      <span className="text-[12px] max-w-[60%]">{high}</span>
                      <span> USD {selectedService?.high}</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-white mt-4 text-[12px] font-[500] px-2 hover:text-green-light active:scale-105 rounded-[10px] text-green-dark w-full py-2"
                  >
                    {level}
                  </button>
                </form>
              </div>
              <div className="w-full max-w-[1000px] flex flex-col items-start  ml-4">
                <p className="w-full text-[16px] mx-auto text-left ">
                  {selectedService?.excerpt}
                </p>
                <div className="w-full ">
                  <h1 className="uppercase text-[25px] font-[500] py-2">
                    Details
                  </h1>
                  <article className="max-h-[800px] overflow-y-scroll rounded-lg p-4 pt-2 prose mx-auto prose-xl poppins text-gray-900 w-full prose-p:font-light prose-h3:w-fit prose-h3:px-2 prose-h4:text-purple-800 max-w-[1000px] ">
                    <BlockContent
                      blocks={selectedService?.description}
                      projectId="xclbzx3h"
                      dataset="production"
                      serializers={serializers}
                    />
                  </article>
                  <div className="w-full max-w-[300px] bg-green-light h-fit flex md:hidden flex-col items-start px-4 py-4 rounded-[10px] mb-4 relative">
                    {error && (
                      <div className="absolute w-full grid place-items-center -bottom-10 z-10 left-0 animate-bounce">
                        <p className="w-fit px-2 py-2 text-[12px] whitespace-nowrap text-[#ff0000] flex items-center rounded-md ">
                          <MdOutlineErrorOutline />
                          Please select atleast one package
                        </p>
                      </div>
                    )}
                    <div className="flex flex-col items-start">
                      <p className="font-[500] text-green-dark flex items-center">
                        <MdOutlineLocationOn />
                        <span className="ml-2">Location</span>
                      </p>
                      <h1 className="text-2xl font-bold text-white">
                        {selectedService?.location}
                      </h1>
                    </div>
                    <div className="flex flex-col items-start mt-4 mb-4">
                      <p className="font-[500] text-green-dark flex items-center">
                        <MdAccessTime />
                        <span className="ml-2">Duration</span>
                      </p>
                      <h1 className="text-2xl font-bold text-white">
                        {selectedService?.duration}
                      </h1>
                    </div>
                    <form
                      action=""
                      onSubmit={handleSubmit}
                      className="flex flex-col items-start text-white w-full"
                    >
                      <p className="font-[500] text-green-dark flex items-center">
                        <AiOutlineDollarCircle />
                        <span className="ml-2">Price</span>
                      </p>
                      <div className="flex items-center mt-2 w-full">
                        <input
                          type="radio"
                          name="price"
                          onClick={selectPrice}
                          value={selectedService?.low}
                          id="low"
                          className="bg-black/0 border-1 border-white rounded-full h-4 w-4 checked:bg-green-dark focus:bg-green-dark hover:bg-green-dark outline-none"
                        />
                        <label
                          htmlFor="low"
                          className="ml-2 flex justify-between w-full items-center"
                        >
                          <span className="text-[12px] max-w-[60%]">
                            {low}
                            {console.log(selectedService?.low)}
                          </span>
                          <span> USD {selectedService?.low}</span>
                        </label>
                      </div>
                      <div className="flex items-center mt-2  w-full">
                        <input
                          type="radio"
                          name="price"
                          onClick={selectPrice}
                          value={selectedService?.mid}
                          id="mid"
                          className="bg-black/0 border-1 border-white rounded-full h-4 w-4 checked:bg-green-dark focus:bg-green-dark hover:bg-green-dark outline-none"
                        />
                        <label
                          htmlFor="mid"
                          className="ml-2 flex justify-between w-full items-center"
                        >
                          <span className="text-[12px] max-w-[60%]">
                            {mid} {console.log(selectedService?.mid)}
                          </span>
                          <span>USD {selectedService?.mid}</span>
                        </label>
                      </div>
                      <div className="flex items-center  mt-2 w-full">
                        <input
                          type="radio"
                          name="price"
                          onClick={selectPrice}
                          value={selectedService?.high}
                          id="high"
                          className="bg-black/0 border-1 border-white rounded-full h-4 w-4 checked:bg-green-dark focus:bg-green-dark hover:bg-green-dark outline-none"
                        />
                        <label
                          htmlFor="high"
                          className="ml-2 flex justify-between w-full items-center"
                        >
                          <span className="text-[12px] max-w-[60%]">
                            {high}
                          </span>
                          <span> USD {selectedService?.high}</span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="bg-white mt-4 text-[12px] font-[500] px-2 hover:text-green-light active:scale-105 rounded-[10px] text-green-dark w-full py-2"
                      >
                        {level}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1720px] mx-auto">
            <Populars title={title} path={route} data={same} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
