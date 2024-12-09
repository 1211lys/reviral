import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export function useNav(menuList: { key: number; to: string | null }[]) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeKey, setActiveKey] = useState<number | null>(null);

  // 버튼 참조 배열 타입 정의
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setActiveKey(null);
    const activeItem = menuList.find((item) => item.to === pathname);
    if (activeItem) setActiveKey(activeItem.key);
  }, [pathname, menuList]);

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
