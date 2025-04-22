import { useState } from "react";
import Logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { APP_ROUTES } from "../constants/app-routes";
import InputPhone from "../components/Input/InputPhone";
import Button from "../components/Button/button";
import InputPassword from "../components/Input/InputPassword";
import NavMenu from "../components/Menus/nav-menu";
import ButtomNavMenu from "../components/Menus/buttom-nav-menu";
import { FiEye } from "react-icons/fi";
import { GrRefresh } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import Modal from "../components/Modal/Modal";
import { useDisclosure } from "../hooks/useDisclosure";
import tBall from "../assets/images/ball.png";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Otp from "../components/Auth/Otp";
import { IoArrowBackSharp } from "react-icons/io5";
import OtherInfoRegistration from "../components/Auth/OtherInfoRegistration";

const Navbar = () => {
  const [countryCode, setCountryCode] = useState<string>("+234");
  const [selTab, setSelTab] = useState("register");
  const tab = ["login", "register"];
  const isAuthenticated = true;
  const location = useLocation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isOtpOpen,
    onClose: onOtpClose,
    onOpen: onOtpOpen,
  } = useDisclosure();
  const {
    isOpen: isOtherInfo,
    onClose: onOtherInfoClose,
    onOpen: onOtherInfoOpen,
  } = useDisclosure();

  return (
    <>
      <header className="sticky top-0 right-0 left-0 z-50">
        <nav className="bg-gradient-to-r from-[#76C728] to-[#00693A] flex flex-col items-center relative">
          <div className="width-container h-[172px] flex flex-col justify-between !pt-5">
            <div>
              <div className="flex items-center justify-between">
                <Link to={APP_ROUTES.HOME}>
                  <img
                    src={Logo}
                    className="w-[200px] cursor-pointer object-cover"
                  />
                </Link>

                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <InputPhone
                      setSelectedCode={setCountryCode}
                      selectedCode={countryCode}
                      placeholder="Mobile Number"
                      className="border-none outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-[#f7f7fd33]"
                      padding="8px"
                    />
                    <div className="w-full">
                      <div className="flex items-center w-full">
                        <InputPassword
                          name="password"
                          className="border-none outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-[#f7f7fd33] rounded-none rounded-tl-sm rounded-bl-sm"
                          padding="8px"
                          placeholder="Password"
                        />
                        <Button
                          text="Login"
                          variant="secondary"
                          className="text-xs !py-2 rounded-none rounded-tr-sm rounded-br-sm !px-2 !text-[#ffffff99] bg-[#023e2366]"
                          bg="#023e2366"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={onOpen}
                      text="Register"
                      variant="transparent"
                      withBorder
                      className="rounded-sm !py-2 text-xs !px-2 font-medium"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="border-r border-r-[#4D9B5D] !pr-4">
                      <div className="bg-[#f7f7fd33] !px-2 rounded-[4px] flex items-center gap-1.5">
                        <p className="text-white text-base">NGN 100,000.00</p>
                        <FiEye size={16} color="white" />
                        <GrRefresh size={16} color="white" />
                      </div>
                    </div>
                    <div className="border-r border-r-[#4D9B5D] !pr-4">
                      <p className="text-white text-base">Deposit</p>
                    </div>
                    <div className="border-r border-r-[#4D9B5D] !pr-4">
                      <p className="text-white text-base">Bet History</p>
                    </div>
                    <Link to={APP_ROUTES.PROFILE}>
                      <BsPersonCircle size={24} color="white" />
                    </Link>
                  </div>
                )}
              </div>

              {isAuthenticated && (
                <div className="flex items-center gap-4 justify-end !mr-20">
                  <div className="flex items-center gap-1">
                    <input
                      id="rememberme"
                      type="checkbox"
                      className="appearance-none h-4 w-4 border border-white rounded bg-transparent checked:bg-transparent relative peer"
                    />
                    <div className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-white h-4 w-4"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <label htmlFor="rememberme">
                      <p className="text-[#ffffff99] text-xs">
                        Keep me signed in
                      </p>
                    </label>
                  </div>

                  <Link to="/">
                    <p className="text-[#ffffff99] text-xs">Forgot Password?</p>
                  </Link>
                </div>
              )}
            </div>
            <NavMenu />
          </div>
        </nav>
        {location.pathname === APP_ROUTES.HOME && <ButtomNavMenu />}
      </header>

      {isOpen && (
        <Modal
          className="max-w-[600px] relative !rounded-lg !py-0 !pt-4 !px-0 h-full max-h-[450px]"
          onClose={onClose}
        >
          <div className="flex justifycenter items-center gap-3 bg-[#FAFAFA] w-[300px] !mx-auto !py3">
            {tab.map((t, idx) => (
              <div
                key={idx}
                onClick={() => setSelTab(t)}
                className={`${
                  t === selTab ? "border-b-4 border-b-[#009955]" : "border-b-0"
                } !py-2 cursor-pointer !mx-auto w-full`}
              >
                <p
                  className={`${
                    t === selTab
                      ? "text-[#009955] font-medium"
                      : "text-[#202046]"
                  } text-2xl capitalize text-center`}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#F8F8F8] w-full !mt-3 !pt-[32px] !pb-[90px] rounded-bl-lg rounded-br-lg">
            {selTab === "login" && <Login onCloseModal={onClose} />}

            {selTab === "register" && (
              <Register onCloseModal={onClose} onOtpOpen={onOtpOpen} />
            )}
          </div>
          <div className="absolute -left-6 top-16">
            <img src={tBall} alt="" className="w-[102px] h-[102px]" />
          </div>
          <div className="absolute right-0 bottom-0 opacity-5">
            <img src={tBall} alt="" className="w-[102px] h-[102px]" />
          </div>
        </Modal>
      )}

      {isOtpOpen && (
        <Modal className="max-w-[600px] relative !rounded-lg !py-0 !pt-4 !px-0 h-full max-h-[450px]">
          <div className="absolute top-5 left-[10px]" onClick={onOtpClose}>
            <IoArrowBackSharp size={24} color="#202046" />
          </div>
          <div className="!mx-auto">
            <p className="text-[#000000] text-2xl !py-2 text-center">
              Verify your phone number
            </p>
          </div>
          <div className="bg-[#F8F8F8] w-full !mt-3 !pt-[32px] !pb-[90px] rounded-bl-lg rounded-br-lg">
            <div className="w-full max-w-[360px] !mx-auto flex flex-col gap-[32px]">
              <p className="text-[#202046] text-sm">
                We've sent you a verification code via +23408123243412 Enter it
                below to sign up.
              </p>
              <Otp onOtherInfoOpen={onOtherInfoOpen} onClose={onOtpClose} />
            </div>
          </div>
          <div className="absolute -left-6 top-16">
            <img src={tBall} alt="" className="w-[102px] h-[102px]" />
          </div>
          <div className="absolute right-0 bottom-0 opacity-5">
            <img src={tBall} alt="" className="w-[102px] h-[102px]" />
          </div>
        </Modal>
      )}

      {isOtherInfo && (
        <Modal className="max-w-[600px] relative !rounded-lg !py-0 !pt-4 !px-0 h-full max-h-[450px]">
          <div
            className="absolute top-5 left-[10px]"
            onClick={onOtherInfoClose}
          >
            <IoArrowBackSharp size={24} color="#202046" />
          </div>
          <div className="!mx-auto">
            <p className="text-[#000000] text-2xl !py-2 text-center">
              Enter Other Information
            </p>
          </div>
          <div className="bg-[#F8F8F8] w-full !mt-3 !pt-[32px] !pb-[90px] rounded-bl-lg rounded-br-lg">
            <OtherInfoRegistration onCloseModal={onOtherInfoClose} />
          </div>
          <div className="absolute -left-6 top-16">
            <img src={tBall} alt="" className="w-[102px] h-[102px]" />
          </div>
          <div className="absolute right-0 bottom-0 opacity-5">
            <img src={tBall} alt="" className="w-[102px] h-[102px]" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;
