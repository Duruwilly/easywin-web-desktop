import classNames from "classnames";
import { HTMLAttributes, ReactNode, useEffect } from "react";

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  tabsArr: Array<{ text: string; icon?: ReactNode }>;
  handleTab: (tab: string) => void;
  selTab?: string;
  setSelTab?: (tab: string) => void;
}

const Tabs = ({
  tabsArr,
  handleTab,
  selTab,
  setSelTab,
  className,
  ...rest
}: TabProps) => {
  useEffect(() => {
    if (setSelTab && tabsArr.length > 0) {
      setSelTab(tabsArr[0].text);
    }
  }, []);

  return (
    <div
      className={`overflow-x-auto w-full border-b-[0.5px] border-b-[#e0def733] mt-3`}
      {...rest}
    >
      <div
        className={classNames(
          `flex items-center justify-between whitespace-nowrap`,
          className
        )}
      >
        {tabsArr.map((t, idx) => (
          <div
            onClick={() => {
              handleTab(t.text);
              if (setSelTab) {
                setSelTab(t.text);
              }
            }}
            key={idx}
            className={`!py-[13px] ${
              selTab === t.text
                ? "text-[#0CFD57] border-b-2 border-b-[#0CFD57]"
                : "text-white"
            } text-base cursor-pointer flex items-center gap-[4px] shrink-0 capitalize`}
          >
            {t.text}
            {t.icon && t.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
