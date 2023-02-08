import "./App.css";
import React from "react";
import { ContinentsList } from "./components/ContinentsList/ContinentsList";
import CountriesList from "./components/CountriesList/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails/CountryDetails";

const App = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-mono my-4">
        Welcome To Countries
      </h1>
      <Routes>
        <Route path="/" element={<ContinentsList />} />
        <Route path="/countries/:continent" element={<CountriesList />} />
        <Route
          path="/countries/details/:country"
          element={<CountryDetails />}
        />
      </Routes>
    </>
  );
};

export default App;
