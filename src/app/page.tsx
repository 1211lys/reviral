import MainBanner from "./components/MainBanner";
import MainBestCampaign from "./components/MainBestCampaign";
import MainCampaign from "./components/MainCampaign";
import MainMenuList from "./components/MainMenuList";

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-col sm:justify-center sm:items-center">
        <div className="flex items-start w-full max-w-[1440px]">
          <MainMenuList />
        </div>
      </div>
      <div>
        <MainBanner />
      </div>
      <div>
        <MainCampaign />
      </div>
      <div>
        <MainBestCampaign />
      </div>
    </div>
  );
}
