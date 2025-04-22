import PromotionList from "./promotion-list";

const PromotionPage = () => {
  return (
    <div className="width-container !mt-8 !mb-14">
      <div className="grid grid-cols-2 gap-[20px]">
        <PromotionList />
        <PromotionList />
        <PromotionList />
        <PromotionList />
        <PromotionList />
      </div>
    </div>
  );
};

export default PromotionPage;
