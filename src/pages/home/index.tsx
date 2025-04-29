import PatternBg from "@/assets/images/logo-icon2.png";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import bannerSlide1 from "@/assets/images/home-banner-slide1.png";
import InputPhone from "@/components/Input/InputPhone";
import { useState } from "react";
import Button from "@/components/Button/button";
import Announcement from "@/components/Announcement";
import HotMatch from "./components/hot-match";
import TopGames from "./components/top-games";
import Highlight from "./components/highlight";
import { IoVolumeHigh } from "react-icons/io5";

const HomePage = () => {
  const [countryCode, setCountryCode] = useState<string>("+234");
  const sideBar = [
    { text: "Today's Football" },
    { text: "Upcoming Games" },
    { text: "UEFA Nations League" },
    { text: "World Cup Qualification" },
    { text: "England Premier League" },
    { text: "Spain La Liga" },
  ];

  const bannerSlider = [
    { image: bannerSlide1 },
    { image: bannerSlide1 },
    { image: bannerSlide1 },
    { image: bannerSlide1 },
    { image: bannerSlide1 },
  ];

  return (
    <>
      <div className="bg-[#141B1F] w-full relative h[310px] z-10 pb-6">
        <div
          className="absolute left-[7%] top-[10%] opacity-[6%] -z-10 bg-cover bg-center bg-no-repeat  h-[160px] w-[160px]"
          style={{ backgroundImage: `url(${PatternBg})` }}
        />
        <div
          className="absolute bottom-[10%] h-[160px] w-[160px] right-[5%] -z-10 bg-cover bg-center bg-no-repeat opacity-[6%]"
          style={{ backgroundImage: `url(${PatternBg})` }}
        ></div>
        <div className="width-container flex justifybetween gap-5 relative">
          {/* side bar */}
          <div className="!px-4 !pt-4 !pb-3 text-white w-full max-w-[238px]">
            <h2 className="font-montserrat text-xl font-bold">Popular</h2>
            <div className="flex flex-col gap4 !mt3">
              {sideBar.map((dtx, idx) => (
                <div
                  key={idx}
                  className="!py-3 border-b border-b-[#3d424a] flex items-center justify-between"
                >
                  <span className="text-sm">{dtx.text}</span>
                  <IoIosArrowForward className="text-[#17BB50] text-base" />
                </div>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex gap-5">
              <div className="flex-[2] min-w-0">
                <Swiper
                  className="slider !pt-4"
                  modules={[Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop
                  autoplay
                  pagination={{
                    clickable: true,
                    el: ".custom-swiper-pagination",
                  }}
                >
                  {bannerSlider.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img.image}
                        alt="product"
                        className="h-[224px] w-full rounded-2xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="custom-swiper-pagination flex justify-center !mt-2"></div>
              </div>
              <div className="!pl-3 !pt-4 !pb-3 text-white w-full flex-[1] max-w-[234px]">
                <h2 className="text-white font-medium text-base">
                  Instant Registration
                </h2>
                <div className="flex items-center gap-2 !mt-1">
                  <div className="bg-[#1AB56F] h-3.5 w-1" />
                  <span className="text-[#1AB56F] text-xs font-normal">
                    Make a Deposit and Get Your Gift
                  </span>
                </div>
                <InputPhone
                  setSelectedCode={setCountryCode}
                  selectedCode={countryCode}
                  placeholder="Mobile Number"
                  className="border-none outline-none focus:ring-0 mb-0 gap-2.5 !rounded-lg !px-4 bg-[#f7f7fd33] !mt-6"
                  padding="12px"
                />
                <Button
                  text="Register"
                  variant="secondary"
                  className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] rounded-full !py-3 !px-6 !mt-4 w-full font-semibold text-base"
                />
              </div>
            </div>
            <div className="relative bg-[#f7f7fd1a] !py-2 !px-3 flex items-center justify-start !mt-3 rounded-lg">
              <button className="absolute left3 z-10">
                <IoVolumeHigh className="text-white" size={16} />
              </button>
              <Announcement />
            </div>
          </div>
        </div>
      </div>
      <div className="width-container">
        <div className="flex flex-col gap-4 !mt-10">
          <HotMatch />
          <TopGames />
          <Highlight />
        </div>
      </div>
    </>
  );
};

export default HomePage;
