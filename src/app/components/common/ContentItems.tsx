"use client";

import React from "react";
import Image from "next/image";

export interface List {
  key: number;
  src: string;
  title: string;
  itemsPrice: number;
  point: number;
  maxCount: number;
  userCount: number;
  date: string;
  company: string;
}

interface Props {
  Data: List[];
}

export default function ContentItems({ Data }: Props) {
  return (
    <div className="w-full flex items-center justify-center  ">
      <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-8 lg:gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5">
        {Data.map((item) => (
          <button
            key={item.key}
            className="max-w-[240px] p-2 text-left bg-white border-white shadow-lg shadow-blue-200/50 rounded-md hover:text-black text-gray-500 group"
          >
            <div>
              <div
                className={`relative min-w-[115px] min-h-[65px] max-w-[230px] max-h-[130px] mb-2  `}
              >
                <p className="absolute top-0 left-0 bg-red-500 text-white font-semibold text-sm px-2 rounded-lg rounded-bl-none rounded-tr-none z-10">
                  {item.date}
                </p>
                <div>
                  <Image
                    src={item.src}
                    alt="banner"
                    layout="responsive"
                    width={500}
                    height={300}
                    objectFit="cover"
                    style={{
                      borderTopRightRadius: "8px",
                      borderTopLeftRadius: "8px",
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center mb-2">
                {item.company === "N" ? (
                  <div className="w-[20px] h-[20px] bg-green-400 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                    N
                  </div>
                ) : item.company === "C" ? (
                  <div className="w-[20px] h-[20px] bg-red-500 text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                    C
                  </div>
                ) : (
                  <div className="w-[20px] h-[20px] bg-blue-400  text-white flex items-center justify-center rounded-md text-sm p-2 font-bold">
                    E
                  </div>
                )}
                <p className=" ml-2 flew-grow overflow-hidden text-ellipsis whitespace-nowrap  ">
                  {item.title}
                </p>
              </div>
              <p className="text-lg mb-2 ">
                상품 가격 : {item.itemsPrice.toLocaleString()}원
              </p>
              <div className="p-1 bg-blue-400 group-hover:bg-blue-600 rounded-md text-center text-white font-semibold text-lg mb-2">
                {item.point} 포인트 적립
              </div>
              <div className="flex flex-col justify-between">
                <p className=" text-sm">
                  참여 인원 {"( "}
                  {item.userCount} / {item.maxCount}
                  {" )"}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
