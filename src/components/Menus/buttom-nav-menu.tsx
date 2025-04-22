import { useEffect, useState } from "react";
import { APP_ROUTES } from "../../constants/app-routes";
import { Link, useLocation } from "react-router-dom";

const ButtomNavMenu = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(APP_ROUTES.HOME);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Football", path: "/live" },
    { title: "Basketball", path: "/casino" },
    { title: "Tennis", path: "/virtuals" },
    { title: "Table Tennis", path: "/scratch-and-win" },
    { title: "Volleyball", path: "/lotto" },
    { title: "Badminton", path: "/news" },
    { title: "Live Score", path: "/promotions" },
  ];

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-gradient-to-r from-[#8dcb5c] to-[#459368] flex flex-col items-center relative w-full">
      <div className="width-container flex flex-col gap-[48px] !py5">
        <div className="w-full relative">
          <div className="overflow-x-auto w-full">
            <div className="flex gap-[48px] items-center whitespace-nowrap">
              {menus.map((m, idx) => (
                <Link to={m.path} key={idx} className="flex-shrink-0">
                  <p
                    className={`${
                      selected === m.path
                        ? "border-b-3 border-b-white"
                        : "border-none"
                    } text-[16px] font-medium text-white !py-4`}
                  >
                    {m.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ButtomNavMenu;
