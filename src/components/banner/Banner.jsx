import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../banner/Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src="https://i.postimg.cc/9Q3Bv5nq/1775602.jpg" alt="" />
          <div className="overlay px-6 py-3 space-y-4">
            <h2 className="text-6xl font-semibold ">Magic Learning Website</h2>
            <p className="text-2xl px-4 font-semibold">
              Learn the secrets of magic and become a master magician. Learn the
              secrets of magic and become a master{" "}
            </p>
            <AwesomeButton size="large" type="primary">
              {" "}
              Get Started
            </AwesomeButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/x10RPrpG/almos-bechtold-AJ-Mou1-FUS8-unsplash.jpg"
            alt=""
          />
          <div className="overlay px-6 py-3 space-y-4">
            <h2 className="text-6xl font-semibold ">Magic Learning Website</h2>
            <p className="text-2xl px-4 font-semibold">
              Master the art of illusion and create mesmerizing performances.
              Master the art of illusion and create mesmerizing performances.
            </p>
            <AwesomeButton size="large" type="primary">
              {" "}
              Get Started
            </AwesomeButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/tJBLDsrX/almos-bechtold-AJ-Mou1-FUS8-unsplash.jpg"
            alt=""
          />
          <div className="overlay px-6 py-3 space-y-4">
            <h2 className="text-6xl font-semibold ">Magic Learning Website</h2>
            <p className="text-2xl px-4 font-semibold">
              Unlock the secrets of magic and entertain audiences with your
              skills. Unlock the secrets of magic and entertain audiences with
              your
            </p>
            <AwesomeButton size="large" type="primary">
              {" "}
              Get Started
            </AwesomeButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/8CL99KyX/joanna-kosinska-Mn-KWt1-W1-GDg-unsplash.jpg"
            alt=""
          />
          <div className="overlay px-6 py-3 space-y-4">
            <h2 className="text-6xl font-semibold ">Magic Learning Website</h2>
            <p className="text-2xl px-4 font-semibold">
              Discover the world of magic and amaze everyone with your tricks.
              Discover the world of magic and amaze everyone with your{" "}
            </p>
            <AwesomeButton size="large" type="primary">
              {" "}
              Get Started
            </AwesomeButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/6qh9K6YS/the-magician-dan-white.jpg"
            alt=""
          />
          <div className="overlay px-6 py-3 space-y-4">
            <h2 className="text-6xl font-semibold ">Magic Learning Website</h2>
            <p className="text-2xl px-4 font-semibold">
              Learn the art of magic and create unforgettable experiences. Learn
              the art of magic and create unforgettable experiences.
            </p>
            <AwesomeButton size="large" type="primary">
              {" "}
              Get Started
            </AwesomeButton>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.postimg.cc/WpqgvBm4/1775602.jpg" alt="" />
          <div className="overlay px-6 py-3 space-y-4">
            <h2 className="text-6xl font-semibold ">Magic Learning Website</h2>
            <p className="text-2xl px-4 font-large">
              Become a magician and inspire wonder in the hearts of people.
              Become a magician and inspire wonder in the hearts of{" "}
            </p>
            <AwesomeButton size="large" type="primary">
              {" "}
              Get Started
            </AwesomeButton>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
