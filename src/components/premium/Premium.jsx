import React from "react";
import Container from "../container/Container";

const Premium = () => {
  return (
    <Container>
      <h1 className="text-4xl py-5 font-bold  text-[#1e90ff] text-center">
        ----Some of Our Premium Classes----
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 my-7 gap-4">
        <div className=" border-[#1e90ff] border-4 shadow-xl  shadow-sky-500 hover:shadow-orange-600 hover:border-4 hover:border-amber-600 rounded-2xl">
          <div className="w-32 h-32  mx-auto">
            <img
              className="w-full h-full"
              src="https://i.postimg.cc/WbDdW42c/38.png"
              alt=""
            />
          </div>
          <div className="p-6 ">
            <h1 className="text-3xl text-[#1e90ff] font-bold font-serif text-center ">
              The Coven of Wonders
            </h1>
            <p className="text-justify px-4 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium eius nesciunt. Soluta voluptatem iste voluptatibus
              quae eius incidunt expedita maiores animi in? Nobis, nihil.
            </p>
          </div>
        </div>

        <div className=" border-[#1e90ff] border-4 shadow-xl shadow-sky-500 hover:shadow-orange-600 hover:border-4 hover:border-amber-600 rounded-2xl">
          <div className="w-32 h-32 mt-2  mx-auto">
            <img
              className="w-full h-full"
              src="https://i.postimg.cc/j5VbTdjL/6-61016-magic-fire-splash-shadow-fight-2-all-magics.jpg"
              alt=""
            />
          </div>
          <div className="p-6 ">
            <h1 className="text-3xl  text-[#1e90ff] font-bold font-serif text-center ">
              Mystica Magica
            </h1>
            <p className="text-justify px-4 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium eius nesciunt. Soluta voluptatem iste voluptatibus
              quae eius incidunt expedita maiores animi in? Nobis, nihil.
            </p>
          </div>
        </div>
        <div className=" border-[#1e90ff] border-4 shadow-xl shadow-sky-500 hover:shadow-orange-600 hover:border-4 hover:border-amber-600 rounded-2xl">
          <div className="w-32 h-32  mx-auto">
            <img
              className="w-full h-full"
              src="https://i.postimg.cc/526dFFYX/36-367437-shadow-fight-2-all-magics-hd-png-download.png"
              alt=""
            />
          </div>
          <div className="p-6 ">
            <h1 className="text-3xl text-[#1e90ff] font-bold font-serif text-center ">
              Sorcerous Sanctum
            </h1>
            <p className="text-justify px-4 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium eius nesciunt. Soluta voluptatem iste voluptatibus
              quae eius incidunt expedita maiores animi in? Nobis, nihil.
            </p>
          </div>
        </div>
        <div className=" border-[#1e90ff] border-4 shadow-xl shadow-sky-500 hover:shadow-orange-600 hover:border-4 hover:border-amber-600 rounded-2xl">
          <div className="w-32 h-32  mx-auto">
            <img
              className="w-full h-full"
              src="https://i.postimg.cc/6q9F67x5/images.jpg"
              alt=""
            />
          </div>
          <div className="p-6 ">
            <h1 className="text-3xl text-[#1e90ff] font-bold font-serif text-center ">
              Etheria's Secrets
            </h1>
            <p className="text-justify px-4 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium eius nesciunt. Soluta voluptatem iste voluptatibus
              quae eius incidunt expedita maiores animi in? Nobis, nihil.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Premium;
