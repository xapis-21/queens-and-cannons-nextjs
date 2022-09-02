
const Testimonial = ({ testimonial, image, name }) => {
  return (
    <>
      <div className="lg:w-[30%] text-sm leading-6 rounded-2xl w-full bg-gray-900/40 overflow-hidden my-4 flex flex-col  items-center justify-between border-white/20 py-4 px-4">
        <div className="flex flex-col px-2">
          <div className="flex items-center mb-2">
            <img
              src={image}
              alt={testimonial}
              className="w-[60px] h-[60px] object-cover rounded-full mr-6"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-white/80">{name}</span>
            </div>
          </div>
          <p className="text-[12px] mt-4 text-white/60 max-w-[300px]">
            "{testimonial}"
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
