"use client";

import Modal from "@/components/common/Modal";
import ToastMessage from "@/components/common/ToastMessage";
import useAuth from "@/hooks/useAuth";
import { useModal } from "@/hooks/useModal";

import { PostCampaignEnrollData } from "@/service/list";
import { PostCampaignEnrollRequest } from "@/types/list";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-toastify";

interface Props {
  campaignUrl: string;
  userId: string | null;
  enrollData: PostCampaignEnrollRequest;
  campaignId: number;
}

export default function DetailButtons({
  campaignUrl,
  userId,
  enrollData,
  campaignId,
}: Props) {
  const router = useRouter();
  const { accessToken, refreshToken } = useAuth();
  const { isOpen, openModal, closeModal, message, setMessage } = useModal();
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(campaignUrl)
      .then(() => {
        toast.success("링크가 복사되었습니다!");
      })
      .catch(() => {
        toast.error("링크 복사에 실패했습니다.");
      });
  };

  const handleCampaignEnroll = () => {
    const campaignOptionId = enrollData.campaignOptionId;
    const campaignSubOptionId = enrollData.campaignSubOptionId;

    if (!accessToken && !refreshToken) {
      router.push("/login");
      return;
    }

    PostCampaignEnrollData(
      {
        userId: Number(userId),
        campaignId,
        campaignOptionId,
        campaignSubOptionId,
      },
      accessToken,
      refreshToken
    )
      .then(({ data }) => {
        if (data.data.isSave) {
          setMessage("참여 신청이 완료되었습니다.");
          openModal(() => {
            router.push("/campaign");
          });
        }
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        openModal();
      });
  };

  return (
    <div className="flex flex-col  w-full">
      <ToastMessage />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white font-semibold border border-blue-500 w-full p-4 flex justify-center items-center gap-4 rounded-lg"
          onClick={handleCampaignEnroll}
        >
          <p className="font-semibold text-xl min-w-[80px]">참여 신청</p>
          <Image
            width={24}
            height={24}
            src="/images/application.png"
            alt="arrowImg"
          />
        </button>

        <button
          onClick={handleCopyLink}
          className="border border-blue-500 font-semibold w-full p-4 flex justify-center items-center gap-4 rounded-lg"
        >
          <Image width={24} height={24} src="/images/copy.png" alt="copyImg" />
          <p className="font-semibold text-xl min-w-[80px]">링크 복사</p>
        </button>
      </div>
      <Modal message={message} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}
