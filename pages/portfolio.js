import { PortfolioImage } from "../components";
import client,{ urlFor } from "../lib/sanity";

const Portfolio = ({ data }) => {
  return (
    <div className="pt-20 w-full">
      <div className="w-full mx-auto px-2">
        <h1 className="text-2xl md:text-4xl uppercase grid place-items-center max-w-[1000px] mx-auto text-center py-4 ">
          The journey of a thousand miles begins with a single step.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 py-8">
          {data?.map(({ image, caption, seo }) => (
            <PortfolioImage
              image={urlFor(image).width(500).height(500).url()}
              caption={caption}
              seo={seo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const portfolioQuery = '*[_type == "portfolio"] | order(_createdAt desc)';

  const data = await client.fetch(portfolioQuery);

  return {
    props: {
      data,
    },
  };
};

export default Portfolio;
