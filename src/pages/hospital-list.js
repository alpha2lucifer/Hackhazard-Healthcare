import { useCallback } from "react";
import PatientContainer from "../components/patient-container.js";
import DataContainer from "../components/data-container.js";
import { useNavigate } from "react-router-dom";
import SidebarContainer from "../components/sidebar-container.js";

const HospitalList = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/patient-registration.js");
  }, [navigate]);

  return (
    <div className="w-full relative bg-background-color-1 h-[86.563rem] overflow-hidden text-left text-[0.875rem] text-darkgray font-heading-2-20">
      <PatientContainer />
      <div className="absolute top-[7.313rem] left-[23.563rem] w-[60.5rem] h-[9.438rem]">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-11xl w-[60.5rem] h-[9.438rem]"
          alt=""
          src="/rectangle-15.svg"
        />
        <div className="absolute top-[1.938rem] left-[3.125rem] w-[53.363rem] h-[6.138rem]">
          <DataContainer dimensionsCode="/group-10.svg" />
          <div className="absolute top-[0.063rem] left-[20.625rem] w-[13rem] h-[5.931rem]">
            <div className="absolute top-[0rem] left-[6.5rem] tracking-[-0.01em]">
              Doctors
            </div>
            <div className="absolute top-[1.563rem] left-[6.5rem] text-[2rem] tracking-[-0.01em] leading-[100%] font-semibold text-whitesmoke-200">
              49
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[5.25rem] h-[5.931rem]"
              alt=""
              src="/group-10.svg"
            />
            <div className="absolute top-[3.938rem] left-[6.5rem] w-[6.5rem] h-[1.25rem] text-[0.75rem] text-crimson">
              <div className="absolute top-[0.125rem] left-[1.438rem] tracking-[-0.01em]">
                <b>1%</b>
                <span className="text-darkslategray-400"> this month</span>
              </div>
              <img
                className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem] overflow-hidden object-contain"
                alt=""
                src="/arrowup-1.svg"
              />
            </div>
          </div>
          <div className="absolute top-[0.063rem] left-[40.625rem] w-[12.738rem] h-[6.006rem]">
            <div className="absolute top-[0rem] left-[6.5rem] tracking-[-0.01em]">
              Active Now
            </div>
            <div className="absolute top-[1.563rem] left-[6.5rem] text-[2rem] tracking-[-0.01em] leading-[100%] font-semibold text-whitesmoke-200">
              26
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[5.25rem] h-[6.006rem]"
              alt=""
              src="/group-10.svg"
            />
            <img
              className="absolute top-[3.75rem] left-[6.563rem] w-[6.175rem] h-[1.625rem]"
              alt=""
              src="/group-300.svg"
            />
          </div>
          <div className="absolute top-[0rem] left-[17.125rem] w-[0rem] h-[5.438rem]" />
          <div className="absolute top-[0rem] left-[37.125rem] w-[0rem] h-[5.438rem]" />
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_-_407.5px)] left-[39.875rem] w-[23.063rem] h-[9.813rem] cursor-pointer text-[8rem] text-text-100 font-nunito"
        onClick={onLinkContainerClick}
      >
        <div className="absolute top-[calc(50%_-_49.5px)] left-[0rem] rounded-61xl bg-background-color-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_4px_8px_12px_rgba(78,_99,_141,_0.06)] w-[23.063rem] h-[8rem] overflow-hidden" />
        <div className="absolute top-[0rem] left-[9.313rem] tracking-[-0.01em] font-extrabold inline-block w-[10.5rem] h-[4.813rem]">
          +
        </div>
      </div>
      <SidebarContainer
        dimensionsCode="/logo.svg"
        rectangleDivHeight="86.563rem"
        bgBackgroundColor="#5932ea"
        topMenuHeight="77.125rem"
        iconsetting2Top="77.125rem"
        iconsetting2Left="2.813rem"
        iconlogoutTop="81.125rem"
        iconlogoutLeft="2.813rem"
      />
      <div className="absolute top-[2.375rem] left-[24.125rem] w-[59.938rem] h-[3rem] text-silver">
        <div className="absolute top-[0.125rem] left-[46.438rem] w-[13.5rem] h-[2.375rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-text-100 w-[13.5rem] h-[2.375rem]" />
          <div className="absolute top-[0.625rem] left-[2.5rem] tracking-[-0.01em]">
            Search
          </div>
          <img
            className="absolute top-[0.438rem] left-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/search-1.svg"
          />
        </div>
        <div className="absolute top-[0rem] left-[0rem] text-[2rem] font-semibold text-text-100">
          Patient Record
        </div>
      </div>
    </div>
  );
};

export default HospitalList;
