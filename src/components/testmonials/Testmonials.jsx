import React from "react";

import "./Testmonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
    {
        avatar: AVTR1,
        name: " Marcias Soeiro",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic tempora quisquam velit ratione id!",
    },
    {
        avatar: AVTR2,
        name: " Marcias Soeiro",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic tempora quisquam velit ratione id!",
    },
    {
        avatar: AVTR3,
        name: " Marcias Soeiro",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic tempora quisquam velit ratione id!",
    },
    {
        avatar: AVTR4,
        name: " Marcias Soeiro",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic tempora quisquam velit ratione id!",
    },
];

const Testmonials = () => {
    return (
        <section id="testmonials">
            <h5> Review dos clientes</h5>
            <h2> Depoimentos </h2>
            <Swiper
                className="container testmonials-container"
                modules={[ Pagination ]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {/* POPULANDO DINAMICAMENTE */}
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testmonial">
                            <div className="client-avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client-name">{name}</h5>
                            <small className="client-review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testmonials;
