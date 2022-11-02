import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "../Navbar/Navbar";
import SpecialsOff from "./SpecialsOff/SpecialsOff";
import FastSearch from "./FastSearch/FastSearch";
const Landing = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-5">
      <Navbar />
      <Banner />
      <SpecialsOff />
      <FastSearch />
    </div>
  );
};

export default Landing;
