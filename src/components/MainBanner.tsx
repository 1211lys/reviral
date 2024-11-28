"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const IMAGE_LIST = [
  { key: 0, src: "/images/1.png", color: "bg-red-500" },
  { key: 1, src: "/images/1.png", color: "bg-blue-500" },
  { key: 2, src: "/images/1.png", color: "bg-green-500" },
  { key: 3, src: "/images/1.png", color: "bg-yellow-500" },
];

const BANNER_BUTTON_LIST = [
  { key: 0, src: "/images/banner1.png", title: "마감 임박" },
  { key: 1, src: "/images/banner2.png", title: "오늘 오픈" },
  { key: 2, src: "/images/banner3.png", title: "시간 구매" },
  { key: 3, src: "/images/banner4.png", title: "당일 구매" },
];

export default function MainBanner() {
  return (
    <>
      <div className="w-screen py-10 relative">
        <div className="banner:hidden">
          <div className="absolute bottom-10 right-[5%] w-10 h-10 bg-red-600 z-10">
            인덱스
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
          >
            {IMAGE_LIST.map((item) => (
              <SwiperSlide key={item.key} style={{ position: "relative" }}>
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "35%" }}
                >
                  <Image
                    src={item.src}
                    alt="banner"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden banner:block">
          <Swiper
            spaceBetween={50}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
          >
            <div className="absolute bottom-0 right-[20%] w-10 h-10 bg-red-600 z-10">
              인덱스
            </div>
            {IMAGE_LIST.map((item) => (
              <SwiperSlide
                key={item.key}
                style={{ minWidth: "980px", position: "relative" }}
              >
                <div
                  className={`relative w-full min-w-[980px] min-h-[330px] `}
                  style={{ paddingBottom: "35%" }}
                >
                  <Image
                    src={item.src}
                    alt="banner"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 gap-2 sm:gap-10 pb-10 border-b-2 border-gray-200">
        {BANNER_BUTTON_LIST.map((item) => (
          <button
            key={item.key}
            className=" hover:border-b-blue-500 hover:text-blue-500"
          >
            <Image src={item.src} width={95} height={95} alt="bannerButton" />
            <h1 className="mt-4">{item.title}</h1>
          </button>
        ))}
      </div>
    </>
  );
}
