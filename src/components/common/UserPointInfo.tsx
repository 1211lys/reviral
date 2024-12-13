"use client";

import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import { useModal } from "@/hooks/useModal";
import { useRouter } from "next/navigation";

export default function UserPointInfo() {
  const { isOpen, openModal, closeModal } = useModal();
  const router = useRouter();
  return (
    <div className="bg-white mx-4 max-w-[400px] w-full lg:mt-8 lg:mx-0 p-4 sm:p-8 border rounded-lg shadow-sm transition duration-200">
      <h1 className="font-bold text-2xl">홍길동님</h1>
      <p className="mb-4">hello@naver.com</p>
      <p>
        이번달 적립 포인트 <span className="text-blue-500 font-bold">0</span>원
      </p>
      <p className="mb-4">
        총 전환 포인트 <span className="text-blue-500 font-bold">21500</span>원
      </p>
      <div className="bg-gradationBlue p-4 sm:p-8 gap-4 flex flex-col text-white font-bold rounded-xl mb-4">
        <div className="flex items-center gap-2 text-xl">
          <Image
            className="transition-transform duration-300 ease-in-out transform group-hover:rotate-90"
            src="/images/point2.png"
            width={24}
            height={24}
            alt="point2Img"
          />
          포인트 잔액
        </div>
        <div className="text-3xl">15,000원</div>
        <button
          className="bg-blue-700 py-2 rounded-md text-xl hover:bg-blue-800 flex gap-2 items-center justify-center group"
          onClick={openModal}
        >
          <Image
            className="transition-transform duration-300 ease-in-out transform group-hover:rotate-180"
            src="/images/change.png"
            width={20}
            height={20}
            alt="changeImg"
          />
          포인트 전환
        </button>
      </div>
      <button
        onClick={() => router.push("account")}
        className="bg-black text-gray-200 py-3 w-full rounded-xl font-bold text-xl flex items-center justify-center gap-2 hover:text-white group"
      >
        <Image
          className="transition-transform duration-700 ease-in-out transform group-hover:rotate-180"
          src="/images/setting.png"
          width={24}
          height={24}
          alt="settingImg"
        />
        계정 설정
        <span className="text-sm">내정보, 비밀번호 변경, 계좌 {">"}</span>
      </button>
    </div>
  );
}
