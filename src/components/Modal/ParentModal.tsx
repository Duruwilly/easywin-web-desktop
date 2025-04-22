import React, { FC } from "react";

interface ParentModalProps extends React.HTMLAttributes<HTMLElement> {}

const ParentModal: FC<ParentModalProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <div
      {...rest}
      className="fixed flex items-center justify-center h-full w-full p-0 m-0 border-[0px] z-50 top-0 right-0 left-0"
      style={{ background: "rgba(0,0,0,0.4)" }}
    >
      {children}
    </div>
  );
};

export default ParentModal;
