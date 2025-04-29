import React, { useState, useRef } from "react";

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
  error?: string;
}

const OtpInput = ({ length, onChange, error }: OtpInputProps) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChangeText = (text: string, index: number) => {
    if (isNaN(Number(text))) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    onChange(newOtp.join(""));
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between gap-[21px] items-center">
        {otp.map((value, index) => (
          <input
            placeholder="-"
            key={index}
            className={`w-[60px] h-[60px] rounded-[4px] border-[1px] text-[#009955] text-center text-[27px]
            ${!value ? "border-gray-400" : "border-[#009955]"}
            `}
            value={otp[index]}
            onChange={(e) => handleChangeText(e.target.value, index)}
            onKeyDown={(e) => handleKeyPress(e, index)}
            type="text"
            maxLength={1}
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
          />
        ))}
      </div>
      {error && (
        <p className="!px-3 text-red-500">
          {typeof error === "string" ? error : "Invalid input"}
        </p>
      )}
    </div>
  );
};

export default OtpInput;
