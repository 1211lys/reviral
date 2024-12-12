// src/app/list/detail/[id]/page.tsx
import { getDetailCampaignItems } from "@/service/list";
import { notFound } from "next/navigation";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("서버에서 받은 id:", id);

  try {
    // API 호출
    const response = await getDetailCampaignItems(id);
    const data = response.data;

    if (!data) {
      notFound();
    }

    return (
      <div>
        <h1>캠페인 상세 정보</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("데이터 로드 실패:", error);
    notFound(); // API 호출 실패 시 404 처리
  }
}
