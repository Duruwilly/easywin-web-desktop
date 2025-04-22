/* eslint-disable */

import React, { useState, InputHTMLAttributes, forwardRef } from "react";
import Label from "../Label/Label";
import { IoIosInformationCircle } from "react-icons/io";
import { PiEyeClosed } from "react-icons/pi";
import { CgEye } from "react-icons/cg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string | boolean | string[];
  label?: string;
  isRequired?: boolean;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  padding?: string;
  placeholderColor?: string;
  codeFontSize?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type,
      isRequired,
      preIcon,
      postIcon,
      error,
      padding = "13px",
      className,
      codeFontSize = "12px",
      placeholderColor = "#ffffff99",
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    return (
      <div className={`relative mb-1 flex w-full flex-col`}>
        {label && <Label label={label ?? ""} isRequired={isRequired} />}
        <div
          className={`relative border flex items-center justify-start ${
            error ? "border[#16BB50]" : "border[#9C9C9C]"
          } rounded-[4px] focus:outline-none focus:border[#16BB50] text-gray400 text-sm py[13px] wfull ${className}`}
          style={{ paddingTop: padding, paddingBottom: padding }}
        >
          <input
            type={show ? "text" : "password"}
            ref={ref as React.Ref<HTMLInputElement>}
            {...rest}
            className={`w-full h-full pl-4 ${
              postIcon ? "pr-10" : "pr-4"
            } border border-none bg-transparent px-2 text-white placeholder:text-[${placeholderColor}]`}
          />

          {postIcon && (
            <div className="absolute top[35px] right-[12px] flex items-center justify-start">
              <div
                className="ml-1 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <CgEye size={24} color="#9CA2AA"  />
                ) : (
                  <PiEyeClosed size={24} color="#9CA2AA" />
                )}
              </div>
            </div>
          )}
        </div>
        {error && (
          <div className="flex items-center gap-2">
            <IoIosInformationCircle className="text-[#f56060] text-[14px]" />
            <small className="text-[10px] text-[#f56060] transition-all duration-300 pt-[9px] pb-[5px]">
              {error}
            </small>
          </div>
        )}
      </div>
    );
  }
);

export default InputPassword;
