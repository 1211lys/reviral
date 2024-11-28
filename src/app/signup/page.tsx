import React from "react";
import Index from "@/components/signup/index";

export default async function page() {
  return (
    <div className=" p-4 w-screen h-screen fixed top-0 left-0 bg-white overflow-scroll ">
      <Index />
    </div>
  );
}
