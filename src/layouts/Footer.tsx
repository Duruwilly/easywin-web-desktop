import { Link } from "react-router-dom";
import { APP_ROUTES } from "../constants/app-routes";
import Logo from "../assets/images/logo.png";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import OpayLogo from "../assets/images/opay.png";
import PalmpayLogo from "../assets/images/palmpay.png";
import VisaLogo from "../assets/images/visa.png";
import PaystackLogo from "../assets/images/Paystack_logo.png";
import QuicktellerLogo from "../assets/images/quickteller.png";
import UssdLogo from "../assets/images/ussd_logo.png";

const Footer = () => {
  return (
    <div className="text-white bg-[#141B1F] !py-10 !mt-10">
      <div className="width-container flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6 w-full max-w-[460px]">
            <div className="flex flex-col gap-2">
              <Link to={APP_ROUTES.HOME}>
                <img
                  src={Logo}
                  className="w-[138.46px] cursor-pointer object-cover"
                />
              </Link>
              <p className="text-white text-[18px] font-medium">
                Your Ultimate Betting Destination in Nigeria!
              </p>
            </div>
            <p className="text-white text-[18px] leading-[150%] w-full max-w-[460px]">
              EasyWin is licensed by National Lottery Regulatory Commission
              (NLRC) under License No. 0xxxxxxx. Enjoy the best odds, fastest
              payouts, and exciting promotions on football, basketball, tennis,
              and more. Whether it's pre-match or live betting, EasyWin lets you
              bet anytime, anywhere – your ultimate betting experience starts
              here!
            </p>
          </div>
          <div className="flex items-center gap-24">
            <ul className="flex flex-col gap-6">
              <p className="text-white text-[18px] font-medium">Quick Menu</p>
              <Link to="/">
                <li className="text-[18px] text-white font-normal">About Us</li>
              </Link>
              <Link to="/">
                <li className="text-[18px] text-white font-normal">FAQ</li>
              </Link>
              <Link to="/">
                <li className="text-[18px] text-white font-normal">
                  Privacy Policy
                </li>
              </Link>
              <Link to="/">
                <li className="text-[18px] text-white font-normal">
                  Terms&Conditions
                </li>
              </Link>
            </ul>

            <div className="flex flex-col gap-6">
              <p className="text-white text-[18px] font-medium">Contact Us</p>

              <a href="" className="flex items-center gap-3">
                <p className="text-white text-[18px]">Telephone:</p>
                <p className="text-white text-[18px]">+234 xxxxxxxxxx</p>
              </a>

              <a href="" className="flex items-center gap-3">
                <p className="text-white text-[18px]">E-mail:</p>
                <p className="text-white text-[18px]">support@easywin.ng</p>
              </a>

              <a href="" className="flex items-center gap-3">
                <p className="text-white text-[18px]">WhatsApp:</p>
                <p className="text-white text-[18px]">+234 xxxxxxxxxx</p>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href=""
                  className="bg-[#e1e1e166] rounded-[4px] h-6 w-6 flex items-center justify-center"
                >
                  <FaFacebookF
                    color="#404774"
                    className="w-[10.5px] h-[20.24px]"
                  />
                </a>
                <a
                  href=""
                  className="bg-[#e1e1e166] rounded-[4px] h-6 w-6 flex items-center justify-center"
                >
                  <FaXTwitter color="#404774" className="w-[18px] h-[16px]" />
                </a>
                <a
                  href=""
                  className="bg-[#e1e1e166] rounded-[4px] h-6 w-6 flex items-center justify-center"
                >
                  <IoLogoInstagram
                    color="#404774"
                    className="w-[18px] h-[18px]"
                  />
                </a>
                <a
                  href=""
                  className="bg-[#e1e1e166] rounded-[4px] h-6 w-6 flex items-center justify-center"
                >
                  <FaTelegramPlane
                    color="#404774"
                    className="w-[20px] h-[16px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between justifycenter gap10">
          <img src={OpayLogo} alt="opay logo" className="w-[72px]" />
          <img src={PalmpayLogo} alt="opay logo" className="w-[140px]" />
          <img src={VisaLogo} alt="opay logo" className="w-[68px]" />
          <img src={PaystackLogo} alt="opay logo" className="w-[159px]" />
          <img src={QuicktellerLogo} alt="opay logo" className="w-[156px]" />
          <img src={UssdLogo} alt="opay logo" className="w-[143px]" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3 border-b border-b-[#e0def733] !pb-2">
            <div className="w-[20px] h-[20px] rounded-full flex justify-center items-center border-[1.5px] border-[#FE5455]">
              <p className="text-white text-[9px] font-medium">18+</p>
            </div>
            <p className="text-white text-base font-medium">
              To register or play at EasyWin, you must be 18 years or older.
              Remember, betting can be addictive. Always gamble responsibly.
            </p>
          </div>
          <p className="text-white text-[18px] text-center font-normal">
            Copyright © 2019-{new Date().getFullYear()} EASYWIN LOTTO LTD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
