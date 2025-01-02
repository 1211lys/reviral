"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";
import MainMenuList from "../MainMenuList";
import NavMenuList from "../NavMenuList";

export default function Nav() {
  const { isLogin, initializeAuth, logout, userId } = useAuthStore();
  const router = useRouter();
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  const handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
    <div className="w-full border-b-2 border-gray-200">
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <NavMenuList isLogin={isLogin} logout={handleLogout} userId={userId} />
      </div>
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <div className="flex items-start w-full max-w-[1440px]">
          <MainMenuList />
        </div>
      </div>
    </div>
  );
}
