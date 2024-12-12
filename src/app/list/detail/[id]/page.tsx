import Image from "next/image";
import { getDetailCampaignItems } from "@/service/list";
import { notFound } from "next/navigation";

import SellerRequest from "@/components/list/detail/SellerRequest";
import DetailImg from "@/components/list/detail/DetailImg";
import Guidelines from "@/components/list/detail/Guidelines";
import DetailDropdown from "@/components/list/detail/DetailDropdown";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("서버에서 받은 id:", id);

  try {
    const response = await getDetailCampaignItems(Number(id));
    const data = response.data.data.campaign;
    console.log(data);

    if (!data) {
      notFound();
    }

    const getCategoryLabel = (category: string) => {
      switch (category) {
        case "DAILY":
          return "당일 구매";
        case "DEADLINE":
          return "마감 임박";
        case "TIME":
          return "시간 구매";
        default:
          return "오늘 오픈";
      }
    };

    console.log("123", data);

    return (
      <div className="w-full py-10">
        <div className="px-4 flex flex-col items-center md:flex-row md:justify-center md:items-start gap-4 md:gap-10 border-b-2 border-b-gray-300 pb-20 mb-10">
          <div className="">
            <DetailImg campaignImgUrl={data.campaignImgUrl} />
          </div>
          <div>
            <div className="flex max-w-[700px] items-center mb-6">
              <h1 className="font-semibold md:text-xl">{data.campaignTitle}</h1>
              <p className="text-sm font-normal border border-gray-400 rounded-md px-2 ml-4 min-w-[50px] w-[50px] md:min-w-[80px] h-full text-center my-0 mx-auto ">
                {getCategoryLabel(data.campaignCategory)}
              </p>
            </div>
            <div className="text-end mb-6">
              <h2 className="text-2xl font-bold text-red-600">
                {data.campaignPrice.toLocaleString()}원
              </h2>
              <p className="text-2xl font-bold text-orange-400 flex items-center justify-end gap-2">
                {data.campaignPoint.toLocaleString()}
                <Image
                  width={24}
                  height={24}
                  alt="point"
                  src="/images/point.png"
                />
              </p>
            </div>
            <SellerRequest sellerRequest={data.sellerRequest} />
            <p>
              오늘 캄페인 신청 인원 {data.joinCount} / {data.totalCount}
            </p>
            <p className="mb-6">블라인드 계정 참여 불가 / 중복 참여 불가</p>
            <DetailDropdown data={data} />
          </div>
        </div>
        <Guidelines />
      </div>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
