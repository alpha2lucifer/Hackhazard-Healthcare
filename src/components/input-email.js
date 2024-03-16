import { memo, useMemo } from "react";

const InputEmail = memo(
  ({
    inputEmailWidth,
    inputEmailBorder,
    inputEmailHeight,
    inputEmailPosition,
    inputEmailTop,
    inputEmailLeft,
    labelBottom,
    labelLeft,
    labelFontSize,
    labelWidth,
    labelHeight,
  }) => {
    const inputEmailStyle = useMemo(() => {
      return {
        width: inputEmailWidth,
        border: inputEmailBorder,
        height: inputEmailHeight,
        position: inputEmailPosition,
        top: inputEmailTop,
        left: inputEmailLeft,
      };
    }, [
      inputEmailWidth,
      inputEmailBorder,
      inputEmailHeight,
      inputEmailPosition,
      inputEmailTop,
      inputEmailLeft,
    ]);

    const labelStyle = useMemo(() => {
      return {
        bottom: labelBottom,
        left: labelLeft,
        fontSize: labelFontSize,
        width: labelWidth,
        height: labelHeight,
      };
    }, [labelBottom, labelLeft, labelFontSize, labelWidth, labelHeight]);

    return (
      <div
        className="w-[243px] rounded-md bg-primary-light box-border h-[45px] text-left text-sm text-dark-dark-3 font-heading-2-20 border-[1px] border-solid border-primary-lighter"
        style={inputEmailStyle}
      >
        <div
          className="absolute bottom-[0px] left-[8px] leading-[130%] font-medium flex items-center w-[217px] h-[45px]"
          style={labelStyle}
        >
          Email:
        </div>
      </div>
    );
  }
);

export default InputEmail;
