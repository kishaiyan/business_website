import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css';
import React, { useRef, useState } from 'react';

export const Slider = ({ slides }) => {
  const imageStyle = {
    width: "75%", // Ensure the image takes the full width of its containe// Ensure the aspect ratio is maintained, cropping if necessary
  };
  
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={false}
    modules={[Autoplay, Pagination, Navigation]}
    onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title} style={imageStyle}/>
        </SwiperSlide>
      ))}
      <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
    </Swiper>
  );
};
