import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCountryDetails from "../../api/fetchCountryDetails";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState();
  const { country } = useParams();

  console.log("DETAILS COMPONENT", country);

  useEffect(() => {
    console.log("USE EFFECT START");
    fetchCountryDetails(country).then((details) => setCountryDetails(details));
    console.log("USE EFFECT FINISH");
  }, [country]);

  console.log("HELLO", countryDetails);

  return (
    <div className="flex flex-col justify-center items-center h-[50%]">
      <h1 className="text-2xl font-mono my-4">
        {countryDetails?.data?.country?.name}
      </h1>

      <div className="flex flex-row justify-between w-1/4">
        Capital:
        <span className="space-x-1">
          {countryDetails?.data?.country?.capital}
        </span>
      </div>
      <div className="flex flex-row justify-between w-1/4">
        Currency:
        <span className="space-x-1">
          {countryDetails?.data?.country?.currency}
        </span>
      </div>

      <div className="flex flex-row justify-between w-1/4">
        Phone Code:
        <span className="space-x-1">
          +{countryDetails?.data?.country?.phone}
        </span>
      </div>
    </div>
  );
};

export default CountryDetails;
