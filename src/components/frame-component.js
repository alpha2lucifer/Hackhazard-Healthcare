import { memo, useMemo } from "react";

const FrameComponent = memo(
  ({
    actionButtonText,
    buttonVariantText,
    propBackgroundColor,
    propFontSize,
    propFontWeight,
    propFontFamily,
    propFontSize1,
    propFontWeight1,
    propFontFamily1,
    propFontSize2,
    propFontWeight2,
    propFontFamily2,
  }) => {
    const rectangleDiv1Style = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
      };
    }, [propBackgroundColor]);

    const sCHEDULEVISITONLINEContainerStyle = useMemo(() => {
      return {
        fontSize: propFontSize,
        fontWeight: propFontWeight,
        fontFamily: propFontFamily,
      };
    }, [propFontSize, propFontWeight, propFontFamily]);

    return (
      <div className="w-[11.25rem] relative h-[4.438rem] text-center text-[0.875rem] text-primary-light font-heading-2-20">
        <div
          className="absolute top-[0rem] left-[0rem] rounded-3xs bg-primary-main-color w-[11.25rem] h-[4.375rem]"
          style={rectangleDiv1Style}
        />
        <div
          className="absolute top-[0rem] left-[0rem] leading-[130%] flex items-center w-[11.25rem] h-[4.438rem]"
          style={sCHEDULEVISITONLINEContainerStyle}
        >
          <span className="w-full">
            <p className="m-0 font-medium">{actionButtonText}</p>
            <p className="m-0 text-[1.25rem] font-semibold">
              {buttonVariantText}
            </p>
          </span>
        </div>
      </div>
    );
  }
);

export default FrameComponent;
