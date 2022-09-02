
const FormGroup = ({
  title,
  label,
  isrequired,
  addCss,
  holder,
  type,
  handleChange,
  min,
}) => {
  return (
    <div className={`flex w-full flex-col-reverse mb-4 lg:mb-8 ${addCss}`}>
      <div className="relative w-full h-[48px]">
        <input
          type={type}
          className="w-full border peer h-full placeholder:text-sm font-light placeholder:text-green-dark rounded-md px-4 outline-none focus:border-green-light"
          required={isrequired}
          placeholder={holder}
          onChange={handleChange}
          min={min}
        />
        <span className="peer-required:block pee peer-focus:hidden hidden absolute top-[50%] -translate-y-[50%] right-4 text-green-light">
          *
        </span>
      </div>
      <label
        htmlFor={title}
        className="text-[14px] flex items-center mb-2 font-[500]"
      >
        {label}
      </label>
    </div>
  );
};

export default FormGroup;
