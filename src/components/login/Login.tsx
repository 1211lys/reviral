"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import IdPwModal from "../common/IdPwModal";
import { useModal } from "@/hooks/useModal";
import useAuth from "@/hooks/useAuth";

export default function Login() {
  const router = useRouter();

  const { login, handleLoginInputChange, isError } = useAuth();
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex flex-col items-center justify-center w-full p-10 h-full min-h-[550px]">
      <div className="sm:border flex flex-col gap-8 w-[440px] sm:shadow-xl rounded-lg px-10 py-8 sm:py-20 my-10">
        <div className="flex gap-4">
          <div className="w-[80px] ml-6">
            <Image src="/images/logo.png" width={80} height={80} alt={"logo"} />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="font-bold text-lg sm:text-2xl text-blue-500 ">
              리바이럴
            </h1>
            <h2 className="text-sm sm:text-xl">세상의 모든 리뷰</h2>
          </div>
        </div>
        <div>
          <input
            className=" w-full px-4 py-2 rounded-lg mb-4 border-gray-200 bg-gray-100 text-sm "
            type="text"
            placeholder="아이디를 입력해 주세요."
            id="loginId"
            onChange={handleLoginInputChange}
          />
          <input
            className=" w-full px-4 py-2 rounded-lg mb-4 border-gray-200 bg-gray-100 text-sm"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            id="password"
            onChange={handleLoginInputChange}
          />
          {isError && (
            <p className="text-sm ml-4 text-red-500">
              계정 또는 비밀번호를 확인해주세요
            </p>
          )}
          <button
            className="text-right w-full text-gray-400  hover:text-blue-500 text-xs"
            onClick={() => openModal}
          >
            계정을 잃어버리셨나요?
          </button>
          <button
            className="text-right w-full text-gray-400  hover:text-blue-500 text-xs"
            onClick={() => openModal}
          >
            비밀번호를 잃어버리셨나요?
          </button>
        </div>
        <div className="flex flex-col">
          <button
            className="w-full bg-blue-500 text-white p-2 rounded-lg mb-4 font-bold hover:bg-blue-400"
            onClick={login}
          >
            로그인
          </button>
          <button
            className="p-2 text-gray-400 hover:text-blue-500 text-xs"
            onClick={() => router.push("signup")}
          >
            계정 생성
          </button>
        </div>
      </div>
      <IdPwModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
