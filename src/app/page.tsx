import MainBanner from "@/components/MainBanner";
import MainBestCampaign from "@/components/MainBestCampaign";
import MainCampaign from "@/components/MainCampaign";
import MainTotalList from "@/components/MainTotalList";

export default function Home() {
  return (
    <div>
      <div>
        <MainBanner />
      </div>
      <div>
        <MainCampaign />
      </div>
      <div>
        <MainBestCampaign />
      </div>
      <div>
        <MainTotalList />
      </div>
    </div>
  );
}
