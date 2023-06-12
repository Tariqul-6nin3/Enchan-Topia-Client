import React from "react";
import { Rating } from "@smastrom/react-rating";
import { FaThumbsUp } from "react-icons/fa";
import "@smastrom/react-rating/style.css";

const SingleClass = ({ classItem }) => {
  const {
    name,
    number_of_students,
    price,
    image,
    available_seats,
    instructor,
  } = classItem;
  // console.log(instructor);
  return (
    <div className="card menu-item card-compact pt-2 pb-7 w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-96 px-2 py-4 w-full object-cover  rounded-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="px-4 py-2">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="mt-3 text-base">{}</p>
          <h4 className="text-lg mt-2 font-semibold">
            Experience:
            <span className="text-stone-950"> {}</span> Years of Experience
          </h4>
          <p className="mt-2">
            <FaThumbsUp className="inline mr-4 text-2xl hover:translate-x-1" />
            {} Likes
          </p>

          <div className="card-actions mt-3 flex flex-col md:flex-row justify-between items-center">
            <div className="mt-1">
              <Rating readOnly style={{ maxWidth: 120 }} value={5}></Rating>
            </div>
            <button className="btn btn-sm text-white bg-[#1e90ff] ">
              View Recipes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "../SingleClass/SingleClass.css";

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper";

// const SingleClass = ({ classItem }) => {
//   const {
//     name,
//     number_of_students,
//     price,
//     image,
//     available_seats,
//     instructor,
//   } = classItem;
//   // console.log(instructor);
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper">
//         <SwiperSlide>
//           <img src={image} />
//         </SwiperSlide>
//         {/* <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide> */}
//       </Swiper>
//     </>
//   );
// };

// export default SingleClass;
