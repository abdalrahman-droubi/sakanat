import React, { useState } from "react";
import "./CompanyImage.css"; // You can define your own CSS styles
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const CompanyImage = ({ companyImage }) => {
  // const [slideIndex, setSlideIndex] = useState(0);

  // const captions = [
  //   'Caption 1',
  //   'Caption 2',
  //   'Caption 3' // Add more captions if needed
  // ];

  // const plusSlides = (n) => {
  //   setSlideIndex((prevIndex) => (prevIndex + n + companyImage?.length) % companyImage?.length);
  // };

  // const currentSlide = (n) => {
  //   setSlideIndex(n);
  // };
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
              style={{ height: "400px" ,width:"full"}}
            />
          </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default CompanyImage;
