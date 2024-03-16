import { memo } from "react";

const FrameContainer = memo(() => {
  return (
    <div className="absolute top-[0rem] left-[1.313rem] w-[100.25rem] h-[4.5rem] overflow-hidden text-center text-[1.25rem] text-text-100 font-space-grotesk">
      <div className="absolute top-[0rem] left-[5.125rem] w-[95.125rem] h-[4.5rem]">
        <div className="absolute top-[0rem] left-[77.75rem] rounded-6xl bg-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[7.625rem] h-[4.5rem] flex flex-row items-center justify-center py-[5.313rem] px-[2rem] border-[1px] border-solid border-text-100">
          <div className="relative">SHARE</div>
        </div>
        <div className="absolute top-[1.438rem] left-[29.125rem] flex flex-row items-start justify-start gap-[0rem_5rem] text-right font-nunito">
          <div className="relative tracking-[0.1em]">ABOUT US</div>
          <div className="relative tracking-[0.1em]">HOW IT WORKS</div>
          <div className="w-[6.25rem] flex flex-row items-start justify-between">
            <div className="relative tracking-[0.1em]">CONTACT US</div>
          </div>
        </div>
        <div className="absolute top-[0.563rem] left-[3.375rem] w-[16.875rem] h-[3.938rem] overflow-hidden text-left text-[2rem] font-antonio">
          <b className="absolute h-[60.95%] w-[64.7%] top-[19.52%] left-[28.81%] flex items-center">
            Empowering Health
          </b>
          <img
            className="absolute h-[48.73%] w-[21.19%] top-[24.44%] right-[77.04%] bottom-[26.83%] left-[1.78%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/logo.svg"
          />
        </div>
      </div>
    </div>
  );
});

export default FrameContainer;
