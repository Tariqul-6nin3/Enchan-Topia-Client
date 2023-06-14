import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import Container from "../container/Container";
import "../popularClass/PopularClass.css";
import InstructorData from "./InstructorData";
import { Autoplay, Pagination, Navigation } from "swiper";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then(res => res.json())
      .then(data => {
        setPopularClass(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold py-8 text-center text-[#1e90ff]">
        ----- Popular Classes ----
      </h1>
      <Container>
        <div className="hidden md:block">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className="swipers"
            modules={[EffectCoverflow, Pagination, Autoplay]}>
            {popularClass?.slice(0, 6).map(classItem => (
              <SwiperSlide className="swiper-slides" key={classItem._id}>
                <InstructorData classItem={classItem}></InstructorData>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="block md:hidden">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className="swipers"
            modules={[EffectCoverflow, Pagination, Autoplay]}>
            {popularClass?.map(classItem => (
              <SwiperSlide className="swiper-slides" key={classItem._id}>
                <InstructorData classItem={classItem}></InstructorData>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default PopularClass;
