import React, { useState } from "react";
import "./CompanyImage.css"; 

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
const CompanyImage = ({ companyImage }) => {
console.log(companyImage);
  return (
    <>
      <div style={{width:"70rem"}}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
        {companyImage?.map((imagePath)=>
          <SwiperSlide>
            <img
              src={`http://localhost:5550/${imagePath}`}
              alt=""
              style={{ height: "auto" ,width:"full"}}
            />
          </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default CompanyImage;
