import { Card } from "../../components";

import client, { urlFor } from "../../lib/sanity";

const Tours = ({ tours, route, image }) => {
  return (
    <div>
      <div
        className="w-full h-[250px] lg:h-[500px] bg-cover bg-center isolate relative text-white grid place-items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1516051713211-b616b2fcf955?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dWdhbmRhJTIwc2FmYXJpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`,
        }}
        id="hero"
      >
        <div className="-z-10 h-full w-full bg-black/60 absolute top-0 left-0" />
        <div className="w-full h-full flex flex-col items-center justify-end pb-8 lg:pb-14 pl-4 max-w-[1720px] mx-auto">
          <h1 className="text-2xl lg:text-5xl font-[500] lg:max-w-[800px] text-center mb-4">
            TOURS AND TRAVEL
          </h1>
          <p className="text-[12px] text-center lg:text-[14px] max-w-[400px]">
            Enjoy the best safari in Africa with our professional guides
          </p>
        </div>
      </div>
      <div className="w-full py-4 lg:py-8 px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xs:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8 ">
          {tours?.map((item) => (
            <Card
              title={item?.title}
              key={item?.slug.current}
              slug={item?.slug.current}
              route={route}
              css={"w-full max-w-[400px]"}
              image={
                item.images
                  ? urlFor(item?.images[0]).width(350).height(200).url()
                  : urlFor(item?.image).width(350).height(200).url()
              }
              price={item?.low}
              location={item?.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const toursQuery = '*[_type == "tours"] | order(_createdAt desc)';

  const tours = await client.fetch(toursQuery);

  return {
    props: {
      tours,
    },
  };
};
export default Tours;
