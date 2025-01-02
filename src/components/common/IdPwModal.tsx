"use client";

import React from "react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

export default function IdPwModal({ isOpen, closeModal }: Props) {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center py-10">
              <div className="flex gap-4 p-10 ">
                <div className="w-[80px]">
                  <Image
                    src="/images/logo.png"
                    width={80}
                    height={80}
                    alt={"logo"}
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <h1 className="font-bold text-lg sm:text-2xl text-blue-500 ">
                    리바이럴
                  </h1>
                  <h2 className="text-sm sm:text-xl">세상의 모든 리뷰</h2>
                </div>
              </div>
              <div className="mb-10 font-bold">
                아이디 또는 비밀번호를 잃어버리셨나요 ?
              </div>
              <button
                className="bg-yellow-300 px-6 py-2 rounded-md"
                onClick={() => window.open("kaka")}
              >
                카카오톡 문의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
