import Button from "../../components/Button/button";
import PrizeCoin from "../../assets/images/prize-coin.png";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineRefresh } from "react-icons/md";
import Banner from "../../assets/images/BANER.png";

const ProfilePage = () => {
  return (
    <div className="flex flex-col w-[70%]">
      <div className="bg-[#141B1F] rounded-xl flex flex-col gap-3 overflow-y-scroll h-screen">
        <div className="bg-[#1D2428] !py-10 !px-15">
          <div className="flex items-center gap-1">
            <p className="text-base text-white font-medium">*****27017</p>
            <img src={PrizeCoin} alt="" />
            <IoIosArrowForward size={16} color="white" />
          </div>
          <p className="text-[#e1ffe199] text-xs">Welcome EasyWin!</p>
        </div>

        <div className="bg-[#1D2428] !py-6 !px-15 flex items-center gap-6">
          <div className="flex flex-col gap-4 flex-[1] w[304px]">
            <div className="flex flex-col gap-1">
              <p className="text-white text-xs">Tatal Balance(NGN)</p>
              <p className="text-white text-xl font-medium">2,378,425.68</p>
            </div>
            <Button text="Deposit" className="!py-3 !px-2 w-[150px]" />
          </div>
          <div className="flex flex-col gap-4 flex-[1] w[304px]">
            <div className="flex flex-col gap-1">
              <p className="text-white text-xs">Bonus Balance(NGN)</p>
              <p className="text-white text-xl font-medium">2,378,425.68</p>
            </div>
            <div>
              <Button
                text="Withdraw"
                className="!py-3 !px-2 w-[150px] border border-white"
                variant="transparent"
              />
              <div className="flex items-center gap-1 !mt-2">
                <p className="text-xs text-[#e1ffe199]">Withdraw able(NGN)</p>
                <p className="text-white text-[18px] font-medium">
                  2,378,425.68
                </p>
                <MdOutlineRefresh color="#e1ffe199" size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1D2428] !py-3 !px-6 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.56878 6.52368L2.71663 9.72016C1.36462 12.0535 3.04826 14.9749 5.74499 14.9749H10.2553C12.952 14.9749 14.6357 12.0535 13.2837 9.72016L11.4315 6.52368H10.2758L12.4184 10.2215C13.3841 11.8882 12.1816 13.9749 10.2553 13.9749H5.74499C3.81875 13.9749 2.61615 11.8882 3.58188 10.2215L5.72452 6.52368H4.56878Z"
                fill="white"
              />
              <path
                d="M9.25632 1.58092L8.85411 1.78203C8.27159 2.07329 7.6041 2.14656 6.97227 1.9886C5.99631 1.74461 5.12211 2.64844 5.39848 3.61573L5.64314 4.47206L6.60467 4.19734L6.36 3.34101C6.29507 3.11376 6.50045 2.90143 6.72973 2.95875C7.59315 3.1746 8.50529 3.07447 9.30132 2.67646L9.70354 2.47535C9.719 2.46762 9.72809 2.46778 9.73371 2.46846C9.74152 2.46942 9.75205 2.47309 9.7625 2.48125C9.77295 2.4894 9.77906 2.49873 9.78188 2.50608C9.78391 2.51137 9.78627 2.52014 9.78252 2.53702L9.40714 4.22624L10.3833 4.44317L10.7587 2.75395C10.9515 1.88636 10.0513 1.18346 9.25632 1.58092Z"
                fill="white"
              />
              <path
                d="M3.36182 5.21032C3.36182 4.44362 3.98335 3.82208 4.75005 3.82208H11.2638C12.0305 3.82208 12.652 4.44362 12.652 5.21032C12.652 5.97702 12.0305 6.59856 11.2638 6.59856H4.75005C3.98335 6.59856 3.36182 5.97702 3.36182 5.21032ZM4.75005 4.82208C4.53564 4.82208 4.36182 4.9959 4.36182 5.21032C4.36182 5.42474 4.53564 5.59856 4.75005 5.59856H11.2638C11.4782 5.59856 11.652 5.42474 11.652 5.21032C11.652 4.9959 11.4782 4.82208 11.2638 4.82208H4.75005Z"
                fill="white"
              />
              <path
                d="M9.19494 10.2492V10.0583C9.40635 10.0583 9.57832 9.88635 9.57832 9.67494C9.57832 9.46353 9.40635 9.29156 9.19494 9.29156V8.96813C9.19494 8.75672 9.02297 8.58475 8.81156 8.58475C8.60015 8.58475 8.42818 8.75672 8.42818 8.96813V10.0993L7.59673 8.71097C7.48787 8.52953 7.25279 8.47116 7.07136 8.57844C7.03823 8.59895 7.00983 8.6242 6.98458 8.65102C6.88519 8.72044 6.81893 8.83561 6.81893 8.96656V9.28998C6.60752 9.28998 6.43555 9.46195 6.43555 9.67336C6.43555 9.88478 6.60752 10.0567 6.81893 10.0567V10.2476C6.60752 10.2476 6.43555 10.4196 6.43555 10.631C6.43555 10.8424 6.60752 11.0144 6.81893 11.0144V11.4577C6.81893 11.6692 6.9909 11.8411 7.20231 11.8411C7.41372 11.8411 7.58569 11.6692 7.58569 11.4577V10.183L8.44711 11.6218C8.47078 11.6613 8.50075 11.6928 8.53388 11.7196C8.6033 11.7938 8.7027 11.8395 8.81156 11.8395C9.02297 11.8395 9.19494 11.6676 9.19494 11.4562V11.0128C9.40635 11.0128 9.57832 10.8409 9.57832 10.6294C9.57832 10.418 9.40635 10.2461 9.19494 10.2461V10.2492Z"
                fill="white"
              />
            </svg>

            <p className="text-white text-[14px]">Cashback(NGN):</p>
          </div>
          <p className="text-white text-base font-medium">2,378,425.68</p>
        </div>

        <img src={Banner} alt="banner" />
      </div>
    </div>
  );
};

export default ProfilePage;
