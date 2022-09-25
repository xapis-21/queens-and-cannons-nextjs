import { useState } from "react";
import client from "../lib/sanity";
import Head from "next/head";
import { Hero, Search, Testimonials, Populars } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const Home = ({ tours, taxis, featuredTour, testimonials }) => {
  const [searchQ, setSearchQ] = useState(null);
  const [homeTours, setHomeTours] = useState(tours);
  const [homeTaxi, setHomeTaxi] = useState(taxis);

  const handleSearch = (e) => {
    setSearchQ(e.target.value);
    if (
      searchQ !== "" ||
      searchQ !== null ||
      searchQ !== undefined ||
      searchQ !== " "
    ) {
      setHomeTours(getSearchResults(tours, searchQ));
      setHomeTaxi(getSearchResults(taxis, searchQ));
    }
  };

  function getSearchResults(array, search) {
    let results = array?.filter((item) => {
      return (
        item.excerpt.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search) ||
        item.title.toLowerCase().includes(search)
      );
    });

    return results;
  }
  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <main>
        <Carousel autoPlay={true} infiniteLoop={true} emulateTouch={true}>
          {/* <Hero featured={featuredTour} />
          <Hero featured={featuredTour} />
          <Hero featured={featuredTour} /> */}
          {tours?.map((item) => (
            <Hero featured={item} key={item?.slug.current} />
          ))}
        </Carousel>

        <Search handleSearch={handleSearch} />
        <div className="w-full isolate relative pb-40">
          <div className="w-full mx-auto flex flex-col items-center max-w-[1720px]">
            <Populars
              title={"Popular Tours"}
              path={"tours"}
              data={
                searchQ
                  ? homeTours && homeTours
                  : tours?.filter((item, i) => i < 20)
              }
            />

            <Populars
              title={"Airport Taxi"}
              path={"airport-taxi"}
              data={
                searchQ
                  ? homeTaxi && homeTaxi
                  : taxis?.filter((item, i) => i < 5)
              }
            />
          </div>
        </div>
        <Testimonials testimonials={testimonials} />
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const toursQuery = '*[_type == "tours"] | order(_createdAt desc)';
  const taxiQuery = '*[_type == "taxi"] | order(_createdAt desc)';
  const featuredQuery =
    '*[_type == "tours" && isfeatured == true ]| order(_createdAt desc)[0]';
  const testimonialQuery =
    '*[_type == "testimonials"] | order(_createdAt desc)';

  const tours = await client.fetch(toursQuery);
  const taxis = await client.fetch(taxiQuery);
  const testimonials = await client.fetch(testimonialQuery);
  const featuredTour = await client.fetch(featuredQuery);

  return {
    props: {
      tours,
      taxis,
      featuredTour,
      testimonials,
    },
  };
};

export default Home;
