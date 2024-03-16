import { memo, useMemo } from "react";

const SidebarContainer = memo(
  ({
    dimensionsCode,
    rectangleDivHeight,
    bgBackgroundColor,
    topMenuHeight,
    iconsetting2Top,
    iconsetting2Left,
    iconlogoutTop,
    iconlogoutLeft,
    onLinkContainerClick,
  }) => {
    const sidebarStyle = useMemo(() => {
      return {
        height: rectangleDivHeight,
      };
    }, [rectangleDivHeight]);

    const rectangleDivStyle = useMemo(() => {
      return {
        backgroundColor: bgBackgroundColor,
      };
    }, [bgBackgroundColor]);

    const bgStyle = useMemo(() => {
      return {
        height: topMenuHeight,
      };
    }, [topMenuHeight]);

    const settingContainerStyle = useMemo(() => {
      return {
        top: iconsetting2Top,
        left: iconsetting2Left,
      };
    }, [iconsetting2Top, iconsetting2Left]);

    const logoutContainerStyle = useMemo(() => {
      return {
        top: iconlogoutTop,
        left: iconlogoutLeft,
      };
    }, [iconlogoutTop, iconlogoutLeft]);

    return (
      <div
        className="absolute top-[0rem] left-[0rem] bg-background-color-2 w-[16rem] h-[64rem] text-left text-[0.875rem] text-text-10 font-heading-2-20"
        style={sidebarStyle}
      >
        <div
          className="absolute top-[7.688rem] left-[1.75rem] rounded-3xs bg-main-linear shadow-[4px_4px_32px_rgba(103,_90,_255,_0.07)] w-[12.313rem] h-[3.125rem]"
          style={rectangleDivStyle}
        />
        <div
          className="absolute top-[0rem] left-[0rem] w-[16rem] h-[64rem]"
          style={bgStyle}
        />
        <div className="absolute top-[8.5rem] left-[2.5rem] w-[10.375rem] h-[14rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[10.375rem] flex flex-col items-start justify-start gap-[2rem_0rem]">
            <div className="w-[10.375rem] flex flex-row items-center justify-start pt-[0rem] pb-[0.5rem] pr-[0.688rem] pl-[0rem] box-border gap-[0rem_1.25rem] text-text-100">
              <img
                className="w-[1.5rem] relative h-[1.5rem]"
                alt=""
                src="/iconelement3.svg"
              />
              <div className="relative font-semibold">Overview</div>
            </div>
            <div
              className="w-[10.375rem] flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0rem_1.25rem] cursor-pointer"
              onClick={onLinkContainerClick}
            >
              <img
                className="w-[1.5rem] relative h-[1.5rem]"
                alt=""
                src="/icongraph.svg"
              />
              <div className="relative">Patient List</div>
            </div>
            <div className="w-[10.375rem] flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0rem_1.25rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem]"
                alt=""
                src="/iconwallet2.svg"
              />
              <div className="relative">Schedule</div>
            </div>
            <div className="w-[10.375rem] flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0rem_1.25rem]">
              <img
                className="w-[1.5rem] relative h-[1.5rem]"
                alt=""
                src="/iconwalletminus.svg"
              />
              <div className="relative">Wallet</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2rem] left-[2.5rem] w-[10.625rem] h-[2.563rem] overflow-hidden text-[1.313rem] text-text-100 font-antonio">
          <b className="absolute top-[17.07%] left-[28.82%]">MedNexus</b>
          <img
            className="absolute h-[48.78%] w-[21.18%] top-[24.39%] right-[77.06%] bottom-[26.83%] left-[1.76%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={dimensionsCode}
          />
        </div>
        <div
          className="absolute top-[55.5rem] left-[2.5rem] w-[10.375rem] flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0rem_1.25rem]"
          style={settingContainerStyle}
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem]"
            alt=""
            src="/iconsetting2.svg"
          />
          <div className="relative">Setting</div>
        </div>
        <div
          className="absolute top-[59.5rem] left-[2.5rem] w-[10.375rem] flex flex-row items-center justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border gap-[0rem_1.25rem]"
          style={logoutContainerStyle}
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem]"
            alt=""
            src="/iconlogout.svg"
          />
          <div className="relative">Logout</div>
        </div>
      </div>
    );
  }
);

export default SidebarContainer;
