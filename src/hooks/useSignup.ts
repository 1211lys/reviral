import { GetAccountCheck } from "@/service/auth";
import { useState } from "react";

export type SignupKeys =
  | "allCheck"
  | "serviceAgree"
  | "userInfoAgree"
  | "ageAgree"
  | "isEvent";

export type PersonalInfoKeys =
  | "loginId"
  | "loginPw"
  | "username"
  | "gender"
  | "phoneNumber"
  | "address"
  | "nvId"
  | "cpId";

export type SignupData = Record<SignupKeys, boolean> &
  Record<PersonalInfoKeys, string>;

export type ValidationErrors = Record<PersonalInfoKeys, string>;

export function useSignup() {
  const [signupData, setSignupData] = useState<SignupData>({
    allCheck: false,
    serviceAgree: false,
    userInfoAgree: false,
    ageAgree: false,
    isEvent: false,
    loginId: "",
    loginPw: "",
    username: "",
    gender: "",
    phoneNumber: "",
    address: "",
    nvId: "",
    cpId: "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    loginId: "",
    loginPw: "",
    username: "",
    gender: "",
    phoneNumber: "",
    address: "",
    nvId: "",
    cpId: "",
  });

  const validateField = (key: PersonalInfoKeys, value: string) => {
    let error = "";

    switch (key) {
      case "loginId":
        if (!value.trim()) error = "아이디를 입력해주세요.";
        else if (value.length < 4) error = "아이디는 4자 이상이어야 합니다.";
        else if (value.length > 16) error = "아이디는 16자 이하이어야 합니다.";
        else if (value === "BE0014") error = "이미 사용중인 계정입니다.";
        break;
      case "loginPw":
        if (!value.trim()) error = "비밀번호를 입력해주세요.";
        else if (value.length < 8) error = "비밀번호는 8자 이상이어야 합니다.";
        else if (
          !/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/.test(value)
        )
          error = "8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.";
        break;
      case "username":
        if (!value.trim()) error = "이름을 입력해주세요.";
        else if (!/^[가-힣]+$/.test(value)) {
          error = "이름은 한글만 입력 가능합니다.";
        }
        break;
      case "gender":
        if (value === "") error = "성별을 선택해주세요.";
        break;
      case "phoneNumber":
        if (!/^\d{10,11}$/.test(value))
          error = "휴대폰 번호는 10~11자리 숫자여야 합니다.";
        break;
      case "address":
        if (!value.trim()) error = "주소를 입력해주세요.";
        break;
      default:
        break;
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [key]: error,
    }));
  };

  const updateButton = (key: string, value: string) => {
    setSignupData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setSignupData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleGender = (value: string) => {
    setValidationErrors((prevData) => ({
      ...prevData,
      gender: "",
    }));
    updateButton("gender", value);
  };

  const requiredKeys: SignupKeys[] = [
    "serviceAgree",
    "userInfoAgree",
    "ageAgree",
    "isEvent",
  ];

  const handleAllCheck = () => {
    const newValue = !signupData.allCheck;
    const updatedSignupData: SignupData = { ...signupData };

    requiredKeys.forEach((key) => {
      updatedSignupData[key] = newValue;
    });

    updatedSignupData.allCheck = newValue;
    setSignupData(updatedSignupData);
  };

  const handleIndividualCheck = (key: SignupKeys) => {
    const newValue = !signupData[key];
    const updatedSignupData: SignupData = {
      ...signupData,
      [key]: newValue,
    };

    updatedSignupData.allCheck = requiredKeys.every(
      (requiredKey) => updatedSignupData[requiredKey]
    );

    setSignupData(updatedSignupData);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target as { id: PersonalInfoKeys; value: string };
    validateField(id, value);

    if (value === "") {
      return;
    }
    if (id === "loginId") {
      GetAccountCheck({ loginId: value })
        .then(({ data }) => {
          if (data.data.isDuplicated) {
            validateField("loginId", "BE0014");
          }
        })
        .catch(console.error);
    }
  };

  return {
    signupData,
    validationErrors,
    handleAllCheck,
    handleIndividualCheck,
    handleInputChange,

    handleBlur,
    handleGender,
    validateField,
  };
}
