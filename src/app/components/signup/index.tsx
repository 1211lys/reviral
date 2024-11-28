"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useSignup } from "@/hooks/useSignup";
import Agree from "./Agree";
import Signup from "./Signup";

export default function index() {
  const {
    signupData,
    handleAllCheck,
    handleIndividualCheck,
    handleInputChange,
    handleBlur,
    validationErrors,
    validateField,
    handleGender,
  } = useSignup();

  const [pageCount, setPageCount] = useState(0);

  return (
    <div className="flex flex-col items-center w-full p-10">
      <div className="w-full max-w-[400px] mb-20">
        <Image
          src="/images/textLogo.png"
          width={159}
          height={28}
          alt="textLogo"
        />
      </div>
      {pageCount === 0 && (
        <Agree
          signupData={signupData}
          handleAllCheck={handleAllCheck}
          handleIndividualCheck={handleIndividualCheck}
          setPageCount={setPageCount}
        />
      )}
      {pageCount === 1 && (
        <Signup
          signupData={signupData}
          handleInputChange={handleInputChange}
          handleBlur={handleBlur}
          validationErrors={validationErrors}
          handleGender={handleGender}
          validateField={validateField}
        />
      )}
    </div>
  );
}
