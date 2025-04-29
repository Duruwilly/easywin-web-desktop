import NewsImg1 from "@/assets/images/news-img1.png";

interface NewsProps {
  tag?: string;
}

const NewsList = ({ tag }: NewsProps) => {
  return (
    <div className="bg-[#1D2428] rounded-xl relative">
      <img
        src={NewsImg1}
        alt="news image"
        className="hfull max-h[200px] w-full object-cover rounded-tr-xl rounded-tl-xl"
      />
      <div className="!p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-white text-base font-normal leading-[130%]">
            Bankroll Management: The Key to Long-Term Gambling Success
          </p>
          <p className="text-[#9CA2AA] text-xs font-normal leading-[130%]">
            The stakes are high, and the thrill is real! Whether you're a poker
            pro or a roulette rookie, [Casino Name] brings you the hottest games
            with the biggest jackpots...
          </p>
        </div>
        <p className="text-[#9CA2AA] text-xs">2024.01.17 17:36</p>
      </div>
      {tag && (
        <div className="absolute top-0 right-0 bg-[#EC7325] !py-[2px] !px-3 rounded-bl-lg rounded-tr-lg flex items-center gap-1 text-xs font-medium text-white">
          {tag}
        </div>
      )}
    </div>
  );
};

export default NewsList;
