import { useEffect, useState } from "react";
import InputPhone from "../Input/InputPhone";
import InputPassword from "../Input/InputPassword";
import InputWithButton from "../Input/InputWithButton";
import Button from "../Button/button";
import { useAuthServices } from "@/services/auth";
import { LoginSchema, TLogin } from "@/types/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { phoneNumberWoPlus } from "@/utils";

interface IProps {
  onCloseModal: () => void;
}

const Login = ({ onCloseModal }: IProps) => {
  const [countryCode, setCountryCode] = useState<string>("+234");
  const [usepass, setUsepass] = useState(true);
  const [resendOtptimeRemaining, setResendOtpTimeRemaining] = useState(60);
  const { authLogin, getOtpLogin } = useAuthServices();

  const {
    register,
    watch,
    setValue,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TLogin>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
    reValidateMode: "onChange",
  });

  const phoneNumberValue = useWatch({ control, name: "phone_number" });
  const passwordValue = useWatch({ control, name: "password" });

  const { mutate, isPending } = useMutation({
    mutationFn: authLogin,
  });

  const { mutate: otpMutate, isPending: isOtpPending } = useMutation({
    mutationFn: getOtpLogin,
    onSuccess: () => {
      setResendOtpTimeRemaining(0);
    },
  });

  const resendOtp = async () => {
    await getOtpLogin({ phone_number: watch("phone_number") });
    setResendOtpTimeRemaining(0);
  };

  const phoneNumber = watch("phone_number");
  const onSubmit: SubmitHandler<TLogin> = async (data) => {
    mutate({
      ...data,
      phone_number: phoneNumberWoPlus(countryCode, phoneNumber),
    });
    onCloseModal();
  };

  const isButtonDisabled =
    isPending || !phoneNumberValue?.trim() || !passwordValue?.trim();

  useEffect(() => {
    if (resendOtptimeRemaining < 60) {
      const intervalId = setInterval(() => {
        setResendOtpTimeRemaining((prevTime: number) => prevTime + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [resendOtptimeRemaining]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[360px] !mx-auto flex flex-col gap-8"
    >
      <div className="flex flex-col gap-3">
        <InputPhone
          setSelectedCode={setCountryCode}
          selectedCode={countryCode}
          placeholder="Mobile Number"
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
        {usepass ? (
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
        ) : (
          <InputWithButton
            value={watch("otp")}
            {...register("otp")}
            variant="transparent"
            buttonText="Send Code"
            placeholder="OTP"
            onButtonClick={() =>
              otpMutate({ phone_number: watch("phone_number") })
            }
            disabled={isOtpPending}
            isLoading={isOtpPending}
            padding="12px"
            buttonclass="!py-0 !text-[#9CA2AA]"
            className="border border-[#E1E1E1] text-base !px-4 bg-white !rounded-lg"
            isButtonIcon={false}
            placeholderColor="#C0C3C8"
            style={{
              color: "black",
              fontSize: "16px",
              fontWeight: 500,
            }}
          />
        )}
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <input
                id="rememberme"
                type="checkbox"
                className="appearance-none h-4 w-4 border border-[#009955] rounded bg-transparent checked:bg-transparent relative peer"
              />
              <div className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-[#009955] h-4 w-4"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <label htmlFor="rememberme">
                <p className="text-[#202046] text-xs">Remember me</p>
              </label>
            </div>

            <div className="flex items-center gap-1">
              <input
                id="rememberme"
                type="checkbox"
                className="appearance-none h-4 w-4 border border-[#009955] rounded bg-transparent checked:bg-transparent relative peer"
              />
              <div className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-[#009955] h-4 w-4"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
              <label htmlFor="rememberme">
                <p className="text-[#202046] text-xs">Keep me signed in</p>
              </label>
            </div>
          </div>
          <p
            className="text-[#16bb50] text-sm cursor-pointer"
            onClick={() => setUsepass(!usepass)}
          >
            {usepass ? "Login with OTP" : "Login with password"}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          text="Login"
          className="w-full !py-3 rounded-full opacity-30"
          isLoading={isPending}
          disabled={isButtonDisabled}
        />
        {!usepass && (
          <div className="mt-5">
            <p className="text-white text-xs font-medium text-center">
              Haven’t received the code yet?
            </p>
            <div onClick={resendOtp} className="cursor-pointer">
              <p className="text-[#DFDFDF] text-xs font-medium text-center !underline">
                {resendOtptimeRemaining === 60
                  ? "Tap to resend OTP"
                  : `Resend code in 0:${resendOtptimeRemaining}`}
              </p>
            </div>
          </div>
        )}
        {usepass && (
          <p className="!ml-auto flex justify-end text-[#202046]">
            Forward your password?
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
