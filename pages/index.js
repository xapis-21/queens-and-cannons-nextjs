import { useState } from "react";
import client from '../lib/sanity'


const Home = ({ tours, taxis, featuredTour }) => {
  console.log(tours, taxis);
  return <div>hello</div>;
};

export const getServerSideProps = async ()=>{
  const toursQuery = '*[_type == "tours"] | order(_createdAt desc)';
  const taxiQuery = '*[_type == "taxi"] | order(_createdAt desc)';
  const featuredQuery =
    '*[_type == "tours" && isfeatured == true ]| order(_createdAt desc)[0]';

    const tours = await client.fetch(toursQuery);
    const taxis = await client.fetch(taxiQuery);
    const featuredTour = await client.fetch(featuredQuery);

    return {
      props: {
        tours,
        taxis,
        featuredTour,
      },
    };
}

export default Home;
