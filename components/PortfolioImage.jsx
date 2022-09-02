const PortfolioImage = ({ image, caption, seo }) => {
  return (
    <div className="group h-[500px] relative">
      <img
        src={image}
        alt={seo}
        className="group-hover:brightness-50 w-full h-full object-cover object-center duration-500"
      />
      <div className="hidden text-white absolute top-0 left-0 w-full h-full group-hover:flex items-end duration-500">
        <div className="flex px-2 py-2">
          <p className="text-[12px] max-w-[400px] mb-4">{caption} </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImage;
