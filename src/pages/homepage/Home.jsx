import React from "react";
import Banner from "../../components/banner/Banner";
import PopularClass from "../../components/popularClass/PopularClass";
import PopularInst from "../../components/popularInstr/PopularInst";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClass />
      <PopularInst />
    </div>
  );
};

export default Home;
