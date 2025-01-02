import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CampaignItems from "@/components/campaign/CampaignItems";

export default async function CampaignPage({
  params,
}: {
  params: { userId: string };
}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  const userId = params.userId;

  // 토큰 또는 userId가 없으면 로그인 페이지로 리다이렉트
  if (!accessToken || !refreshToken || !userId) {
    redirect("/login");
  }

  return (
    <div className="bg-bgBlue flex justify-center w-full">
      <CampaignItems />
    </div>
  );
}
