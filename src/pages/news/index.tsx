import { useState } from "react";
import Tabs from "../../components/Tabs/tabs";
import NewsList from "./components/news-list";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const NewsPage = () => {
  const [tab, setTab] = useState("hot news");

  const tabArr: Array<{ text: string }> = [
    { text: "hot news" },
    {
      text: "previews & prediction",
    },
    { text: "others" },
  ];

  return (
    <div className="width-container !mt-4 !mb-14">
      <div className="bg-[#141B1F] !p-4 rounded-xl flex flex-col gap-3">
        <Tabs
          tabsArr={tabArr}
          selTab={tab}
          setSelTab={setTab}
          handleTab={(t) => setTab(t)}
          className="gap-10 justify-start"
        />
        <div className="grid grid-cols-3 gap-[32px]">
          <NewsList />
          <NewsList tag="Recommend" />
          <NewsList tag="Hot" />
          <NewsList />
        </div>

        <Link to="/" className="flex items-center rounded-[6px]">
          <p className="text-[14px] text-[#009955] font-medium">View More</p>
          <HiArrowNarrowRight size={16} color="#009955" />
        </Link>
      </div>
    </div>
  );
};

export default NewsPage;
