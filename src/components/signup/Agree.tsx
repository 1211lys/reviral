import { SignupData, SignupKeys } from "@/hooks/useSignup";
import React from "react";
import CheckSvg from "../../../public/assets/CheckSvg";
import { CONDITIONS_OF_SERVICE, CONSENT_TO_COLLECTING } from "@/types/contants";

interface Props {
  signupData: SignupData;
  handleAllCheck: () => void;
  handleIndividualCheck: (key: SignupKeys) => void;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Agree({
  signupData,
  handleAllCheck,
  handleIndividualCheck,
  setPageCount,
}: Props) {
  const isAllRequiredChecked =
    signupData.serviceAgree && signupData.userInfoAgree && signupData.ageAgree;
  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      {/* 전체 동의 */}
      <div>
        <button
          className="flex items-center gap-[12px] mb-4"
          onClick={handleAllCheck}
        >
          <div>
            <CheckSvg
              className={`fill-current ${
                signupData.allCheck ? "text-[#5E87E3]" : "text-[#A6A6A6]"
              }`}
            />
          </div>
          <h1 className="flex items-center gap-2 text-lg">전체 동의하기</h1>
        </button>
        <h2 className="ml-[34px] text-xs text-gray-400">
          서비스 이용약관 및 개인정보 수집 및 이용 동의, 만 14세 이상 이용 동의
          등을 포함합니다.
          <br />
          선택 항목은 포함되지 않습니다.
        </h2>
      </div>

      {/* 필수 동의 항목 */}
      <div>
        <button
          className="flex items-center gap-[12px] mb-4"
          onClick={() => handleIndividualCheck("serviceAgree")}
        >
          <div>
            <CheckSvg
              className={`fill-current ${
                signupData.serviceAgree ? "text-[#5E87E3]" : "text-[#A6A6A6]"
              }`}
            />
          </div>
          <h1 className="flex items-center gap-2 text-lg">
            <span className="text-blue-500 text-sm min-w-[40px]">[필수]</span>
            리바이럴 서비스 이용약관
          </h1>
        </button>
        <div
          className="border overflow-y-scroll h-[100px] p-4 ml-[34px]"
          dangerouslySetInnerHTML={{ __html: CONDITIONS_OF_SERVICE }}
        ></div>
      </div>
      <div>
        <button
          className="flex items-center gap-[12px] mb-4"
          onClick={() => handleIndividualCheck("userInfoAgree")}
        >
          <div>
            <CheckSvg
              className={`fill-current ${
                signupData.userInfoAgree ? "text-[#5E87E3]" : "text-[#A6A6A6]"
              }`}
            />
          </div>
          <h1 className="flex items-center gap-2 text-lg">
            <span className="text-blue-500 text-sm min-w-[40px]">[필수]</span>{" "}
            개인정보 수집 및 이용 동의
          </h1>
        </button>

        <div
          className="border overflow-y-scroll h-[100px] p-4 ml-[34px]"
          dangerouslySetInnerHTML={{ __html: CONSENT_TO_COLLECTING }}
        ></div>
      </div>
      <div>
        <button
          className="flex items-center gap-[12px] mb-4"
          onClick={() => handleIndividualCheck("ageAgree")}
        >
          <div>
            <CheckSvg
              className={`fill-current ${
                signupData.ageAgree ? "text-[#5E87E3]" : "text-[#A6A6A6]"
              }`}
            />
          </div>
          <h1 className="flex items-center gap-2 text-lg">
            <span className="text-blue-500 text-sm min-w-[40px]">[필수]</span>{" "}
            본인은 만 14세 이상입니다
          </h1>
        </button>
      </div>

      {/* 선택 동의 항목 */}
      <div>
        <button
          className="flex items-center gap-[12px] mb-4"
          onClick={() => handleIndividualCheck("isEvent")}
        >
          <div>
            <CheckSvg
              className={`fill-current ${
                signupData.isEvent ? "text-[#5E87E3]" : "text-[#A6A6A6]"
              }`}
            />
          </div>
          <h1 className="flex items-center gap-2 text-lg text-left">
            <span className="text-gray-400 text-sm min-w-[40px] text-center">
              [선택]
            </span>{" "}
            이벤트 및 혜택 안내 개인정보 수집 이용
          </h1>
        </button>
        <h2 className="ml-[34px] text-xs text-gray-400">
          이메일 수신 동의 (선택)
        </h2>
        <h2 className="ml-[34px] text-xs text-gray-400">
          SMS 수신 동의 (선택)
        </h2>
      </div>
      <button
        className={`px-4 py-2 w-full text-white rounded ${
          isAllRequiredChecked ? "bg-blue-500" : "bg-gray-500"
        }`}
        onClick={() => {
          if (isAllRequiredChecked) {
            setPageCount(1);
          }
        }}
        disabled={!isAllRequiredChecked}
      >
        다음
      </button>
    </div>
  );
}
