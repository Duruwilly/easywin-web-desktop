import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "@/constants/app-routes";

const NavMenu = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [selected, setSelected] = useState(APP_ROUTES.HOME);
  //   const [showLeftArrow, setShowLeftArrow] = useState(false);
  //   const [showRightArrow, setShowRightArrow] = useState(true);

  const menus = [
    { title: "Sports", path: "/" },
    { title: "Live Betting", path: "/live" },
    { title: "Casino", path: "/casino" },
    { title: "Virtuals", path: "/virtuals" },
    { title: "Scratch&Win", path: "/scratch-and-win" },
    { title: "Lotto", path: "/lotto" },
    { title: "News", path: "/news" },
    { title: "Promotions", path: "/promotions" },
    { title: "App", path: "/app" },
  ];

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full relative">
      <div ref={scrollContainerRef} className="overflow-x-auto w-full">
        <div className="flex justify-between items-center whitespace-nowrap px6 py-2">
          {menus.map((m, idx) => (
            <Link
              to={m.path}
              key={idx}
              className="flex-shrink-0 flex items-center gap-1"
            >
              <p
                className={`${
                  selected === m.path
                    ? "text-[#009955] rounded-tr-lg rounded-tl-lg bg-white !py-3 !px-6"
                    : "text-white"
                } text-[16px] font-medium`}
              >
                {m.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
