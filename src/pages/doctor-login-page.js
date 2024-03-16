import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HospitalRegistrationFormContai from "../components/hospital-registration-form-contai.js";
import DoctorRegistration from "../components/doctor-registration-form.jsx";
import HomeContainer from "../components/home-container.js";

const DoctorLoginPage = () => {
  const navigate = useNavigate();

  const onButtonmuicontainedTextContainerClick = useCallback(() => {
    navigate("/doctor-dashboard.js");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#5811b0,_#000_36.4%)] h-[67.5rem] overflow-hidden text-left text-[4rem] font-electrolize">
      <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[67.5rem] hidden">
        <div className="absolute top-[0rem] left-[0rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[60rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[30rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[90rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[10rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[70rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[40rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[100rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[20rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[80rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[50rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
        <div className="absolute top-[0rem] left-[110rem] bg-honeydew box-border w-[10rem] h-[67.5rem] border-[1px] border-solid border-lightgreen" />
      </div>
      <DoctorRegistration
    
      />
      <div className="absolute top-[18.938rem] left-[6.438rem] tracking-[0.02em] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#5811b0,_#fff_22.4%,_#fff_71.4%,_#5811b0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[58.313rem] h-[6.875rem]">
        Connecting Care Efficiently
      </div>
      <img
        className="absolute top-[26.5rem] left-[5.313rem] w-[50.625rem] h-[37.5rem]"
        alt=""
        src="/group-4.svg"
      />
    </div>
  );
};

export default DoctorLoginPage;
