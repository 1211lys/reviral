"use client";

import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export default function Modal({ isOpen, openModal, closeModal }: Props) {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-xl">모달 내용</h1>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
