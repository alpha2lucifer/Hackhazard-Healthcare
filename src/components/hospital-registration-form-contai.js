import HospitalNameFormContainer from "../components/hospital-name-form-container.js";
import IconFontAwesomeFreeSolidH from "../components/icon-font-awesome-free-solid-h.js";
import { handle_hospital_register } from "../utils/Contract.js";
import { get_all_hospitals,get_hospital_list } from "../utils/Contract.js";
import { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPageBrisheam = () => {
  const navigate = useNavigate();

  const [hospital_name, setHospital_name] = useState('');
  const [licence_ID, setLicenceID] = useState('');
  const [registration_number, setRegistration_number] = useState('');
  const [departments, setDepartments] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [logged_in, setLoggedIN] = useState(false);

  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100);
  }
  const signIN = async () => {
    setUsername(hospital_name + randomNumberGenerator());

    const procedd = await handle_hospital_register(username, hospital_name, licence_ID, registration_number, departments, password);
    if (procedd) {
      navigate("/hospital-list.js");
      get_hospital_list();
      

    }

  }

  // useEffect(() => {
  //   onButtonmuicontainedTextClick();
  //   }
  //     },[hospiatl_loggedIn]);

  const onButtonmuicontainedTextClick = useCallback(() => {
    if (logged_in) navigate("/hospital-list.js");
  }, [navigate]);


  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#5811b0,_#000_36.4%)] h-[67.5rem] overflow-hidden text-left text-[1.75rem] text-white font-electrolize">
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
      <div className="absolute top-[-1.687rem] left-[66.75rem] w-[40.188rem] h-[56.625rem]">
        <div className="absolute w-[calc(100%_-_3px)] top-[calc(50%_-_288px)] right-[0rem] left-[0.188rem] h-[27.938rem]">
          <div className="absolute w-full top-[calc(50%_-_223.5px)] right-[0rem] left-[0rem] flex flex-col items-start justify-start gap-[2.25rem_0rem] text-left text-[1.75rem] text-white font-electrolize">
            <form>
              <div className="w-[40rem] flex flex-col items-start justify-start gap-[1rem_0rem] text-left text-[1.75rem] text-white font-electrolize">
                <div className="relative tracking-[0.1em] [text-shadow:1px_0_0_#9e9e9e,_0_1px_0_#9e9e9e,_-1px_0_0_#9e9e9e,_0_-1px_0_#9e9e9e]">
                  Hospital Name
                </div>

                {/* <label htmlFor="hospital_form_input">{hospitalInputLabels}</label> */}
                <input onChange={(e) => setHospital_name(e.target.value)} className="self-stretch rounded-61xl bg-white flex flex-row items-start justify-start py-[1.5rem] px-[2rem] text-[1.5rem] text-blue-1-9 border-[2px] border-solid border-dark-blue-1-8" id="hospital_form_input" placeholder="Enter Hospital Name"></input>

              </div>



              <div className="w-[40rem] flex flex-col items-start justify-start gap-[1rem_0rem] text-left text-[1.75rem] text-white font-electrolize">
                <div className="relative tracking-[0.1em] [text-shadow:1px_0_0_#9e9e9e,_0_1px_0_#9e9e9e,_-1px_0_0_#9e9e9e,_0_-1px_0_#9e9e9e]">
                  Licence ID
                </div>
                {/* <label htmlFor="hospital_form_input">{hospitalInputLabels}</label> */}
                <input onChange={(e) => setLicenceID(e.target.value)} className="self-stretch rounded-61xl bg-white flex flex-row items-start justify-start py-[1.5rem] px-[2rem] text-[1.5rem] text-blue-1-9 border-[2px] border-solid border-dark-blue-1-8" id="hospital_form_input" placeholder="Enter the Hospital Licence ID"></input>

              </div>

              <div className="w-[40rem] flex flex-col items-start justify-start gap-[1rem_0rem] text-left text-[1.75rem] text-white font-electrolize">
                <div className="relative tracking-[0.1em] [text-shadow:1px_0_0_#9e9e9e,_0_1px_0_#9e9e9e,_-1px_0_0_#9e9e9e,_0_-1px_0_#9e9e9e]">
                  Registration Number
                </div>
                {/* <label htmlFor="hospital_form_input">{hospitalInputLabels}</label> */}
                <input onChange={(e) => setRegistration_number(e.target.value)} className="self-stretch rounded-61xl bg-white flex flex-row items-start justify-start py-[1.5rem] px-[2rem] text-[1.5rem] text-blue-1-9 border-[2px] border-solid border-dark-blue-1-8" id="hospital_form_input" placeholder="Enter the Registration Number"></input>

              </div>

              <div className="w-[40rem] flex flex-col items-start justify-start gap-[1rem_0rem] text-left text-[1.75rem] text-white font-electrolize">
                <div className="relative tracking-[0.1em] [text-shadow:1px_0_0_#9e9e9e,_0_1px_0_#9e9e9e,_-1px_0_0_#9e9e9e,_0_-1px_0_#9e9e9e]">
                  Departments
                </div>
                {/* <label htmlFor="hospital_form_input">{hospitalInputLabels}</label> */}
                <input onChange={(e) => setDepartments(e.target.value)} className="self-stretch rounded-61xl bg-white flex flex-row items-start justify-start py-[1.5rem] px-[2rem] text-[1.5rem] text-blue-1-9 border-[2px] border-solid border-dark-blue-1-8" id="hospital_form_input" placeholder="Enter Departments"></input>

              </div>

              <div className="w-[40rem] flex flex-col items-start justify-start gap-[1rem_0rem] text-left text-[1.75rem] text-white font-electrolize">
                <div className="relative tracking-[0.1em] [text-shadow:1px_0_0_#9e9e9e,_0_1px_0_#9e9e9e,_-1px_0_0_#9e9e9e,_0_-1px_0_#9e9e9e]">
                  Password
                </div>
                {/* <label htmlFor="hospital_form_input">{hospitalInputLabels}</label> */}
                <input onChange={(e) => setPassword(e.target.value)} className="self-stretch rounded-61xl bg-white flex flex-row items-start justify-start py-[1.5rem] px-[2rem] text-[1.5rem] text-blue-1-9 border-[2px] border-solid border-dark-blue-1-8" id="hospital_form_input" placeholder="Password"></input>

              </div>

            </form>


          </div>
        </div>

      </div>
      <div className="absolute top-[1.938rem] right-[78.125rem] flex flex-row items-start justify-start gap-[0rem_5rem] text-right text-[1.25rem] font-nunito">
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

      <button onClick={signIN} className="absolute top-[calc(50%_+_315px)] left-[66.75rem] rounded-61xl bg-darkblue shadow-[0px_4px_12px_rgba(200,_211,_249,_0.6)_inset,_4px_8px_12px_rgba(78,_99,_141,_0.06)] w-[40rem] h-[5rem] overflow-hidden flex flex-row items-start justify-between py-[1.5rem] px-[2rem] box-border font-nunito" style={{ color: 'white', textAlign: "center,center", fontSize: "24px", fontWeight: "600" }}>Sign In</button>


      <div className="absolute top-[18.938rem] left-[6.438rem] text-[4rem] tracking-[0.02em] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#5811b0,_#fff_22.4%,_#fff_71.4%,_#5811b0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[58.313rem] h-[6.875rem]">
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

export default LoginPageBrisheam;
