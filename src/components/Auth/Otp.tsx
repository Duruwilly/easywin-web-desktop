import { useEffect, useState } from "react";
import { Toast } from "@/config/toast";
import { useAuthServices } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import OtpInput from "../Input/OtpInput";
import Button from "../Button/button";

interface IOtpProps {
  onOtherInfoOpen: () => void;
  onClose: () => void;
}

const Otp = ({ onOtherInfoOpen, onClose }: IOtpProps) => {
  const [otp, setOtp] = useState<string>("");
  const [resendOtptimeRemaining, setResendOtpTimeRemaining] = useState(60);
  const { loginWithOtp } = useAuthServices();
  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  const verifyOtpFunc = async () => {
    await loginWithOtp({
      otp,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: verifyOtpFunc,
    onSuccess: () => {
      onOtherInfoOpen();
      onClose();
    },
    onError: () => {
      onOtherInfoOpen();
      onClose();
    },
  });

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      Toast.error("Please enter a 4-digit OTP");
      return;
    }
    mutate();
  };

  // const resendOtp = async () => {
  //   await getOtpLogin({ phone_number: "" });
  //   setResendOtpTimeRemaining(60);
  // };

  useEffect(() => {
    if (resendOtptimeRemaining > 0) {
      const intervalId = setInterval(() => {
        setResendOtpTimeRemaining((prevTime: number) => prevTime - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [resendOtptimeRemaining]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <OtpInput length={4} onChange={handleOtpChange} />
        <p className="text-xs text-[#6F7B85]">
          Dial <span className="text-[#009955] font-medium">*347*261# </span> on
          your registered phone number to get your code. If you don't have OTP
          in 45 seconds.
        </p>
      </div>
      <Button
        text="Next"
        className="w-full !py-3 rounded-full opacity30"
        isLoading={isPending}
        disabled={isPending}
        onClick={handleVerifyOtp}
      />
      {/* <div className="mt-5">
        <p className="text-white text-xs font-medium text-center">
          Haven’t received the code yet?
        </p>
        <div onClick={resendOtp} className="cursor-pointer">
          <p className="text-[#DFDFDF] text-xs font-medium text-center !underline">
            {resendOtptimeRemaining === 0
              ? "Tap to resend OTP"
              : `Resend code in 0:${resendOtptimeRemaining}`}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Otp;
