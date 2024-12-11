"use client";

import React, { useState } from "react";
import Image from "next/image";
import UserSvg from "../../../public/assets/signup/UserSvg";
import PwSvg from "../../../public/assets/signup/PwSvg";
import GenderSvg from "../../../public/assets/signup/GenderSvg";
import PhoneSvg from "../../../public/assets/signup/PhoneSvg";
import AddressSvg from "../../../public/assets/signup/AddressSvg";
import NaverSvg from "../../../public/assets/signup/NaverSvg";
import CoupangSvg from "../../../public/assets/signup/CoupangSvg";
import {
  PersonalInfoKeys,
  SignupData,
  ValidationErrors,
} from "@/hooks/useSignup";
import SignupButton from "./SignupButton";

type InputTypes = {
  loginId: "text";
  loginPw: "password" | "text";
};

interface Props {
  signupData: SignupData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationErrors: ValidationErrors;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleGender: (value: string) => void;
  validateField: (key: PersonalInfoKeys, value: string) => void;
}

export default function Signup({
  signupData,
  handleInputChange,
  validationErrors,
  handleBlur,
  handleGender,
  validateField,
}: Props) {
  const [inputTypes, setInputTypes] = useState<InputTypes>({
    loginId: "text",
    loginPw: "password",
  });

  const toggleInputType = (label: "loginPw") => {
    setInputTypes((prev) => ({
      ...prev,
      [label]: prev[label] === "password" ? "text" : "password",
    }));
  };

  const ID_PW_LIST = [
    {
      key: 0,
      label: "loginId",
      placeholder: "아이디",
      svg: (
        <UserSvg
          className={`${
            validationErrors.loginId !== "" ? "text-red-500" : "text-gray-400"
          }
          `}
        />
      ),
    },
    {
      key: 1,
      label: "loginPw",
      placeholder: "비밀번호",
      svg: (
        <PwSvg
          className={`${
            validationErrors.loginPw !== "" ? "text-red-500" : "text-gray-400"
          }
    `}
        />
      ),
    },
  ] as const;

  const USER_INFO_LIST = [
    {
      key: 0,
      label: "username",
      placeholder: "이름",
      svg: (
        <UserSvg
          className={`${
            validationErrors.username !== "" ? "text-red-500" : "text-gray-400"
          }
    `}
        />
      ),
    },
    {
      key: 1,
      label: "gender",
      placeholder: "성별",
      svg: (
        <GenderSvg
          className={`${
            validationErrors.gender !== "" ? "text-red-500" : "text-gray-400"
          }
    `}
        />
      ),
    },
    {
      key: 2,
      label: "phoneNumber",
      placeholder: "휴대폰 번호",
      svg: (
        <PhoneSvg
          className={`${
            validationErrors.phoneNumber !== ""
              ? "text-red-500"
              : "text-gray-400"
          }
      `}
        />
      ),
    },
    {
      key: 3,
      label: "address",
      placeholder: "주소",
      svg: (
        <AddressSvg
          className={`${
            validationErrors.address !== "" ? "text-red-500" : "text-gray-400"
          }
    `}
        />
      ),
    },
    {
      key: 4,
      label: "naverId",
      placeholder: "[선택] N사 아이디",
      svg: <NaverSvg />,
    },
    {
      key: 5,
      label: "coupangId",
      placeholder: "[선택] C사 아이디",
      svg: <CoupangSvg />,
    },
  ];

  return (
    <div className="flex flex-col max-w-[400px] w-full">
      <div className="border rounded-lg">
        {ID_PW_LIST.map((item) => (
          <div key={item.key} className="relative">
            <div className="absolute top-3 left-3">{item.svg}</div>
            <input
              type={inputTypes[item.label as keyof InputTypes] || "text"}
              placeholder={item.placeholder}
              id={item.label}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`inputGroup border p-3 w-full focus:outline-blue-500  ${
                item.key === 0 && "rounded-t-lg "
              } ${item.key === 1 && "rounded-b-lg"} pl-[50px] text-sm ${
                validationErrors[item.label as keyof ValidationErrors]
                  ? "border-red-500 placeholder:text-red-500"
                  : "border-gray-200"
              } 
                  
              ${
                validationErrors.loginId !== "" &&
                validationErrors.loginPw !== ""
                  ? `${item.key === 1 && "border-t-0"}  `
                  : ""
              }`}
            />

            {item.label !== "loginId" && (
              <button
                onClick={() => toggleInputType(item.label as "loginPw")}
                className="absolute right-3 top-3"
              >
                {inputTypes[item.label as keyof InputTypes] === "password" ? (
                  <Image
                    src="/images/eye-off.png"
                    width={24}
                    height={24}
                    alt="eyeOff"
                  />
                ) : (
                  <Image
                    src="/images/eye.png"
                    width={24}
                    height={24}
                    alt="eye"
                  />
                )}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="my-2 text-sm text-red-500">
        {validationErrors.loginId !== "" && <p>{validationErrors.loginId}</p>}
        {validationErrors.loginPw !== "" && <p>{validationErrors.loginPw}</p>}
      </div>
      <div className="border rounded-lg mt-8">
        {USER_INFO_LIST.map((item) => (
          <div key={item.key}>
            {item.label !== "gender" && (
              <div className="relative">
                <div className="absolute top-3 left-3">{item.svg}</div>
                <input
                  type="text"
                  placeholder={item.placeholder}
                  id={item.label}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`border p-3 w-full 
                    
                    ${item.key === 0 && "rounded-t-lg"} ${
                    item.key === 5 && "rounded-b-lg"
                  }
                focus:outline-blue-500 
                pl-[50px]
                text-sm
                ${
                  validationErrors[item.label as keyof ValidationErrors]
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-gray-200"
                }

                ${
                  validationErrors.username !== "" &&
                  validationErrors.gender !== ""
                    ? `${item.key === 1 && "border-t-0"}  `
                    : ""
                }

                 ${
                   validationErrors.gender !== "" &&
                   validationErrors.phoneNumber !== ""
                     ? `${item.key === 2 && "border-t-0"}  `
                     : ""
                 }
                       ${
                         validationErrors.phoneNumber !== "" &&
                         validationErrors.address !== ""
                           ? `${item.key === 3 && "border-t-0"}  `
                           : ""
                       }
                `}
                />
              </div>
            )}
            {item.label === "gender" && (
              <div
                className={`border px-3 py-2 text-gray-400 flex justify-between items-center ${
                  validationErrors.gender !== "" && "border-red-500"
                }  ${
                  validationErrors.username !== "" &&
                  validationErrors.gender !== ""
                    ? `${item.key === 1 && "border-t-0"}  `
                    : ""
                }  `}
              >
                <div className="flex gap-3 items-center">
                  {item.svg}{" "}
                  <p
                    className={`text-sm ${
                      validationErrors.gender !== "" && "text-red-500"
                    } `}
                  >
                    {item.placeholder}
                  </p>
                </div>

                <div className="flex ">
                  <button
                    className={`border-2 border-r-0 w-[70px] text-sm sm:w-[150px] px-2 py-1 ${
                      signupData.gender === "MAN"
                        ? "border-blue-500 border-r-2 text-blue-500"
                        : ""
                    }
                    ${
                      validationErrors.gender !== "" &&
                      "border-red-500 text-red-500"
                    }    
                    `}
                    onClick={() => handleGender("MAN")}
                  >
                    남자
                  </button>
                  <button
                    className={`border-2 w-[70px] text-sm sm:w-[150px] px-2 py-1  ${
                      signupData.gender === "WOMAN"
                        ? "border-blue-500 border-r-2 text-blue-500"
                        : " border-l-0"
                    } ${signupData.gender === "" && "border-l-2"} ${
                      validationErrors.gender !== "" &&
                      "border-red-500 text-red-500"
                    } `}
                    onClick={() => handleGender("WOMAN")}
                  >
                    여자
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="my-2 text-sm text-red-500 ">
        {validationErrors.username !== "" && <p>{validationErrors.username}</p>}
        {validationErrors.gender !== "" && <p>{validationErrors.gender}</p>}
        {validationErrors.phoneNumber !== "" && (
          <p>{validationErrors.phoneNumber}</p>
        )}
        {validationErrors.address !== "" && <p>{validationErrors.address}</p>}
      </div>
      <SignupButton
        signupData={signupData}
        validateField={validateField}
        validationErrors={validationErrors}
      />
    </div>
  );
}
