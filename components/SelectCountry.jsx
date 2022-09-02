import { useState, useEffect } from "react";

const SelectCountry = ({ handleChange }) => {
  const [countries, setCountries] = useState(null);

  const getCountries = async () => {
    const countriesUrl = "https://restcountries.com/v3.1/all";

    const response = await fetch(countriesUrl);
    let result = await response.json();
    result = result.sort((a, b) => a.name.common.localeCompare(b.name.common));

    setCountries(result);
  };

  useEffect(() => {
    getCountries();
  }, []);


  return (
    <div className={`flex w-full flex-col-reverse mb-4 col-span-2`}>
      <div className="relative w-full h-[48px]">
        <select
          name="country"
          id="country"
          onChange={handleChange}
          className="w-full border peer h-full rounded-lg px-4 outline-none focus:border-green-light bg-white"
          required
        >
          <option value="">select country</option>
          {countries &&
            countries.map(({ name},i) => (
              <option value={name.common} key={name.common + i}>{name.common}</option>
            ))}
        </select>
        <span className="peer-required:block pee peer-focus:hidden hidden absolute top-[50%] -translate-y-[50%] right-4 text-green-light">
          *
        </span>
      </div>
      <label
        htmlFor={"country"}
        className="text-[14px] flex items-center mb-2 font-[500]"
      >
        Country of origin
      </label>
    </div>
  );
};

export default SelectCountry;
