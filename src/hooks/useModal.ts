import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>(
    null
  );

  const closeModal = () => {
    setIsOpen(false);
    if (onCloseCallback) {
      onCloseCallback(); // 콜백 실행
      setOnCloseCallback(null); // 콜백 초기화
    }
  };

  const openModal = (callback?: () => void) => {
    setIsOpen(true);
    if (callback) {
      setOnCloseCallback(() => callback); // 닫힐 때 실행될 콜백 저장
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    message,
    setMessage,
  };
}
