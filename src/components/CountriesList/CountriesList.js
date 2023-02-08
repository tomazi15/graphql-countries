import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCountries from "../../api/fetchCountries";
import { Link } from "react-router-dom";

const CountriesList = () => {
  const [countries, setCountries] = useState();
  const { continent } = useParams();

  useEffect(() => {
    fetchCountries(continent).then((country) => setCountries(country));
  }, [continent]);

  return (
    <div className="flex flex-col justify-center items-center h-[50%]">
      <h1 className="text-2xl font-mono my-4">
        {countries?.data?.continent?.name}
      </h1>
      {countries?.data?.continent?.countries.map((country) => {
        return (
          <div
            className="flex flex-row justify-between w-1/4"
            key={country.code}
          >
            <Link to={`/countries/details/${country.code}`}>
              {country.name}
            </Link>
            <span className="space-x-1">{country.emoji}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
