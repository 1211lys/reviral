"use client";

import {
  PersonalInfoKeys,
  SignupData,
  SignupKeys,
  ValidationErrors,
} from "@/hooks/useSignup";
import { PostSignupData } from "@/service/auth";
import { useRouter } from "next/navigation";

import React from "react";

interface Props {
  signupData: SignupData;
  validateField: (key: PersonalInfoKeys, value: string) => void;
  validationErrors: ValidationErrors;
}

export default function SignupButton({
  signupData,
  validateField,
  validationErrors,
}: Props) {
  const router = useRouter();
  const validateAllFields = () => {
    const requiredFields: PersonalInfoKeys[] = [
      "loginId",
      "loginPw",
      "username",
      "gender",
      "phoneNumber",
      "address",
    ];

    let isValid = true;

    requiredFields.forEach((key) => {
      if (!signupData[key]) {
        validateField(key, signupData[key]);
        isValid = false;
      } else if (validationErrors[key]) {
        isValid = false;
      }
    });

    return isValid;
  };

  const isAllDataValid = () => {
    const requiredKeys: SignupKeys[] = [
      "serviceAgree",
      "userInfoAgree",
      "ageAgree",
    ];
    const allAgreed = requiredKeys.every((key) => signupData[key]);
    const inputsValid = validateAllFields();

    return allAgreed && inputsValid;
  };

  const handleSubmit = () => {
    if (isAllDataValid()) {
      {
        const nv = signupData.nvId === "" ? null : signupData.nvId;
        const cp = signupData.cpId === "" ? null : signupData.cpId;

        PostSignupData({
          loginId: signupData.loginId,
          loginPw: signupData.loginPw,
          username: signupData.username,
          gender: signupData.gender,
          phoneNumber: signupData.phoneNumber,
          address: signupData.address,
          nvId: nv,
          cpId: cp,
          isEvent: signupData.isEvent,
        })
          .then(({ data }) => {
            console.log("test", data);
            if (data.data.signUp) {
              alert("회원가입에 성공했습니다!");
              router.push("/");
            }
          })
          .catch((error) => {
            console.log(error.response.data.message);
            if (error.response.data.code === "BE0014") {
              validateField("loginId", error.response.data.code);
            }
          });
      }
    } else {
      validateAllFields();
    }
  };
  return (
    <button
      className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={handleSubmit}
    >
      회원가입
    </button>
  );
}
