"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  message: string;
}

export default function Modal({ isOpen, closeModal, message }: Props) {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center "
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-[340px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl mt-6">{message}</h1>
            <button
              onClick={closeModal}
              className="mt-10 px-4 py-2 bg-blue-500 text-white rounded w-full"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
