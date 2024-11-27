import React, { useState } from "react";
import Image from "next/image";
import UserSvg from "../../../../public/assets/signup/UserSvg";
import PwSvg from "../../../../public/assets/signup/PwSvg";
import GenderSvg from "../../../../public/assets/signup/GenderSvg";
import PhoneSvg from "../../../../public/assets/signup/PhoneSvg";
import AddressSvg from "../../../../public/assets/signup/AddressSvg";
import NaverSvg from "../../../../public/assets/signup/NaverSvg";
import CoupangSvg from "../../../../public/assets/signup/CoupangSvg";
const ID_PW_LIST = [
  {
    key: 0,
    label: "id",
    placeholder: "아이디",
    svg: <UserSvg />,
  },
  { key: 1, label: "pw", placeholder: "비밀번호", svg: <PwSvg /> },
] as const;

const USER_INFO_LIST = [
  { key: 0, label: "name", placeholder: "이름", svg: <UserSvg /> },
  { key: 1, label: "gender", placeholder: "성별", svg: <GenderSvg /> },
  {
    key: 2,
    label: "phoneNumber",
    placeholder: "휴대폰 번호",
    svg: <PhoneSvg />,
  },
  { key: 3, label: "address", placeholder: "주소", svg: <AddressSvg /> },
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

type InputTypes = {
  id: "text";
  pw: "password" | "text";
};

export default function Signup() {
  const [inputTypes, setInputTypes] = useState<InputTypes>({
    id: "text",
    pw: "password",
  });

  const toggleInputType = (label: "pw") => {
    setInputTypes((prev) => ({
      ...prev,
      [label]: prev[label] === "password" ? "text" : "password",
    }));
  };

  return (
    <div className="flex flex-col gap-10 max-w-[400px] w-full">
      <div className="border rounded-lg">
        {ID_PW_LIST.map((item) => (
          <div key={item.key} className="relative">
            <div className="absolute top-3 left-3">{item.svg}</div>
            <input
              type={inputTypes[item.label as keyof InputTypes] || "text"}
              placeholder={item.placeholder}
              className={`border p-3 w-full focus:outline-blue-500 ${
                item.key === 0 && "rounded-t-lg "
              } ${item.key === 1 && "rounded-b-lg"} pl-[50px] text-sm`}
            />

            {item.label !== "id" && (
              <button
                onClick={() => toggleInputType(item.label as "pw")}
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
      <div className="border rounded-lg">
        {USER_INFO_LIST.map((item) => (
          <div key={item.key}>
            {item.label !== "gender" && (
              <div className="relative">
                <div className="absolute top-3 left-3">{item.svg}</div>
                <input
                  type="text"
                  placeholder={item.placeholder}
                  className={`border p-3 w-full ${
                    item.key === 0 && "rounded-t-lg"
                  } ${item.key === 5 && "rounded-b-lg"}
                focus:outline-blue-500 
                pl-[50px]
                text-sm
                `}
                />
              </div>
            )}
            {item.label === "gender" && (
              <div className="border px-3 py-2 text-gray-400 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  {item.svg} <p className="text-sm">{item.placeholder}</p>
                </div>

                <div className="flex ">
                  <button className="border-2 border-r-0 w-[70px] text-sm sm:w-[150px] px-2 py-1">
                    남자
                  </button>
                  <button className="border-2 w-[70px] text-sm sm:w-[150px] px-2 py-1">
                    여자
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        회원가입
      </button>
    </div>
  );
}
