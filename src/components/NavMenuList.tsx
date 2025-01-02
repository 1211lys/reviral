"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import MobileMenuButton from "./MobileMenuButton";
interface Props {
  isLogin: boolean;
  logout: () => void;
  userId: string | null;
}

export default function NavMenuList({ isLogin, logout, userId }: Props) {
  const router = useRouter();

  console.log("네브로그인", isLogin);

  const getNavList = () => [
    { key: 1, title: "포인트", src: "/images/point.png", to: "/point" },
    {
      key: 2,
      title: "My 캠페인",
      src: "/images/campaign.png",
      to: userId ? `/campaign/${userId}` : "/login",
    },
    !isLogin
      ? { key: 3, title: "로그인", src: "/images/login.png", to: "/login" }
      : { key: 4, title: "로그아웃", src: "/images/login.png", to: "logout" },
  ];

  return (
    <div className="w-full flex justify-between gap-4 p-4 sm:w-screen sm:max-w-[1440px]">
      {/* 로고 */}
      <button className="flex gap-4" onClick={() => router.push("/")}>
        <div className="w-[42px]">
          <Image src="/images/logo.png" width={42} height={42} alt={"logo"} />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg text-blue-500 ">리바이럴</h1>
          <h2 className="text-sm">세상의 모든 리뷰</h2>
        </div>
      </button>
      <MobileMenuButton getNavList={getNavList} />

      <div className="hidden sm:flex sm:gap-8">
        {getNavList().map((item) => (
          <button
            key={item.key}
            className={`group`}
            onClick={item.key === 4 ? logout : () => router.push(item.to)}
          >
            <div className="flex items-center gap-2">
              <Image
                className={`transition-transform duration-700 ease-in-out transform group-hover:rotate-360`}
                src={`${item.src}`}
                width={24}
                height={24}
                alt={item.title}
              />
              <div className={`font-semibold text-sm hover:text-blue-500`}>
                {item.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
