import TopGames1 from "@/assets/images/top-games-img1.png";
import TopGames2 from "@/assets/images/top-games-img2.png";
import TopGames3 from "@/assets/images/top-games-img3.png";
import TopGames4 from "@/assets/images/top-games-img4.png";
import TopGames5 from "@/assets/images/top-games-img5.png";
import TopGames6 from "@/assets/images/top-games-img5.png";
import Button from "@/components/Button/button";
import IPeople from "@/assets/images/people.png";

const TopGames = () => {
  return (
    <div className="w-full !pt-3.5 !pb-6 relative">
      <div className="flex items-center gap-2 !pl-4">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00FF59] to-[#FFD338]" />
        <span className="text-2xl font-medium text-white">Top Games</span>
      </div>

      <div
        // ref={scrollContainerRef}
        // onScroll={handleScroll}
        className="overflow-x-auto w-full !mt-3"
      >
        <div className="flex items-center whitespace-nowrap">
          <TopGamesList image={TopGames1} />
          <TopGamesList image={TopGames2} />
          <TopGamesList image={TopGames3} />
          <TopGamesList image={TopGames4} />
          <TopGamesList image={TopGames5} />
          <TopGamesList image={TopGames6} />
          <TopGamesList image={TopGames5} />
          <TopGamesList image={TopGames2} />
        </div>
      </div>
    </div>
  );
};

export default TopGames;

const TopGamesList = ({ image }: { image: string }) => {
  return (
    <div className="bg-[#141B1F] !pb-3 w-ful w[172px] rounded-lg relative !ml-4 shrink-0">
      <img src={image} alt="top games" className="rounded-lg w-full max-w-[172px]" />
      <div className="!pt-3 !px-2">
        <Button
          text="Play Now"
          variant="transparent"
          className="!py-3 w-full border border-[#303F49] font-bold !text-[#1ACC73]"
        />
      </div>
      <div className="absolute top-0 right-0 bg-[#e1e1e133] !py-[2px] !px-1.5 rounded-bl-lg flex items-center gap-1">
        <img src={IPeople} alt="people" className="w-[12px] h-[12px]" />
        <p className="text-white text-[10px]">863</p>
      </div>
    </div>
  );
};
