import InputPhone from "../Input/InputPhone";
import InputPassword from "../Input/InputPassword";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import GiftBox from "../../assets/images/gift-box.png";
import { useState } from "react";
import { useAuthServices } from "../../services/auth";
import { RegisterOneSchema, TRegisterOne } from "../../types/validations/auth";
import { phoneNumberWoPlus } from "../../utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  onCloseModal: () => void;
  onOtpOpen: () => void;
}

const Register = ({ onCloseModal, onOtpOpen }: IProps) => {
  const [countryCode, setCountryCode] = useState<string>("+234");
  const { authRegister } = useAuthServices();

  const {
    register,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<TRegisterOne>({
    mode: "onBlur",
    resolver: zodResolver(RegisterOneSchema),
    reValidateMode: "onChange",
  });

  const signupPhoneNumber = watch("phone_number");

  const onSubmit: SubmitHandler<TRegisterOne> = async (data) => {
    mutate({
      ...data,
      phone_number: phoneNumberWoPlus(countryCode, signupPhoneNumber),
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: authRegister,
    onSuccess: () => {
      onCloseModal();
      onOtpOpen();
    },

    onError: () => {
      onCloseModal();
      onOtpOpen();
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[360px] !mx-auto flex flex-col gap-8"
    >
      <div className="flex flex-col gap-3">
        <InputPhone
          setSelectedCode={setCountryCode}
          selectedCode={countryCode}
          placeholder="Phone Number"
          className="border border-[#E1E1E1] outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-white text-base !rounded-lg"
          padding="12px"
          codeFontSize={"16px"}
          codeColor="#202046"
          placeholderColor="#C0C3C8"
          style={{
            color: "black",
            fontSize: "16px",
            fontWeight: 500,
          }}
          {...register("phone_number")}
          value={watch("phone_number")}
          setValue={setValue}
          error={errors.phone_number?.message}
        />
        <InputPassword
          isRequired
          placeholder="Enter 5 to 10 characters or number"
          className="border border-[#E1E1E1] outline-none focus:ring-0 mb-0 gap-2.5 !px-4 bg-white text-base !rounded-lg"
          padding="12px"
          placeholderColor="#C0C3C8"
          postIcon
          style={{
            color: "black",
            fontSize: "16px",
            fontWeight: 500,
          }}
          error={errors.password?.message}
          {...register("password")}
        />
      </div>
      <div className="flex flex-col gap-3 relative">
        <Button
          text="Create New Account"
          className="w-full !py-3 rounded-full pacity-30"
          isLoading={isPending}
          disabled={isPending}
        />
        <Button className="bg-gradient-to-r from-[#00FF59] to-[#FFD338] w-fit !py-1 rounded-none rounded-tl-full rounded-tr-full rounded-br-full absolute right-0 -top-3.5 !px-2 text-xs">
          <img src={GiftBox} alt="" className="w-4 h-4" />
          <p>Sign up for gifts</p>
        </Button>
        <p className="text-[10px] font-normal leading-[130%] text-center">
          By creating an account, you agree to our{" "}
          <Link to={"/"} className="text-[#009955] !underline">
            Terms & Conditions
          </Link>{" "}
          and confirm that you are at least 18 years old or over and all
          information given is true.
        </p>
      </div>
    </form>
  );
};

export default Register;
