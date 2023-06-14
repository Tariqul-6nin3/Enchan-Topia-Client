import React, { useEffect, useState } from "react";
import SingleInstr from "../singleInstr/SingleInstr";
import Container from "../container/Container";

const PopularInst = () => {
  const [popularInst, setPopularInst] = useState([]);
  console.log(popularInst);

  useEffect(() => {
    fetch("https://enchantopia-server-tariqul-6nin3.vercel.app/popularClass")
      .then(res => res.json())
      .then(data => {
        setPopularInst(data);
        // console.log(data);
      });
  }, []);

  return (
    <Container>
      <div>
        <h1 className="text-4xl py-5 font-bold  text-[#1e90ff] text-center">
          -----Popular Instructors-----
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {popularInst?.map(instr => (
            <SingleInstr key={instr._id} instr={instr}></SingleInstr>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularInst;
