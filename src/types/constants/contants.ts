import { MenuItem } from "../common";

export const MAIN_MENU_LIST: MenuItem[] = [
  { key: 0, title: "홈", to: "/" },
  { key: 1, title: "오늘 오픈", to: "/open" },
  { key: 2, title: "마감 임박", to: "/imminent" },
  { key: 3, title: "당일 구매", to: "/day" },
  { key: 4, title: "시간 구매", to: "/time" },
];

export const NAV_LIST: MenuItem[] = [
  { key: 0, title: "포인트", src: "/images/point.png", to: "/point" },
  { key: 1, title: "My 캠페인", src: "/images/campaign.png", to: "/campaign" },
  { key: 2, title: "로그인", src: "/images/login.png", to: "/login" },
];
