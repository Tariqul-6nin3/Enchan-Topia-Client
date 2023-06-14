import React from "react";
import Banner from "../../components/banner/Banner";
import PopularClass from "../../components/popularClass/PopularClass";
import PopularInst from "../../components/popularInstr/PopularInst";
import Premium from "../../components/premium/Premium";

const Home = () => {
  return (
    <div>
      <Banner />
      <Premium />
      <PopularClass />
      <PopularInst />
    </div>
  );
};

export default Home;
