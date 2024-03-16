import PatientContainer from "../components/patient-container.js";
import DataContainer from "../components/data-container.js";
import SidebarContainer from "../components/sidebar-container.js";

const DoctorList = () => {
  return (
    <div className="w-full relative bg-background-color-1 h-[74.875rem] overflow-hidden text-left text-[0.875rem] text-silver font-heading-2-20">
      <PatientContainer
        rectangleIconTop="19.25rem"
        rectangleIconLeft="23.563rem"
      />
      <div className="absolute top-[7.313rem] left-[23.563rem] w-[60.5rem] h-[9.438rem]">
        <img
          className="absolute top-[0rem] left-[0rem] rounded-11xl w-[60.5rem] h-[9.438rem]"
          alt=""
          src="/rectangle-15.svg"
        />
        <div className="absolute top-[1.938rem] left-[3.125rem] w-[37.125rem] h-[5.438rem]">
          <DataContainer
            dimensionsCode="/group-10.svg"
            propHeight="5.25rem"
            propHeight1="5.25rem"
          />
          <div className="absolute top-[0rem] left-[17.125rem] w-[0rem] h-[5.438rem]" />
          <div className="absolute top-[0rem] left-[37.125rem] w-[0rem] h-[5.438rem]" />
        </div>
      </div>
      <SidebarContainer
        dimensionsCode="/logo.svg"
        rectangleDivHeight="74.875rem"
        bgBackgroundColor="#5932ea"
        topMenuHeight="77.125rem"
        iconsetting2Top="67.438rem"
        iconsetting2Left="2.625rem"
        iconlogoutTop="71.438rem"
        iconlogoutLeft="2.625rem"
      />
      <div className="absolute top-[2.375rem] left-[24.125rem] w-[59.938rem] h-[3rem]">
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

export default DoctorList;
