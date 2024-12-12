import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastMessage() {
  return (
    <ToastContainer position="bottom-center" autoClose={2000} closeOnClick />
  );
}
