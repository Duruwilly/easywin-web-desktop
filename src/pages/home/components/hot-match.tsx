import { useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "@/components/Button/button";
import { IoIosArrowForward } from "react-icons/io";
import ArsenalImg from "@/assets/images/Arsenal.png";
import FullhamImg from "@/assets/images/fulham-fc.png";

const HotMatch = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 200;

      current.scrollTo({
        left:
          direction === "left"
            ? current.scrollLeft - scrollAmount
            : current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#141B1F] w-full rounded-b-xl !pt-3.5 !pb-6 relative">
      {/* left arrow */}
      {showLeftArrow && (
        <button
          className="absolute left-0 z-10 top-[50%] bgwhite rounded-full h-[36px] w-[36px] flex items-center justify-center bg-[#e1e1e133]"
          onClick={() => scroll("left")}
        >
          <MdArrowBackIosNew className="text-white" size={20} />
        </button>
      )}
      <div className="flex items-center gap-2 !pl-4">
        🔥
        <span className="text-2xl font-medium text-white">HOT Match</span>
      </div>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="overflow-x-auto w-full !mt-3"
      >
        <div className="flex gap8 items-center whitespace-nowrap px6">
          <HotMatchList />
          <HotMatchList />
          <HotMatchList />
          <HotMatchList />
          <HotMatchList />
          <HotMatchList />
        </div>
      </div>

      {/* right Arrow */}
      {showRightArrow && (
        <button
          className="absolute right-0 z-10 top-[50%] bgwhite rounded-full h-[36px] w-[36px] flex items-center justify-center bg-[#e1e1e133]"
          onClick={() => scroll("right")}
        >
          <MdArrowForwardIos className="text-white" size={20} />
        </button>
      )}
    </div>
  );
};

export default HotMatch;

const HotMatchList = () => {
  return (
    <div className="border border-[#e0def733] rounded-xl !ml-4">
      <div className="bg-[#e1e1e11a] !py-3 !px-4 flex items-center gap-1">
        <p className="text-white text-xs font-normal">Premier League</p>
        <Button
          text="Best Odds"
          variant="secondary"
          className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] rounded-full !py-[2px] !px-[5px] w-fit font-semibold text-[10px]"
        />
      </div>

      <div className="!px-4">
        <div className="border-b border-b-[#e0def733] !py-4 w-ful w-[340px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 items-center">
              <img
                src={ArsenalImg}
                alt="club logo"
                className="w-[28px] h-[28px]"
              />
              <p className="text-white text-xs">Arsenal FC</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-[#009955] !px-1 rounded-[4px] text-white text-xs font-medium flex items-center justify-center">
                Live
              </div>
              <p className="text-xs text-white">H1 40’</p>
              <p className="text-[#009955] font-medium text-base">2 : 0</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <img
                src={FullhamImg}
                alt="club logo"
                className="w-[28px] h-[28px]"
              />
              <p className="text-white text-xs">fullhan FC</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="border border-[#009955] !py-3 !px-2 rounded-xl flex items-center justify-between bg-[#00995533] w-[100px]">
              <p className="text-[#0CFD57] text-[14px]">1</p>
              <p className="text-[#0CFD57] text-base font-medium">1.51</p>
            </div>
            <div className="border border-[#009955] !py-3 !px-2 rounded-xl flex items-center justify-between bg-[#00995533] w-[100px]">
              <p className="text-[#0CFD57] text-[14px]">X</p>
              <p className="text-[#0CFD57] text-base font-medium">1.51</p>
            </div>
            <div className="border border-[#009955] !py-3 !px-2 rounded-xl flex items-center justify-between bg-[#00995533] w-[100px]">
              <p className="text-[#0CFD57] text-[14px]">2</p>
              <p className="text-[#0CFD57] text-base font-medium">1.51</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-end items-center ml-auto !px-4 !py-2">
        <p className="text-white text-[14px] font-normal">+65</p>
        <IoIosArrowForward color="#17BB50" size={20} />
      </div>
    </div>
  );
};
