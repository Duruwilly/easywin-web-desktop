import React, { forwardRef, InputHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = "Search", className = "", onChange, ...rest }, ref) => {
    return (
      <div
        className={`relative flex items-center justify-start h-[78px] w-full rounded-[100px] border border-white ${className} `}
      >
        <input
          ref={ref}
          type="text"
          className={`!pl-8 border-none text-white placeholder:text-[12px] placeholder:font-[400] bg-transparent placeholder:text-[#C0C3C8] text-[14px]`}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />

        <div className="absolute left-[12px] flex items-center">
          <FiSearch className="size-[16px] text-[#C0C3C8]" />
        </div>
      </div>
    );
  }
);

export default SearchInput;
