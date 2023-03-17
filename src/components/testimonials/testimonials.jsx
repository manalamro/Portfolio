import React from "react";
import "./testimonials.css";
import Avtar from "../../assets/52.png";
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      clientAvtar: Avtar,
      clientName: "Manal Amro",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },

    {
      clientAvtar: Avtar,
      clientName: "Manal Amro",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },

    {
      clientAvtar: Avtar,
      clientName: "Manal Amro",
      clientReview:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];


  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials-container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
       
      >
        {data.map(({ clientAvtar, clientName, clientReview }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client-avatar">
                <img src={clientAvtar} alt="avtar one" />
              </div>
              <h5 className="client-name">{clientName}</h5>
              <small className="client-review">{clientReview}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
