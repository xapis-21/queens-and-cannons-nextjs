import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full h-[400px] 2xl:h-[600px] relative">
        <img
          src="https://images.pexels.com/photos/107506/pexels-photo-107506.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500"
          alt=""
          className="w-full h-full object-cover object-center brightness-75"
        />
      </div>

      <div className="max-w-[1000px] mx-auto py-8 pb-20">
        <div className="w-full pb-8 mb-8 px-2">
          <h1 className="text-3xl font-[500]">ABOUT</h1>
          <p className="mt-4 max-w-[800px]">
            Queens And Canons Safaris Ltd is a private travel company
            specializing in tailor made safaris and holidays in East and
            Southern Africa countries. Focus on you, we do not take you on one
            of our safaris, instead you will be the one creating perfect trip
            with the help of our safari specialist. Your safari satisfaction is
            our mission.
          </p>
        </div>
        <div className="w-full px-2 " id="#terms">
          <h1 className="text-3xl mb-4 font-[500]">OUR TERMS AND CONDITIONS</h1>
          <div className="w-full flex flex-col md:flex-row">
            <div className="px-2 pr-4">
              <h2 className="font-[500] underline">
                Booking and reservations.
              </h2>
              <p className="text-[14px] py-2">
                Confirmed booking is that made with payment of a fixed deposit
                as listed on that specific tour package depending on the number
                of people and category of the tour selected.
              </p>
              <p className="text-[14px] py-2">
                All clients are required to complete payments for the trip and
                other activities selected through the company(Queens and Canons
                Safaris Ltd) payment platforms as it will be instructed by the
                company before the date of the trip/or if not before starting
                the trip on that day of starting the journey.
              </p>
            </div>
            <div className="pl-4">
              <h2 className="font-[500] underline">Our guides.</h2>
              <p className="text-[14px] py-2">
                We can at times switch guides per country and region due to
                Linguistic nature of African countries. So we request all our
                estimated clients to have that in mind and be free when a new
                guide is introduced amidst the journey, its just for the purpose
                of quick interactions with the local communities.
              </p>
              <a
                href={
                  "https://github.com/xapis-21/queens-and-cannons-nextjs/raw/main/public/images/queensandsafaris-terms-and-conditions.pdf"
                }
                target={"_blank"}
                rel="noreferrer"
                className="group bg-green-light/90 h-14 w-80 rounded-lg hover:bg-green-light flex items-center justify-center transition-all duration-300 text-white mt-4"
                download={true}
              >
                Terms and conditions pdf
                <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 ml-2 text-xl  text-white duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
