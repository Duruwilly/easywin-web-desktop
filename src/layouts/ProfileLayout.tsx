import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SuuportIcon from "../assets/images/support.png";
import ArrowUp from "../assets/images/top-arrow.png";
import BarCode from "../assets/images/bar-code.png";
import ProfileSidebar from "../components/Sidebar/profile-sidebar";

const ProfileLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="relative width-container !mt-8 flex gap-5">
        <ProfileSidebar />
        <Outlet />
        <aside className="absolut right-0 bottom-[0] flex flex-col gap-5 fixed z-20">
          <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#2e2f30] !ml-auto">
            <img src={SuuportIcon} alt="support icon" className="w-[28px]" />
          </div>
          <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#2e2f30] !ml-auto">
            <img src={ArrowUp} alt="top arrow" className="w-[28px]" />
          </div>
          <img src={BarCode} alt="bar code" className="w-[148px] h-[170px]" />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
