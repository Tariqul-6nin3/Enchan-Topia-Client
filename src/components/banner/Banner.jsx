import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <Carousel
      autoPlay="true"
      interval={2000}
      infiniteLoop="true"
      className="text-center h-1/4">
      <div>
        <img src="https://i.postimg.cc/zBRctfcT/1775603.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/T2n1Qfqn/The-Magic-Flute-e1604662012251-scaled.webp" />
      </div>
      <div>
        <img src="https://i.postimg.cc/6qh9K6YS/the-magician-dan-white.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/tJBLDsrX/almos-bechtold-AJ-Mou1-FUS8-unsplash.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/8CL99KyX/joanna-kosinska-Mn-KWt1-W1-GDg-unsplash.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/6qh9K6YS/the-magician-dan-white.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/WpqgvBm4/1775602.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
