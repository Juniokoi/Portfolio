import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

import { useViewportSize } from "@mantine/hooks";
import { PaginationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card } from "./Card";
import { MainCard } from "./style";
const Carousel = () => {
    const { height, width } = useViewportSize();
    const [slideNumber, setSlideNumber] = useState(3);
    let SlideNumber = 3;
    useEffect(() => {
        if (width > 1100) {
            setSlideNumber(3);
        } else {
            setSlideNumber(1);
        }
    }, [width]);

    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = (index: number) => {
        setIsOpen(!isOpen);
        return selectedId !== null ? setSelectedId(null) : setSelectedId(index);
    };

    const [bulletPointClass, ProjectName] = [
        "bullet-point",
        [
            ["Potodo", "Projects/Potodo.webp", "#042D71"],
            ["Feedget", "Projects/Feedget.webp", "#8257E6"],
            ["Porfólio", "Projects/Portfolio.webp", "#F7E6EE"],
        ],
    ];

    const paginationOptions = {
        clickable: true,
        bulletClass: bulletPointClass,
        renderBullet: function (index, className) {
            return `<span class="${className}"> ${ProjectName[index][0]} </span>`;
        },
    } as PaginationOptions;

    return (
        <>
            <Swiper
                effect="coverflow"
                slidesPerView={slideNumber}
                spaceBetween={240}
                centeredSlides={true}
                centeredSlidesBounds={true}
                grabCursor={true}
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 10,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop={true}
                pagination={paginationOptions}
                navigation={true}
                modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
                className="mySwiper"
            >
                {ProjectName.map(([title, imgSrc, borderColor], index) => (
                    <SwiperSlide key={index} onClick={() => toggleOpen(index)}>
                        {<MainCard color={borderColor} src={imgSrc} />}
                    </SwiperSlide>
                ))}
            </Swiper>
            {isOpen && (
                <Card
                    Id={selectedId!}
                    onClick={() => toggleOpen(selectedId!)}
                />
            )}
        </>
    );
};

export default Carousel;
