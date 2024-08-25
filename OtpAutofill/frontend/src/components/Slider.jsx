import React from 'react'
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import user from "../assets/react.svg"
function Slider() {
    return (
        <div className=" container mx-auto px-4 py-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
              <SwiperSlide >
              <Card link={user} Name={'Otp Auto Filler'} Content={'A Google Chrome Extension Which Automatically Fill The OTP On Web Pages'}></Card>
              </SwiperSlide>
              <SwiperSlide >
              <Card link={user} Name={'Otp Auto Filler'} Content={'A Google Chrome Extension Which Automatically Fill The OTP On Web Pages'}></Card>
              </SwiperSlide>
              <SwiperSlide >
              <Card link={user} Name={'Otp Auto Filler'} Content={'A Google Chrome Extension Which Automatically Fill The OTP On Web Pages'}></Card>
              </SwiperSlide>
              <SwiperSlide >
              <Card link={user} Name={'Otp Auto Filler'} Content={'A Google Chrome Extension Which Automatically Fill The OTP On Web Pages'}></Card>
              </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default Slider
