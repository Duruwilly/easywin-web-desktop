import React, { FC } from "react";
import ParentModal from "./ParentModal";
import { FaTimes } from "react-icons/fa";
import classNames from "classnames";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  title,
  children,
  className,
  onClose,
  ...otherProps
}) => {
  return (
    <ParentModal>
      <div
        className={classNames(
          `relative w-[90%] max-w-[540px] flex flex-row items-start justify-between px-[44px] pt-4 pb-6 bg-white roundedxl rounded-[5px]`,
          className
        )}
        {...otherProps}
      >
        <div className="flex flex-col gap-1 items-center justify-center w-full pt6">
          {title && (
            <div className="max-w-[320px] text-center">
              <p className="textxl text-sm text-center fontbold">{title}</p>
            </div>
          )}
          <div className="flex flex-col itemscenter pt[20px] gap-2 w-full md:flex-col md:w-full">
            {children}
          </div>
        </div>
        {onClose && (
          <div className="absolute right-3 top-3 flex items-center justify-center w8 h8 cursor-pointer">
            <div onClick={onClose}>
              <FaTimes style={{ fontSize: 14, color: "#c1c1c1" }} />
            </div>
          </div>
        )}
      </div>
    </ParentModal>
  );
};

export default Modal;
