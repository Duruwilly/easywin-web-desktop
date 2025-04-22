import React, { forwardRef, InputHTMLAttributes } from "react";
import Button from "../Button/button";
import { FiSearch } from "react-icons/fi";
import classNames from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  buttonText: string;
  onButtonClick: () => void;
  bg?: string;
  buttonBg?: string;
  isButtonIcon?: boolean;
  variant?: "primary" | "filled" | "transparent" | "secondary" | "light";
  error?: string;
  isLoading?: boolean;
  padding?: string;
  placeholderColor?: string;
  codeFontSize?: string;
  buttonclass?: string;
}

const InputWithButton = forwardRef<HTMLInputElement, IProps>(
  (
    {
      placeholder,
      buttonText,
      onButtonClick,
      buttonBg,
      isButtonIcon = true,
      bg = "bg-white",
      variant = "primary",
      error,
      isLoading,
      className,
      codeFontSize = "12px",
      padding = "13px",
      placeholderColor = "#ffffff99",
      buttonclass,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={`relative border flex items-center justify-start px-2 ${bg} my-1 rounded-lg overflow-hidden ${
          error ? "border[#16BB50]" : "border[#9C9C9C]"
        } rounded-lg focus:outline-none focus:border[#16BB50] text-gray400 text-sm py2 w-full ${className}`}
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type="text"
          placeholder={placeholder}
          className={`flex-1 px-4 focus:outline-none text-sm bg-transparent border-none text-white placeholder:text-[${placeholderColor}]`}
          {...props}
        />
        <Button
          postIcon={isButtonIcon && <FiSearch size={18} />}
          variant={variant}
          text={buttonText}
          className={classNames(
            `text-sm font-bold bg[#6ebf0e] py-[6px]`,
            buttonclass
          )}
          onClick={onButtonClick}
          bg={buttonBg}
          disabled={isLoading}
          isLoading={isLoading}
          type="button"
        />
      </div>
    );
  }
);

export default InputWithButton;
