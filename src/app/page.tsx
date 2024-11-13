import MainMenuList from "./components/MainMenuList";
import NavMenuList from "./components/NavMenuList";

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:justify-center sm:items-center">
      <div>
        <NavMenuList />
      </div>
      <div className="flex items-start w-full max-w-[1440px]">
        <MainMenuList />
      </div>
    </div>
  );
}
