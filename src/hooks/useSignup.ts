import { useState } from "react";

export type SignupKeys =
  | "allCheck"
  | "serviceAgree"
  | "userInfoAgree"
  | "ageAgree"
  | "eventAgree";

export type PersonalInfoKeys =
  | "id"
  | "pw"
  | "name"
  | "gender"
  | "phoneNumber"
  | "address"
  | "naverId"
  | "coupangId";

export type SignupData = Record<SignupKeys, boolean> &
  Record<PersonalInfoKeys, string>;

export function useSignup() {
  const [signupData, setSignupData] = useState<SignupData>({
    allCheck: false,
    serviceAgree: false,
    userInfoAgree: false,
    ageAgree: false,
    eventAgree: false,
    id: "",
    pw: "",
    name: "",
    gender: "",
    phoneNumber: "",
    address: "",
    naverId: "",
    coupangId: "",
  });

  const requiredKeys: SignupKeys[] = [
    "serviceAgree",
    "userInfoAgree",
    "ageAgree",
    "eventAgree",
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

  return {
    signupData,
    handleAllCheck,
    handleIndividualCheck,
  };
}
