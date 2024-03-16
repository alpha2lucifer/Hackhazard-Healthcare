import { memo } from "react";
import IconFontAwesomeFreeSolidH from "./icon-font-awesome-free-solid-h.js";

const HomeContainer = memo(() => {
  return (
    <div className="absolute top-[2.438rem] left-[5.625rem] w-[112rem] h-[8.625rem] text-right text-[1.25rem] text-text-100 font-nunito">
      <div className="absolute top-[2.938rem] right-[76.688rem] flex flex-row items-start justify-start gap-[0rem_5rem]">
        <div className="relative tracking-[0.1em]">Home</div>
        <div className="relative tracking-[0.1em]">Contact us</div>
        <div className="w-[6.25rem] flex flex-row items-start justify-between">
          <div className="relative tracking-[0.1em]">English</div>
          <img
            className="self-stretch w-[0.75rem] relative max-h-full"
            alt=""
            src="/frame-21.svg"
          />
        </div>
        <div className="relative tracking-[0.1em]">Help</div>
      </div>
      <IconFontAwesomeFreeSolidH />
    </div>
  );
});

export default HomeContainer;
