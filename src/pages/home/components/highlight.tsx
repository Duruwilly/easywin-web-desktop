import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import GiftImg1 from "@/assets/images/gift-img.png";
import SearchInput from "@/components/Input/SearchInput";
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  BiFilterAlt,
  BiFootball,
  BiSolidDownArrow,
  BiSolidUpArrow,
} from "react-icons/bi";
import Tabs from "../../../components/Tabs/tabs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Button from "@/components/Button/button";
import TextInput from "@/components/Input/Input";
import GoldCoin from "@/assets/images/gold-coin.png";
import SilverCoin from "@/assets/images/silver-coin.png";
import BronzeCoin from "@/assets/images/bronze-coin.png";
import { LiaTimesSolid } from "react-icons/lia";

interface Ihightlight {
  id: number;
  matchTitle: string;
  clubs: string[];
  points: { point: string; id: number }[];
}

const Highlight = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [tab, setTab] = useState("Football");
  const [resultTable, setResultTable] = useState("ghana lotto");
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };
  const [betSlip, setBetSlip] = useState<Ihightlight[]>([]);

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
  const handleSearch = (val: string) => {
    console.log(val);
  };

  const bannerSlider = [
    { image: GiftImg1 },
    { image: GiftImg1 },
    { image: GiftImg1 },
  ];

  const tabsArr: Array<{ text: string; icon?: ReactNode }> = [
    { text: "Football" },
    { text: "Basketball" },
    { text: "Tennis" },
    { text: "Table Tennis" },
    { text: "Voleyball" },
    { text: "Badminton" },
    { text: "More", icon: <IoIosArrowDown size={16} /> },
    { text: "Filter", icon: <BiFilterAlt size={16} /> },
  ];

  const hightlightGames: Ihightlight[] = [
    {
      id: 0,
      matchTitle: "International · UEFA Nations Leagua",
      clubs: ["Vietnam", "Cambodia"],
      points: [
        { point: "10.29", id: 0 },
        { point: "10.29", id: 1 },
        { point: "25.29", id: 2 },
      ],
    },
    {
      id: 1,
      matchTitle: "International · UEFA Nations Leagua",
      clubs: ["Vietnam", "Cambodia"],
      points: [
        { point: "15.29", id: 3 },
        { point: "12.29", id: 4 },
        { point: "10.29", id: 5 },
      ],
    },
    {
      id: 2,
      matchTitle: "International · UEFA Nations Leagua",
      clubs: ["Vietnam", "Cambodia"],
      points: [
        { point: "10.29", id: 6 },
        { point: "10.09", id: 7 },
        { point: "10.29", id: 8 },
      ],
    },
    {
      id: 3,
      matchTitle: "International · UEFA Nations Leagua",
      clubs: ["Vietnam", "Cambodia"],
      points: [
        { point: "10.29", id: 9 },
        { point: "10.29", id: 10 },
        { point: "10.29", id: 11 },
      ],
    },
    {
      id: 4,
      matchTitle: "International · UEFA Nations Leagua",
      clubs: ["Vietnam", "Cambodia"],
      points: [
        { point: "10.29", id: 12 },
        { point: "10.29", id: 13 },
        { point: "10.29", id: 14 },
      ],
    },
  ];

  console.log(betSlip, "bet slip");

  return (
    <div className="flex gap-4">
      <div className="bg-[#141B1F] rounded-xl wfull !pt-3.5 !pb-6 relative flex-[1] min-w0 w-[758px] !px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#00FF59] to-[#FFD338]" />
            <span className="text-2xl font-medium text-white">Highlights</span>
          </div>
          <SearchInput
            className="!w-fit !h-fit !py-1 !px-2 rounded-md bg-[#f7f7fd33] border-none text-ellipsis"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          {/* tabs */}
          <Tabs
            selTab={tab}
            setSelTab={setTab}
            tabsArr={tabsArr}
            handleTab={(t) => setTab(t)}
          />

          <div className="relative flex items-center justify-start">
            {/* left arrow */}
            {showLeftArrow && (
              <button
                className="absolute left-0 z-10 bgwhite rounded-full h-[36px] w-[36px] flex items-center justify-center bg-[#e1e1e133]"
                onClick={() => scroll("left")}
              >
                <MdArrowBackIosNew className="text-white" size={20} />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="overflow-x-auto w-full"
            >
              <div className="flex gap-3 items-center whitespace-nowrap px6">
                <div className="border border-[#009955] !py-4 !px-3 rounded-lg bg-[#00995533] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>

                <div className="border border-white !py-4 !px-3 rounded-lg bg-[#1D2428] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>

                <div className="border border-white !py-4 !px-3 rounded-lg bg-[#1D2428] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>

                <div className="border border-white !py-4 !px-3 rounded-lg bg-[#1D2428] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>

                <div className="border border-white !py-4 !px-3 rounded-lg bg-[#1D2428] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>

                <div className="border border-white !py-4 !px-3 rounded-lg bg-[#1D2428] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>

                <div className="border border-white !py-4 !px-3 rounded-lg bg-[#1D2428] w-[138px] shrink-0">
                  <p className="text-[14px] text-white">Malaysia</p>
                  <p className="text-[14px] text-white">U23 MFL Cup</p>
                </div>
              </div>
            </div>

            {showRightArrow && (
              <button
                className="absolute right-0 z-10 bgwhite rounded-full h-[36px] w-[36px] flex items-center justify-center bg-[#e1e1e133]"
                onClick={() => scroll("right")}
              >
                <MdArrowForwardIos className="text-white" size={20} />
              </button>
            )}
          </div>

          <div className="rounded-xl w-full">
            {Array.from({ length: 2 }).map((_, idx) => (
              <HighlightGames
                key={idx}
                id={idx}
                data={hightlightGames}
                setBetSlip={setBetSlip}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[226px]">
        <div className="bg-[#141B1F] rounded-xl !py-3 !px-3">
          <span className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] text-transparent bg-clip-text font-bold text-2xl italic font-Montserrat">
            Gift
          </span>

          <Swiper
            className="slider !mt-2"
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay
            pagination={{
              clickable: true,
              el: ".custom1-swiper-pagination",
            }}
            scrollbar={{ draggable: true }}
          >
            {bannerSlider.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img.image}
                  alt="product"
                  className="h-[202px] w-full rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom1-swiper-pagination flex justify-center !mt-2"></div>
        </div>

        <div className="bg-[#141B1F] rounded-xl !py-4 !px-3 flex flex-col gap-3">
          <span className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] text-transparent bg-clip-text font-bold text-2xl italic font-Montserrat">
            Betslip
          </span>
          {betSlip?.length === 0 ? (
            <>
              <div className="flex flex-col gap-2">
                <p className="text-white text-base font-medium">
                  Your betslip is empty
                </p>
                <p className="text-[#e1e1e180] text-[14px]">
                  Please make one or more selection in order to place a bet
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-white">Book</p>
                <p className="text-[#e1e1e180] text-[14px]">
                  Please insert a booking number below,
                </p>
                <TextInput
                  name="booking code"
                  className="border-none outline-none focus:ring-0 !px-4 !bg-[#f7f7fd33] rounded-lg"
                  padding="12px"
                  placeholder="Enter Booking Code"
                />
              </div>
              <Button
                text="Register"
                variant="secondary"
                className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] rounded-full !py-3 !px-6 w-full font-semibold text-base"
              />
            </>
          ) : (
            <div>
              {betSlip?.map((item, idx) => (
                <div className="bg-white !py-3 flex flex-col gap-3" key={idx}>
                  <div className="border-b border-b-[#eaecef] !pb-3">
                    <div className="flex justify-between items-center !px-2">
                      <div className="flex items-center gap-0.5">
                        <BiFootball size={15} />
                        <p className="text-xs">Home</p>
                      </div>
                      <LiaTimesSolid
                        size={13}
                        onClick={() =>
                          setBetSlip((prev) =>
                            prev.filter(
                              (bet) =>
                                !item.points.some(
                                  (i) => i.id === bet.points[0]?.id
                                )
                            )
                          )
                        }
                      />
                    </div>
                    <div className="flex items-center gap-1 !px-2">
                      <div className="bg-[#34ea6a] text-xs">Live</div>
                      <p className="text-xs text-nowrap text-ellipsis">{`${item?.clubs[0]} v ${item?.clubs[1]}`}</p>
                    </div>
                    <div className="flex items-center justify-between !px-2">
                      <p className="text-xs">1x2</p>
                      <p className="text-xs">{item?.points[0]?.point}</p>
                    </div>
                  </div>
                  {betSlip?.length - 1 === idx && (
                    <>
                      <div className="flex items-center justify-between !px-2">
                        <p className="text-xs flex-[1]">Total Stake</p>
                        <div className="text-xs flex items-center gap-0.5 flex-[1]">
                          <p className="text-xs">NGN</p>
                          <TextInput
                            name="booking code"
                            className="outline-none focus:ring-0 !px-4 border border-[#b4b4b4] rounded-none w[40px] text-black"
                            padding="0px"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between !px-2">
                        <p className="text-xs">Potential Win</p>
                        <p className="text-xs">0</p>
                      </div>
                      <div className="!px-2">
                        <Button
                          text="Place Bet"
                          variant="primary"
                          className="rounded-lg !py-2 !px-6 w-full font-medium text-sm"
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-[#141B1F] rounded-xl !pt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between !px-3">
            <span className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] text-transparent bg-clip-text font-bold text-2xl italic font-Montserrat">
              Copy Bet
            </span>
            <div className="flex items-center gap-[2px]">
              <p className="text-xs text-white font-medium">More</p>
              <IoIosArrowForward size={16} color="white" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-[#e1e1e10a] w-full !pt-2 !pb-4 !px-3 flex flex-col gap-2.5">
              <div className="flex justify-between border-b border-b-[#e0def733] !pb-4">
                <div className="flex flex-col gap-2">
                  <p className="text-white text-[14px]">Share: 923****003</p>
                  <p className="text-white text-[14px]">
                    Type: Express 4 Folds
                  </p>
                  <p className="text-white text-[14px]">
                    Deadline: 20/02/2025 8:28 PM
                  </p>
                </div>
                <img src={GoldCoin} alt="coin" className="h-[25px] shrink-0" />
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-white text-[14px] !underline">Win Rate</p>
                  <p className="text-[#0CFD57] text-[20px] font-montserrat font-semibold">
                    0/10
                  </p>
                </div>

                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-white text-[14px] !underline">
                    Copied Times
                  </p>
                  <p className="text-[#0CFD57] text-[20px] font-montserrat font-semibold">
                    13
                  </p>
                </div>
              </div>

              <Button
                text="Copy Bet"
                variant="transparent"
                className="!py-0.5 !px-3 w-full border border-[#01FF59]"
              />
            </div>

            <div className="bg-[#e1e1e10a] w-full !pt-2 !pb-4 !px-3 flex flex-col gap-2.5">
              <div className="flex justify-between border-b border-b-[#e0def733] !pb-4">
                <div className="flex flex-col gap-2">
                  <p className="text-white text-[14px]">Share: 923****003</p>
                  <p className="text-white text-[14px]">
                    Type: Express 4 Folds
                  </p>
                  <p className="text-white text-[14px]">
                    Deadline: 20/02/2025 8:28 PM
                  </p>
                </div>
                <img
                  src={SilverCoin}
                  alt="coin"
                  className="h-[25px] shrink-0"
                />
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-white text-[14px] !underline">Win Rate</p>
                  <p className="text-[#0CFD57] text-[20px] font-montserrat font-semibold">
                    0/10
                  </p>
                </div>

                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-white text-[14px] !underline">
                    Copied Times
                  </p>
                  <p className="text-[#0CFD57] text-[20px] font-montserrat font-semibold">
                    13
                  </p>
                </div>
              </div>

              <Button
                text="Copy Bet"
                variant="transparent"
                className="!py-0.5 !px-3 w-full border border-[#01FF59]"
              />
            </div>

            <div className="bg-[#e1e1e10a] w-full !pt-2 !pb-4 !px-3 flex flex-col gap-2.5">
              <div className="flex justify-between border-b border-b-[#e0def733] !pb-4">
                <div className="flex flex-col gap-2">
                  <p className="text-white text-[14px]">Share: 923****003</p>
                  <p className="text-white text-[14px]">
                    Type: Express 4 Folds
                  </p>
                  <p className="text-white text-[14px]">
                    Deadline: 20/02/2025 8:28 PM
                  </p>
                </div>
                <img
                  src={BronzeCoin}
                  alt="coin"
                  className="h-[25px] shrink-0"
                />
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-white text-[14px] !underline">Win Rate</p>
                  <p className="text-[#0CFD57] text-[20px] font-montserrat font-semibold">
                    0/10
                  </p>
                </div>

                <div className="flex flex-col items-center gap-0.5">
                  <p className="text-white text-[14px] !underline">
                    Copied Times
                  </p>
                  <p className="text-[#0CFD57] text-[20px] font-montserrat font-semibold">
                    13
                  </p>
                </div>
              </div>

              <Button
                text="Copy Bet"
                variant="transparent"
                className="!py-0.5 !px-3 w-full border border-[#01FF59]"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#141B1F] rounded-xl !py-4 !px-3 flex flex-col gap-3">
          <span className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] text-transparent bg-clip-text font-bold text-2xl italic font-Montserrat">
            Lotto Result
          </span>

          <Tabs
            selTab={resultTable}
            setSelTab={setResultTable}
            tabsArr={[{ text: "ghana lotto" }, { text: "bonanza" }]}
            handleTab={(t) => setResultTable(t)}
          />

          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Draw Date</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
                <tr>
                  <td>18/03/2025</td>
                  <td>15 16 43 44 68</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;

const HighlightGames = ({
  data,
  id,
  setBetSlip,
}: {
  data: Ihightlight[];
  setBetSlip: Dispatch<SetStateAction<Ihightlight[]>>;
  id: number;
}) => {
  const [openId, setOpenId] = useState("");

  const toggleBet = (item: Ihightlight, pointIndex: number) => {
    setBetSlip((prev) => {
      const pointToToggle = item.points[pointIndex];

      const exists = prev.some((b) => b.points[0]?.id === pointToToggle.id);

      if (exists) {
        return prev.filter((b) => b.points[0]?.id !== pointToToggle.id);
      }

      return [...prev, { ...item, points: [pointToToggle] }];
    });
  };

  const onToggle = (id: string) => {
    if (id === openId) {
      setOpenId("");
    } else {
      setOpenId(id);
    }
  };

  return (
    <div>
      <div className="bg-[#1D2428] !px-4 !py-3 flex justify-between gap-6 items-center">
        <div
          className="flex items-center gap-3 flex[1] w-[45%] cursor-pointer"
          onClick={() => onToggle(id.toString())}
        >
          {openId === id.toString() ? (
            <BiSolidUpArrow size={16} color="white" />
          ) : (
            <BiSolidDownArrow size={16} color="white" />
          )}
          <p className="text-[14px] text-white font-normal">20/03 Thu</p>
        </div>
        <div className="w-[55%] flex justify-around">
          <p className="text-white text-base font-medium flex[1]">1</p>
          <p className="text-white text-base font-medium flex[1]">X</p>
          <p className="text-white text-base font-medium flex[1]">2</p>
        </div>
      </div>

      {openId !== id.toString() &&
        data.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#080B0C] !p-4 flex flex-col gap-3 border-b border-b-[#e0deff33]"
          >
            <div>
              <p className="text-[14px] text-white">{item?.matchTitle}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <p className="text-base text-white font-normal">
                  {item?.clubs[0]}
                </p>
                <p className="text-base text-white font-normal">
                  {item?.clubs[1]}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <Button
                  text={item?.points[0]?.point}
                  className="!py-3 !px-[62px]"
                  onClick={() => toggleBet(item, 0)}
                />
                <Button
                  text={item?.points[1]?.point}
                  className="!py-3 !px-[62px]"
                  onClick={() => toggleBet(item, 1)}
                />
                <Button
                  text={item?.points[2]?.point}
                  className="!py-3 !px-[62px]"
                  onClick={() => toggleBet(item, 2)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <p className="text-[#FFD700] text-[14px]">18:00</p>
                <Button
                  text="Stats"
                  postIcon={<IoIosArrowForward />}
                  variant="transparent"
                  className="border border-[#E0DEF7] !py-1 !px-2 rounded-lg text-xs font-medium"
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-white text-[14px]">+65</p>
                <IoIosArrowForward size={24} color="#17BB50" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
