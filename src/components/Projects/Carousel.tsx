import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Navigation,
  FreeMode,
  Autoplay,
  EffectCoverflow,
} from "swiper";
import { PaginationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import { Card } from "./Card";
import { imageListClasses } from "@mui/material";

const Carousel = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (index: number) => {
    setIsOpen(!isOpen);
    return selectedId !== null ? setSelectedId(null) : setSelectedId(index);
  };

  const [bulletPointClass, ProjectName] = [
    "bullet-point",
    ["Projeto Teste", "nhoim", "yay", "fffff"],
  ];

  const paginationOptions = {
    clickable: true,
    bulletClass: bulletPointClass,
    renderBullet: function (index, className) {
      return `<span class="${className}"> ${ProjectName[index]} </span>`;
    },
  } as PaginationOptions;

  return (
    <>
      <Swiper
        effect="coverflow"
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        centeredSlidesBounds={true}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        freeMode={true}
        loop={true}
        pagination={paginationOptions}
        navigation={true}
        modules={[Pagination, EffectCoverflow, FreeMode, Navigation, Autoplay]}
        className="mySwiper"
        onClick={(swiperElement, mouseEvent) => {
          swiperElement.autoplay.running
            ? swiperElement.autoplay.stop()
            : swiperElement.autoplay.start();
          swiperElement.$el[0].getAttribute("data-swiper-slide-index");
        }}
      >
        {ProjectName.map((projectName, index) => (
          <SwiperSlide key={index} onClick={() => toggleOpen(index)}>
            {<img src="https://source.unsplash.com/random/4" />}
          </SwiperSlide>
        ))}
      </Swiper>
      {isOpen && (
        <Card Id={selectedId!} onClick={() => toggleOpen(selectedId!)} />
      )}
    </>
  );
};

export default Carousel;
