import Marquee from "react-fast-marquee";
import {Testimonial} from "./";
import { urlFor } from "../lib/sanity";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="bg-[url(https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1)] bg-center bg-cover bg-no-repeat relative isolate">
      <div className="bg-green-dark/90 backdrop-blur-md [@supports(backdrop-filter:blur(0px))]:bg-green-dark/60 absolute w-full h-full left-0 top-[50%] -translate-y-[50%] -z-8" />
      <Marquee
        pauseOnHover={true}
        direction={"right"}
        speed={30}
        gradientColor={[
          "rgb(24 59 41 / var(--tw-bg-opacity))",
          "rgb(0 138 39 / var(--tw-bg-opacity))",
        ]}
      >
        {testimonials &&
          testimonials.map(({ testimonial, image, name }) => (
            <Testimonial
              testimonial={testimonial}
              key={urlFor(image).url()}
              image={urlFor(image).width(200).url()}
              name={name}
            />
          ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
