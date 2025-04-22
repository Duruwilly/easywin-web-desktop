const Announcement = () => {
  return (
    <section className="user-select-none relative flex w-full gap-2 overflow-hidden">
      <ul className="flex min-w-full flex-shrink-0 animate-scroll justify-around">
        {[
          "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
        ].map((item, index) => {
          const [_, phone, amount] =
            item.match(/(\d{3}\*\*\*\d{3}) won (N[\d,]+\.\d{2})/) || [];
          return (
            <div
              key={index}
              className="m-1 flex items-center justify-center gap-2 rounded-md text-center text[#9C9C9C] text-white cursor-pointer"
            >
              <span className="text-[12px] font-bold">
                Congrats <span className="!underlin">{phone}</span> won{" "}
                <span className="!underlin text-yellow500 text-white">
                  {amount}
                </span>
              </span>
            </div>
          );
        })}
      </ul>

      <ul
        aria-hidden="true"
        className="flex min-w-full flex-shrink-0 animate-scroll justify-around"
      >
        {[
          "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
          //   "Congrats 810***512 won N6,500.00",
        ].map((item, index) => {
          const [_, phone, amount] =
            item.match(/(\d{3}\*\*\*\d{3}) won (N[\d,]+\.\d{2})/) || [];
          return (
            <div
              key={index}
              className="m-1 flex items-center justify-center gap-2 rounded-md text-center text[#9C9C9C] text-white cursor-pointer"
            >
              <span className="text-[12px] font-bold">
                Congrats <span className="!underlin">{phone}</span> won{" "}
                <span className="!underlin text-yellow500 text-white">
                  {amount}
                </span>
              </span>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Announcement;
