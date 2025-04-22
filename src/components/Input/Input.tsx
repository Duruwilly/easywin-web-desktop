import React, { InputHTMLAttributes, forwardRef } from "react";
import Label from "../Label/Label";
import { IoIosInformationCircle } from "react-icons/io";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string | boolean | string[];
  label?: string;
  isRequired?: boolean;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  padding?: string;
  placeholderColor?: string;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isRequired,
      preIcon,
      postIcon,
      error,
      placeholder,
      className,
      placeholderColor = "#ffffff99",
      padding = "13px",
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`!mb-1 flex w-full flex-col`}>
        {label && <Label label={label ?? ""} isRequired={isRequired} />}
        <div
          className={`w-full relative ${preIcon ? "!pl-10" : "!pl-4"} ${
            postIcon ? "!pr-10" : "!pr-4"
          } border ${
            error ? "border[#16BB50]" : "border[#9C9C9C]"
          } rounded-lg focus:outline-none focus:border[#16BB50] py[13px] text-sm bg-transparent !px-2 text-white placeholder:text[#9C9C9C] ${className}`}
          style={{ paddingTop: padding, paddingBottom: padding }}
        >
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            {...rest}
            placeholder={placeholder}
            className={`border border-none bg-transparent !px-2 text-white placeholder:text-[${placeholderColor}] h-full w-full`}
          />

          {preIcon && (
            <div className="absolute top-0 bottom-0 left-[12px] flex items-center justify-start">
              <div className="mr-1">{preIcon}</div>
            </div>
          )}

          {postIcon && (
            <div className="absolute top-[0px] bottom-0 right-[12px] flex items-center justify-start">
              <div className="!ml-1">{postIcon}</div>
            </div>
          )}
        </div>
        {error && (
          <div className="flex items-center gap-2">
            <IoIosInformationCircle className="text-[#f56060] text-[14px]" />
            <small className="text-[10px] text-[#f56060] transition-all duration-300 !pt-[9px] !pb-[5px]">
              {error}
            </small>
          </div>
        )}
      </div>
    );
  }
);

export default TextInput;
