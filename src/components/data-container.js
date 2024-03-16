import { memo, useMemo } from "react";

const DataContainer = memo(({ dimensionsCode, propHeight, propHeight1 }) => {
  const groupDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const groupIconStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className="absolute top-[0.063rem] left-[0rem] w-[13.5rem] h-[6.075rem] text-left text-[0.875rem] text-darkgray font-heading-2-20"
      style={groupDivStyle}
    >
      <div className="absolute top-[0rem] left-[6.5rem] tracking-[-0.01em]">
        Total Patients
      </div>
      <div className="absolute top-[1.563rem] left-[6.5rem] text-[2rem] tracking-[-0.01em] leading-[100%] font-semibold text-whitesmoke-200">
        5,423
      </div>
      <img
        className="absolute top-[0rem] left-[0rem] w-[5.25rem] h-[6.075rem]"
        alt=""
        src={dimensionsCode}
        style={groupIconStyle}
      />
      <div className="absolute top-[3.938rem] left-[6.5rem] w-[7rem] h-[1.25rem] text-[0.75rem] text-forestgreen">
        <div className="absolute top-[0.125rem] left-[1.438rem] tracking-[-0.01em]">
          <b>16%</b>
          <span className="text-darkslategray-400"> this month</span>
        </div>
        <img
          className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem] overflow-hidden"
          alt=""
          src="/arrowup-1.svg"
        />
      </div>
    </div>
  );
});

export default DataContainer;
