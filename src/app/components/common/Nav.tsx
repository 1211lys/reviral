import React from "react";
import NavMenuList from "../NavMenuList";
import MainMenuList from "../MainMenuList";

export default function Nav() {
  return (
    <div>
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <NavMenuList />
      </div>
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <div className="flex items-start w-full max-w-[1440px]">
          <MainMenuList />
        </div>
      </div>
    </div>
  );
}
