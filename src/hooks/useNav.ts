import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export function useNav(menuList: { key: number; to: string | null }[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeKey, setActiveKey] = useState<number | null>(null);

  // 버튼 참조 배열 타입 정의
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentPath =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    // 메뉴 항목이 pathname과 정확히 일치하는지 비교
    const activeItem = menuList.find((item) => currentPath === item.to);

    if (activeItem) {
      setActiveKey(activeItem.key);
    } else if (pathname === "/") {
      setActiveKey(0); // 홈 경로에선 첫 번째 메뉴 활성화
    } else {
      setActiveKey(null); // 경로에 맞는 메뉴가 없다면 초기화
    }
  }, [pathname, searchParams, menuList]);

  const handleClick = (key: number, to: string) => {
    setActiveKey(key);
    router.push(to);

    const button = buttonRefs.current[key];
    if (button) {
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return { activeKey, handleClick, buttonRefs };
}
