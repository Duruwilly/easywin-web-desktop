/* eslint-disable */

import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useEffect, useState } from 'react';
import Label from '../Label/Label';

interface IMultiSelectDropDownProps {
  error?: string;
  choices: Array<{ value: string; label: string }> | [];
  value: string;
  // onChange: (value: string) => void;
  setValue: (name: string, arg: string) => void;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  name: string;
}

export const InputSelect = ({
  error,
  choices,
  value,
  // onChange,
  placeholder,
  label,
  isRequired,
  setValue,
  name,
  ...rest
}: IMultiSelectDropDownProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string>('');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (value: string, displayVal: string) => {
    // onChange(value); //
    setValue(name, value);
    setSelectedItems(displayVal);
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (value) {
      const selectedVals = choices.find((opt) => opt.value === value)?.label;
      setSelectedItems(selectedVals || '');
    }
  }, [value]);

  const root = useOutsideClick(() => {
    setDropdownOpen(false);
  });

  return (
    <div className="w-full relative my-2">
      <Label label={label ?? ''} isRequired={isRequired} />
      <div
        ref={root}
        className={`w-full relative py-[10px] px-4 border rounded-lg flex items-center justify-between bg-white ${
          error ? 'border-red-500' : 'border-[#D0D5DD]'
        } focus-within:border-studio-600 focus-within:outline-none mb-1 placeholder:text-sm text-sm`}
        onClick={toggleDropdown}
      >
        <input
          placeholder={placeholder}
          value={selectedItems}
          {...rest}
          className="border-none bg-transparent outline-none w-full"
          readOnly
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#667085"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {/* dropdown menu */}
      <div
        className={`absolute mt-2 z-10 transition-all duration-150 ease-in-out border ${
          isDropdownOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0'
        } bg-white rounded w-full shadow`}
      >
        <ul className="p-1 space-y-1 text-xs font-secondary h-[150px] overflow-y-scroll">
          {choices.map((choice, idx) => (
            <li
              key={idx}
              className="w-full px-2 py-1 text-sm font-medium text-gray-900 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(choice.value, choice.label)}
            >
              {choice.label}
            </li>
          ))}
        </ul>
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
