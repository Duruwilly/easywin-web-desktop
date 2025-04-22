import { ComponentProps } from "react";
import classNames from "classnames";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "filled" | "transparent" | "primary" | "secondary" | "light";
  text?: string;
  isLoading?: boolean;
  bg?: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "small";
  withBorder?: boolean;
}

const Button = ({
  text,
  variant = "primary",
  className,
  isLoading,
  postIcon,
  preIcon,
  bg,
  children,
  withBorder,
  ...rest
}: ButtonProps) => {
  const variantClassName = {
    primary: `bg-[#009955] ${withBorder && "border border-[#009955]"}`,
    secondary: `bg-[${bg}] ${withBorder && "border border-[#009955]"}`,
    transparent: `bg-transparent ${withBorder && "border border-white"}`,
    // danger: `bg-peach text-white`,
    // text: `bg-[#D9D9D9]`,
  };

  return (
    <button
      className={classNames(
        `rounded-[12px] px-2 py-[12px] disabled:opacity-45 transition duration-300 flex flex-row items-center justify-center gap-1 cursor-pointer text-white`,
        variantClassName[variant as keyof typeof variantClassName],
        className
      )}
      {...rest}
    >
      {preIcon && preIcon}
      {isLoading ? (
        <ClipLoader
          color="#ffffff"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        text || children
      )}
      {postIcon && postIcon}
    </button>
  );
};

export default Button;
