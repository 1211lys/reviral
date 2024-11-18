import MainBanner from "./components/MainBanner";
import MainBestCampaign from "./components/MainBestCampaign";
import MainCampaign from "./components/MainCampaign";
import MainTotalList from "./components/MainTotalList";

const LIST = [
  {
    key: 0,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "N",
  },
  {
    key: 1,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "N",
  },
  {
    key: 2,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "C",
  },
  {
    key: 3,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "N",
  },
  {
    key: 4,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
];

const LIST2 = [
  {
    key: 0,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "N",
  },
  {
    key: 1,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "N",
  },
  {
    key: 2,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "C",
  },
  {
    key: 3,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "N",
  },
  {
    key: 4,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },

  {
    key: 5,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
  {
    key: 6,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
  {
    key: 7,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
  {
    key: 8,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
  {
    key: 9,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
  {
    key: 10,
    src: "/images/test/t2.png",
    title: "칠초 무릎담요 극세사 캠핑 비행기",
    itemsPrice: 8900,
    point: 500,
    maxCount: 30,
    userCount: 0,
    date: "3일 남음",
    company: "E",
  },
];

export default function Home() {
  return (
    <div>
      <div>
        <MainBanner />
      </div>
      <div>
        <MainCampaign Data={LIST} />
      </div>
      <div>
        <MainBestCampaign />
      </div>
      <div>
        <MainTotalList Data={LIST2} />
      </div>
    </div>
  );
}
