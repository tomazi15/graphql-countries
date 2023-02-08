import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchContinents from "../../api/fetchContinents";

export const ContinentsList = () => {
  const [continents, setContinent] = useState();

  useEffect(() => {
    fetchContinents().then((continent) => setContinent(continent));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="w-1/4 md:w-1/2">
        {continents?.data?.continents.map((continent) => {
          return (
            <Link to={`/countries/${continent.code}`}>
              <div
                key={continent.code}
                className="bg-green-700 text-white rounded-2xl text-center mx-2 my-2 py-6 hover:bg-blue-500"
              >
                {continent.name}
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
