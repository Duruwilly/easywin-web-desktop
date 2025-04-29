import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "@/components/Button/button";
import { IPromotions } from "@/models/Promotions";

const PromotionList = ({ item }: { item: IPromotions }) => {
  return (
    <div className="relative bg-white rounded-xl">
      <img
        src={item?.image ?? ""}
        alt="promotion"
        className="hfull max-h[200px] w-full object-cover rounded-tr-xl rounded-tl-xl"
      />
      <div className="!py-3 !px-4 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-[#202046] text-base leading-[130%]">
            {item?.title}
          </p>
          <p className="text-[#9CA2AA] text-xs leading-[130%]">
            {item?.description}
          </p>
        </div>
        <Button
          variant="transparent"
          className="border border-[#009955] !text-[#009955] text-xs !py-1 !px-3"
          text="View More"
          postIcon={<HiArrowNarrowRight size={16} color="#009955" />}
        />
      </div>
    </div>
  );
};

export default PromotionList;
