import { countryData } from "../../constants/country";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { InputHTMLAttributes, forwardRef, useMemo, useState } from "react";
import Label from "../Label/Label";
import { IoIosInformationCircle } from "react-icons/io";

interface IInputPhone extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isRequired?: boolean;
  setSelectedCode: React.Dispatch<React.SetStateAction<string>>;
  selectedCode: string;
  setValue?: any;
  padding?: string;
  codeColor?: string;
  placeholderColor?: string;
  codeFontSize?: string;
}

const InputPhone = forwardRef<HTMLInputElement, IInputPhone>(
  (
    {
      label,
      isRequired,
      placeholder,
      className,
      setSelectedCode,
      selectedCode,
      error,
      value,
      onChange,
      setValue,
      name,
      codeColor = "white",
      padding = "13px",
      codeFontSize = "12px",
      placeholderColor = "#ffffff99",
      ...rest
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useOutsideClick(() => setOpen(false));

    const toggleDropdown = () => {
      setOpen(!open);
    };

    const handleClick = (code: string) => {
      setSelectedCode(code);
      toggleDropdown();
      setSearch("");
    };

    const countryPhoneCode = useMemo(() => {
      if (countryData) {
        if (!search) return countryData;
        return countryData.filter((code) =>
          code.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      return [];
    }, [search, countryData]);

    return (
      <div className={`mb-1 flex w-full flex-col`}>
        {label && <Label label={label} isRequired={isRequired} />}
        <div
          className={`relative border flex items-center justify-start ${
            error ? "border[#16BB50]" : "border[#9C9C9C]"
          } rounded-sm focus:outline-none focus:border[#16BB50] text-gray400 text-sm py[13px] wfull ${className}`}
          style={{ paddingTop: padding, paddingBottom: padding }}
        >
          <div
            className="h-[100%] cursor-pointer px-1"
            // onClick={toggleDropdown}
          >
            <div className="text-s ml-2">
              <p style={{ color: codeColor, fontSize: codeFontSize }}>
                {selectedCode}
              </p>
            </div>
          </div>

          {open ? (
            <div
              ref={dropdownRef}
              className="absolute top-12 left-0 z-20 flex h-[200px] flex-col overflow-y-scroll rounded border bg-white shadow"
            >
              <input
                type="text"
                className="border border-[#D0D5DD] w-auto py-1 mx-1 mt-1 px-2 sticky top-[5px] left-0 right-0 z-10 bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {countryPhoneCode?.map((el) => {
                return (
                  <div
                    key={el.flag}
                    className="flex w-[250px] cursor-pointer space-x-1 border-b p-2 text-sm"
                    onClick={() => handleClick(el.number)}
                  >
                    <p className="ml-2 w-[40px]">{el.number}</p>
                    <p className="ml-2 line-clamp-1">{el.name}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
          <input
            {...{ ref, placeholder, id: rest.id, name }}
            onChange={onChange}
            type={"text"}
            placeholder={placeholder}
            className={`h-full w-full borde border-none bg-transparent px-2 text-white placeholder:text-[${placeholderColor}]`}
            {...rest}
          />
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

InputPhone.displayName = "InputPhone";
export default InputPhone;
