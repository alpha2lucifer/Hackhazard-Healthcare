import { memo, useMemo } from "react";

const CoinContainer = memo(
  ({
    iconarrowUp,
    prop,
    amount,
    text,
    text1,
    icon,
    graph,
    propLeft,
    propColor,
  }) => {
    const coinCardStyle = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    const divStyle = useMemo(() => {
      return {
        color: propColor,
      };
    }, [propColor]);

    return (
      <div
        className="absolute top-[0rem] left-[0rem] w-[16.125rem] h-[11.125rem] text-left text-[0.875rem] text-text-100 font-heading-2-20"
        style={coinCardStyle}
      >
        <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-background-color-2 shadow-[4px_4px_33px_rgba(0,_0,_0,_0.05)] w-[16.125rem] h-[11.125rem]" />
        <img
          className="absolute h-[10.11%] w-[6.98%] top-[18.54%] right-[6.98%] bottom-[71.35%] left-[86.05%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={iconarrowUp}
        />
        <div
          className="absolute top-[8.188rem] left-[1.188rem] tracking-[0.02em] leading-[1.403rem] font-semibold text-secondary-100"
          style={divStyle}
        >
          {prop}
        </div>
        <div className="absolute top-[5.438rem] left-[1.25rem] text-[1.313rem] tracking-[0.02em] font-semibold inline-block w-[8.875rem]">
          {amount}
        </div>
        <div className="absolute top-[1.438rem] left-[5.125rem] text-[1rem] font-semibold">
          {text}
        </div>
        <div className="absolute top-[3.313rem] left-[5.125rem] text-[0.75rem] opacity-[0.6]">
          {text1}
        </div>
        <img
          className="absolute top-[1.438rem] left-[1.188rem] w-[2.75rem] h-[2.75rem]"
          alt=""
          src={icon}
        />
        <img
          className="absolute top-[6.25rem] left-[8.063rem] w-[6.938rem] h-[2.906rem]"
          alt=""
          src={graph}
        />
      </div>
    );
  }
);

export default CoinContainer;
