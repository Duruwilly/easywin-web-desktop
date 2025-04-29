import { IPromotions } from "@/models/Promotions";
import PromotionList from "./promotion-list";
import PromotionImg from "@/assets/images/promotion-img.png";

const PromotionPage = () => {
  const promotions: IPromotions[] = [
    {
      image: PromotionImg,
      description: "This is a promotions detail",
      title: "This is a promotions title",
      id: Math.random()
    },
    {
      image: PromotionImg,
      description: "This is a promotions detail",
      title: "This is a promotions title",
      id: Math.random()
    },
    {
      image: PromotionImg,
      description: "This is a promotions detail",
      title: "This is a promotions title",
      id: Math.random()
    },
    {
      image: PromotionImg,
      description: "This is a promotions detail",
      title: "This is a promotions title",
      id: Math.random()
    },
    {
      image: PromotionImg,
      description: "This is a promotions detail",
      title: "This is a promotions title",
      id: Math.random()
    },
  ];

  return (
    <div className="width-container !mt-8 !mb-14">
      <div className="grid grid-cols-2 gap-[20px]">
        {promotions.map((item, idx) => (
          <PromotionList item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PromotionPage;
