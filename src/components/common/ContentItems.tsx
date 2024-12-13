"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { GetCampaignListResponse } from "@/types/list";
import { GetCampaignList } from "@/service/list";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/Loading";

interface Props {
  categoryProps: string | null;
  platformProps: string | null;
  statusProps: string | null;
  sizeProps: number;
}

export default function ContentItems({
  categoryProps,
  platformProps,
  statusProps,
  sizeProps,
}: Props) {
  const [data, setData] = useState<GetCampaignListResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  // 쿼리 파라미터 값 가져오기
  const category = searchParams.get("category");
  const platform = searchParams.get("platform");
  const status = searchParams.get("status");

  const [imgError, setImgError] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // 데이터를 가져오는 함수
  const fetchCampaignList = async (reset: boolean = false) => {
    if (loading || (!hasMore && !reset)) return;

    setLoading(true);

    try {
      const response = await GetCampaignList({
        category: categoryProps === null ? category : categoryProps,
        platform: platformProps === null ? platform : platformProps,
        status: statusProps === null ? status : statusProps,
        page: reset ? 0 : page,
        size: sizeProps,
      });

      const newData = response.data;

      setData((prevData) => {
        if (reset) {
          // 기존 데이터 초기화 후 새로운 데이터로 교체
          return newData;
        }
        return {
          ...newData,
          data: {
            ...newData.data,
            campaigns: [
              ...(prevData?.data?.campaigns || []),
              ...newData.data.campaigns,
            ],
          },
        };
      });

      setHasMore(newData.data.campaigns.length === 15);
      setPage((prevPage) => (reset ? 1 : prevPage + 1));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 쿼리스트링이 변경될 때 데이터 초기화 및 새로 로드
  useEffect(() => {
    setData(null); // 기존 데이터 삭제
    setPage(0); // 페이지 초기화
    setHasMore(true); // hasMore 초기화
    fetchCampaignList(true); // 새 데이터 로드
  }, [category, platform, status]);

  // Intersection Observer 설정
  useEffect(() => {
    if (loadMoreRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            fetchCampaignList();
          }
        },
        { threshold: 1.0 }
      );

      observerRef.current.observe(loadMoreRef.current);

      return () => {
        if (observerRef.current && loadMoreRef.current) {
          observerRef.current.unobserve(loadMoreRef.current);
        }
      };
    }
  }, [loading, hasMore]);

  // 기본 이미지 처리
  const defaultImgUrl = "/images/logo.png";

  const handleImageError = (campaignId: number) => {
    setImgError((prevState) => ({
      ...prevState,
      [campaignId]: true,
    }));
  };

  const isValidUrl = (url: string | undefined): boolean => {
    try {
      new URL(url!);
      return true;
    } catch {
      return false;
    }
  };

  if (!data) return <Loading />;

  return (
    <div
      className={`w-full flex items-start justify-center bg-bgBLue ${
        sizeProps === 5 ? "" : "min-h-[calc(100vh-8rem)]"
      }`}
    >
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 my-10">
        {data?.data?.campaigns?.map((item) => {
          const imgUrl =
            isValidUrl(item.campaignImgUrl) && !imgError[item.campaignId]
              ? item.campaignImgUrl
              : defaultImgUrl;

          return (
            <button
              key={item.campaignId}
              className="max-w-[250px] text-left bg-white border-white shadow-lg rounded-md hover:text-black text-gray-500 hover:scale-105"
              onClick={() => router.push(`/list/detail/${item.campaignId}`)}
            >
              <div>
                <div className="relative w-[250px] h-[160px]">
                  <Image
                    src={imgUrl}
                    alt="banner"
                    layout="fill"
                    objectFit="cover"
                    onError={() => handleImageError(item.campaignId)}
                    style={{
                      borderTopRightRadius: "8px",
                      borderTopLeftRadius: "8px",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1 p-2">
                  <div className="flex items-center">
                    {item.campaignPlatform === "NAVER" ? (
                      <div className="w-[24px] h-[24px] bg-green-400 text-white flex items-center justify-center rounded-md text-normal p-2 font-bold">
                        N
                      </div>
                    ) : item.campaignPlatform === "COUPANG" ? (
                      <div className="w-[24px] h-[24px] bg-red-500 text-white flex items-center justify-center rounded-md text-normal p-2 font-bold">
                        C
                      </div>
                    ) : (
                      <div className="w-[24px] h-[24px] bg-blue-400 text-white flex items-center justify-center rounded-md text-normal p-2 font-bold">
                        E
                      </div>
                    )}
                    <div className=" ml-2 text-xl font-semibold">
                      {item.period === 0 ? (
                        <div className="text-red-500 font-bold"> 오늘 마감</div>
                      ) : (
                        `${item.period}일 남음`
                      )}
                    </div>
                  </div>
                  <h1 className="text-xl text-black font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.campaignTitle}
                  </h1>
                  <p className="text-lg">
                    {item.campaignPrice.toLocaleString()}원
                  </p>
                  <div className="text-lg">
                    캠페인 포인트 {item.campaignPoint.toLocaleString()}P
                  </div>
                  <div className="flex flex-col justify-between mb-2">
                    <p className="text-lg">
                      신청 {item.joinCount} / {item.totalCount}명
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div ref={loadMoreRef} className="h-10" />
    </div>
  );
}
