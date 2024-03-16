import InputEmail from "../components/input-email.js";
import GroupComponent from "../components/group-component1,js";
import FrameComponent from "../components/frame-component.js";
import { useState } from "react";
import { handle_patient_registration,get_patient_lists } from "../utils/Contract.js";
import { Link, useNavigate } from "react-router-dom";

const PatientRegistration = () => {
  const navigate = useNavigate();

  const [patient_name, set_patient_name] = useState("");
  const [Aadhar, setAadhar] = useState("");
  const [alloted_daprtment, setAlloted_departments] = useState("");
  const [alloted_doctors_address, setAlloted_doctors_address] = useState("");

  const register_user = async () => {
    const proceed = await handle_patient_registration(
      patient_name,
      Aadhar,
      alloted_daprtment,
      alloted_doctors_address
    );
    if (proceed) {
      get_patient_lists();
      navigate("/hospital-list.js");
    }
  };

  return (
    <div className="w-full relative bg-background-color-1 h-[92.313rem] overflow-hidden text-left text-[0.875rem] text-dark-dark-3 font-heading-2-20">
      <div className="absolute top-[70.188rem] left-[-0.375rem] w-[90rem] h-[22.125rem] text-darkslategray-300">
        <div className="absolute top-[0rem] left-[0rem] bg-background-color-2 w-[90rem] h-[22.125rem]" />
        <div className="absolute top-[1.813rem] left-[12.5rem] w-[65.125rem] h-[17.813rem]">
          <div className="absolute top-[16.688rem] left-[21.563rem] leading-[130%] font-medium flex items-center w-[20.688rem]">
            711 Capitol Way S., Suite 204, Olympia, WA 98501
          </div>
          <div className="absolute top-[16.688rem] left-[0rem] leading-[130%] font-medium flex items-center w-[20rem]">
            © 2022 LOGO, Inc. All Rights Reserved.
          </div>
          <div className="absolute top-[0rem] left-[43.688rem] w-[21.438rem] h-[12.375rem]">
            <div className="absolute top-[11.25rem] left-[0rem] leading-[130%] font-medium flex items-center w-[6.188rem]">
              Privacy Policy
            </div>
            <div className="absolute top-[7.25rem] left-[0rem] leading-[130%] font-medium text-dark-dark-3 flex items-center w-[21rem]">
              By providing my e-mail address, I consent to receive marketing
              communications from LABORATOREX and its affiliates.
            </div>
            <div className="absolute top-[3.75rem] left-[16.125rem] w-[5.125rem] h-[2.25rem] text-center text-primary-light">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-99980xl bg-primary-main-color box-border border-[2px] border-solid border-primary-lighter" />
              <div className="absolute h-full w-full top-[0%] left-[0%] leading-[130%] font-medium flex items-center justify-center">
                Submit
              </div>
            </div>
            <InputEmail
              inputEmailWidth="15.188rem"
              inputEmailBorder="1px solid #1b2028"
              inputEmailHeight="2.813rem"
              inputEmailPosition="absolute"
              inputEmailTop="3.5rem"
              inputEmailLeft="0rem"
              labelBottom="0rem"
              labelLeft="0.5rem"
              labelFontSize="0.875rem"
              labelWidth="13.563rem"
              labelHeight="2.813rem"
            />
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] leading-[130%] text-text-100 inline-block w-[21.438rem]">
              Get find out more about promotions and consultations in your
              inbox:
            </div>
          </div>
          <div className="absolute top-[0rem] left-[34rem] w-[6.688rem] h-[3.375rem] text-text-100">
            <div className="absolute top-[2.25rem] left-[0rem] leading-[130%] font-medium inline-block w-[5.625rem]">
              Help Center
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] leading-[130%] text-primary-main-color inline-block w-[6.688rem]">
              Need Help?
            </div>
          </div>
          <div className="absolute top-[0rem] left-[13.188rem] w-[19rem] h-[13.875rem] text-text-100">
            <div className="absolute top-[12.75rem] left-[0rem] leading-[130%] font-medium inline-block w-[8.688rem]">
              Investor Relations
            </div>
            <div className="absolute top-[11rem] left-[0rem] leading-[130%] font-medium inline-block w-[3.813rem]">
              Careers
            </div>
            <div className="absolute top-[9.25rem] left-[0rem] leading-[130%] font-medium inline-block w-[2.688rem]">
              Press
            </div>
            <div className="absolute top-[7.5rem] left-[8.688rem] leading-[130%] font-medium flex items-center w-[7.375rem]">
              Terms of Service
            </div>
            <div className="absolute top-[7.5rem] left-[0rem] leading-[130%] font-medium inline-block w-[6.25rem]">
              Get the App
            </div>
            <div className="absolute top-[5.75rem] left-[8.688rem] leading-[130%] font-medium flex items-center w-[10.313rem]">
              CA - Do Not Sell My Info
            </div>
            <div className="absolute top-[5.75rem] left-[0rem] leading-[130%] font-medium inline-block w-[5.875rem]">
              Accessibility
            </div>
            <div className="absolute top-[4rem] left-[8.688rem] leading-[130%] font-medium flex items-center w-[5.875rem]">
              Cookie Policy
            </div>
            <div className="absolute top-[4rem] left-[0rem] leading-[130%] font-medium inline-block w-[5.438rem]">
              Contact Us
            </div>
            <div className="absolute top-[2.25rem] left-[8.688rem] leading-[130%] font-medium flex items-center w-[8.25rem]">
              Privacy Statement
            </div>
            <div className="absolute top-[2.25rem] left-[0rem] leading-[130%] font-medium inline-block w-[4.563rem]">
              About Us
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] leading-[130%] text-primary-main-color inline-block w-[10.125rem]">{`About `}</div>
          </div>
          <div className="absolute top-[0rem] left-[0.063rem] w-[7.625rem] h-[10.375rem] text-text-100">
            <div className="absolute top-[9.25rem] left-[0rem] leading-[130%] font-medium inline-block w-[2.375rem]">
              Store
            </div>
            <div className="absolute top-[7.5rem] left-[0rem] leading-[130%] font-medium inline-block w-[7.5rem]">{`Q&A Community`}</div>
            <div className="absolute top-[5.75rem] left-[0rem] leading-[130%] font-medium inline-block w-[2.875rem]">
              Safety
            </div>
            <div className="absolute top-[4rem] left-[0rem] leading-[130%] font-medium inline-block w-[7.625rem]">
              Rover Guarantee
            </div>
            <div className="absolute top-[2.25rem] left-[0rem] leading-[130%] font-medium inline-block w-[3.813rem]">
              Our Blog
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[1rem] leading-[130%] text-primary-main-color inline-block w-[6.625rem]">
              Learn More
            </div>
          </div>
        </div>
        <div className="absolute top-[17.313rem] left-[67.875rem] w-[9.688rem] h-[2.313rem]">
          <img
            className="absolute top-[0rem] left-[7.375rem] w-[2.313rem] h-[2.313rem]"
            alt=""
            src="/group-11.svg"
          />
          <img
            className="absolute top-[0rem] left-[3.688rem] w-[2.313rem] h-[2.313rem]"
            alt=""
            src="/group-10.svg"
          />
          <img
            className="absolute top-[0rem] left-[0rem] w-[2.313rem] h-[2.313rem]"
            alt=""
            src="/group-9.svg"
          />
        </div>
      </div>
      <div className="absolute top-[11.25rem] left-[12.125rem] rounded-3xs bg-background-color-2 box-border w-[65.063rem] h-[53.375rem] border-[1px] border-solid border-primary-lighter" />
      <div className="absolute top-[47.375rem] left-[37rem] w-[14.375rem] h-[3.313rem] text-center text-[0.875rem] text-primary-main-color font-heading-2-20">
        <div className="absolute h-[103.77%] w-[100.87%] top-[-1.89%] right-[-0.43%] bottom-[-1.89%] left-[-0.43%] rounded-56xl bg-primary-light box-border border-[1px] border-solid border-primary-lighter">
          <button onClick={register_user} className="absolute w-full top-[32.08%] left-[0%] leading-[130%] font-medium flex items-center justify-center">
            REGISTER
          </button>
        </div>
      </div>
      <img
        className="absolute top-[57.25rem] left-[14.25rem] max-h-full w-[61.438rem]"
        alt=""
        src="/vector-10.svg"
      />

      <div className="absolute top-[33.938rem] left-[15.688rem] w-[47.063rem] h-[2.625rem]">
        <div className="absolute top-[0rem] left-[14.5rem] rounded-30xl bg-primary-light shadow-[0px_4px_4px_rgba(153,_187,_255,_0.25)] box-border w-[32.563rem] h-[2.625rem] border-[2px] border-solid border-primary-main-color">
          <div className="absolute top-[0rem] left-[1.375rem] w-[13.813rem] h-[2.625rem]">
            <input
              onChange={(e) => setAlloted_doctors_address(e.target.value)}
              className="absolute top-[0rem] left-[0rem] leading-[130%] font-medium flex items-center w-[13.813rem] h-[2.625rem]"
              placeholder="Enter Alloted Doctor"
              style={{
                outline: "none",
                border: "none",
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="absolute h-[35.71%] w-[16.33%] top-[14.29%] left-[0%] text-[1.25rem] leading-[130%] font-medium text-text-100 text-right inline-block">
          Alloted Doctor
        </div>
      </div>
      <div className="absolute top-[38.125rem] left-[16rem] w-[46.75rem] h-[2.625rem]">
        <div className="absolute top-[0rem] left-[14.188rem] rounded-30xl bg-primary-light shadow-[0px_4px_4px_rgba(153,_187,_255,_0.25)] box-border w-[32.563rem] h-[2.625rem] border-[2px] border-solid border-primary-main-color">
          <div className="absolute top-[0rem] left-[1.375rem] w-[13.813rem] h-[2.625rem]">
            <input
              className="absolute top-[0rem] left-[0rem] leading-[130%] font-medium flex items-center w-[13.813rem] h-[2.625rem]"
              placeholder="Enter your gender"
              style={{
                outline: "none",
                border: "none",
                textDecoration: "none",
              }}
            />
            Enter your gender
          </div>
        </div>
        <div className="absolute h-[38.1%] w-[10.83%] top-[16.67%] left-[0%] text-[1.25rem] leading-[130%] font-medium text-text-100 text-right inline-block">
          Gender
        </div>
      </div>
      <div className="absolute top-[29rem] left-[13.938rem] w-[48.813rem] h-[2.625rem]">
        <div className="absolute top-[0rem] left-[16.25rem] rounded-30xl bg-primary-light shadow-[0px_4px_4px_rgba(153,_187,_255,_0.25)] box-border w-[32.563rem] h-[2.625rem] border-[2px] border-solid border-primary-main-color">
          <div className="absolute top-[0rem] left-[1.375rem] w-[13.813rem] h-[2.625rem]">
            <input
              onChange={(e) => setAadhar(e.target.value)}
              className="absolute top-[0rem] left-[0rem] leading-[130%] font-medium flex items-center w-[13.813rem] h-[2.625rem]"
              placeholder=" Enter your phone number"
              style={{
                outline: "none",
                border: "none",
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="absolute h-[35.71%] w-[23.82%] top-[26.19%] left-[0%] text-[1.25rem] leading-[130%] font-medium text-text-100 text-right inline-block">
          Phone Number
        </div>
      </div>
      <div className="absolute h-[2.37%] w-[43.68%] top-[26.95%] right-[38.33%] bottom-[70.68%] left-[17.99%] text-right text-[1.25rem] text-text-100">
        <div className="absolute h-[42.86%] w-[26.23%] top-[28.57%] left-[0%] leading-[130%] font-medium inline-block">
          Aadhar Number
        </div>
        <div className="absolute top-[0rem] left-[14rem] flex flex-row items-start justify-start gap-[0rem_0.125rem]">
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
          <div className="w-[2.188rem] relative h-[2.188rem]">
            <div className="absolute top-[0rem] left-[0rem] rounded-10xs bg-primary-light box-border w-[2.188rem] h-[2.188rem] border-[1px] border-solid border-primary-lighter">
              <div className="absolute top-[0rem] left-[0rem] w-[2.188rem] h-[2.188rem]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[20.438rem] left-[16.688rem] w-[46.063rem] h-[2.625rem]">
        <div className="absolute top-[0rem] left-[13.5rem] rounded-30xl bg-primary-light shadow-[0px_4px_4px_rgba(153,_187,_255,_0.25)] box-border w-[32.563rem] h-[2.625rem] border-[2px] border-solid border-text-100">
          <div className="absolute top-[0rem] left-[1.375rem] w-[11.188rem] h-[2.625rem]">
            <input
              onChange={(e) => set_patient_name(e.target.value)}
              className="absolute top-[0rem] left-[0rem] leading-[130%] font-medium flex items-center w-[11.188rem] h-[2.625rem]"
              placeholder="Enter your name"
              style={{
                outline: "none",
                border: "none",
                textDecoration: "none",
              }}
            />
          </div>
        </div>
        <div className="absolute h-[35.95%] w-[31.75%] top-[30.95%] left-[0%] text-[1.25rem] leading-[130%] font-medium text-text-100 inline-block">
          Name
        </div>
      </div>
      <div className="absolute top-[16.438rem] left-[79.188rem] flex flex-col items-start justify-start gap-[0.313rem_0rem]">
        <FrameComponent
          actionButtonText="SCHEDULE VISIT"
          buttonVariantText="ONLINE"
        />
        <FrameComponent
          propBackgroundColor="#99bbff"
          propFontSize="1.25rem"
          propFontWeight="600"
          propFontFamily="Poppins"
        />
        <FrameComponent
          actionButtonText="KNOWLEDGE "
          buttonVariantText="BASE"
          propBackgroundColor="#99bbff"
          propFontSize="1.25rem"
          propFontWeight="600"
          propFontFamily="Poppins"
        />
      </div>
      <div className="absolute top-[11.25rem] left-[12.125rem] w-[65.125rem] h-[6.063rem] text-center text-primary-light">
        <img
          className="absolute top-[0.063rem] left-[0rem] rounded-lg w-[65.125rem] h-[5.688rem]"
          alt=""
          src="/rectangle-778.svg"
        />
        <img
          className="absolute top-[0rem] left-[0.063rem] rounded-3xs w-[65.063rem] h-[6.063rem]"
          alt=""
          src="/rectangle-777.svg"
        />
        <div className="absolute top-[1.375rem] left-[25rem] w-[15.188rem] h-[3.063rem]">
          <div className="absolute top-[1.938rem] left-[0rem] leading-[130%] font-medium inline-block w-[15.188rem]">
            New account — Better Care
          </div>
          <div className="absolute top-[0rem] left-[2.313rem] text-[1.25rem] leading-[130%] font-semibold inline-block w-[10.438rem]">
            We grow for you
          </div>
        </div>
        <img
          className="absolute top-[0.063rem] left-[40rem] w-[25.063rem] h-[5.688rem] object-contain"
          alt=""
          src="/dfg-2@2x.png"
        />
        <img
          className="absolute top-[0.063rem] left-[0.125rem] w-[25.125rem] h-[5.688rem] object-cover"
          alt=""
          src="/dfg-1@2x.png"
        />
      </div>
      <div className="absolute top-[4.75rem] left-[11.938rem] flex flex-row items-center justify-center gap-[0rem_2.063rem] text-primary-main-color">
        <div className="w-[17.313rem] relative h-[3.625rem] text-[2.063rem] font-antonio">
          <b className="absolute h-[75.86%] w-[92.78%] top-[0%] left-[7.22%] leading-[130%] inline-block whitespace-pre-wrap">
            {" "}
            Empowering Health
          </b>
          <img
            className="absolute h-[52.93%] w-[20.65%] top-[17.24%] right-[79.35%] bottom-[29.83%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/logo.svg"
          />
          <div className="absolute h-[32.76%] w-[91.34%] top-[67.24%] left-[0%] text-[0.938rem] leading-[130%] font-medium font-heading-2-20 text-primary-lighter inline-block">
            {" "}
            reliability and credibility
          </div>
        </div>
        <div className="w-[32.563rem] relative rounded-30xl bg-primary-light shadow-[0px_4px_4px_rgba(153,_187,_255,_0.25)] box-border h-[2.625rem] text-dark-dark-3 border-[2px] border-solid border-primary-main-color">
          <div className="absolute top-[0rem] left-[1.375rem] w-[29.438rem] h-[2.625rem]">
            <div className="absolute top-[0rem] left-[0rem] leading-[130%] font-medium flex items-center w-[11.188rem] h-[2.625rem]">
              What are you looking for?
            </div>
            <div className="absolute top-[0rem] left-[23.875rem] leading-[130%] font-medium flex items-center w-[3.125rem] h-[2.625rem]">
              Search
            </div>
            <img
              className="absolute h-[57.14%] w-[5.1%] top-[21.43%] right-[0%] bottom-[21.43%] left-[94.9%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/essentials--zoomin.svg"
            />
          </div>
        </div>
        <div className="w-[6.625rem] relative h-[1.125rem] text-center">
          <div className="absolute top-[0rem] left-[0rem] leading-[130%] font-medium inline-block w-[2.375rem]">
            Login
          </div>
          <button
            onClick={register_user}
            className="absolute top-[0rem] left-[3rem] leading-[130%] font-medium inline-block w-[3.625rem]"
          >
            Register
          </button>
          <img
            className="absolute top-[0.063rem] left-[2.688rem] max-w-full overflow-hidden h-[1rem]"
            alt=""
            src="/vector-8.svg"
          />
        </div>
        <img
          className="w-[3.75rem] relative h-[3.75rem]"
          alt=""
          src="/group-83.svg"
        />
      </div>
    </div>
  );
};

export default PatientRegistration;
