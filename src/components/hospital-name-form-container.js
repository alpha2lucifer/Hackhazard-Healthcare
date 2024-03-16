import React from "react";
import { useState } from "react";
import IconFontAwesomeFreeSolidH from "../components/icon-font-awesome-free-solid-h.js";
import { handle_hospital_register } from "../utils/Contract.js";
import { Link } from "react-router-dom";

const HospitalNameFormContainer = () => {
  const [hospital_name, setHospital_name] = useState('');
  const [licence_ID, setLicenceID] = useState('');
  const [registration_number, setRegistration_number] = useState('');
  const [departments, setDepartments] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100);
  }
  const signIN = () => {
    setUsername(hospital_name + randomNumberGenerator());
    handle_hospital_register(username, hospital_name, licence_ID, registration_number, departments, password);

  }

  return (
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
        <Link to="/hospital-list">
          <button onClick={signIN} className="absolute top-315px left-[66.75rem] rounded-61xl bg-darkblue shadow-[0px_4px_12px_rgba(200,_211,_249,_0.6)_inset,_4px_8px_12px_rgba(78,_99,_141,_0.06)] w-[40rem] h-[5rem] overflow-hidden flex flex-row items-start justify-between py-[1.5rem] px-[2rem] box-border font-nunito" style={{ color: 'white', textAlign: "center,center", fontSize: "24px", fontWeight: "600" }}>Sign In</button>
        </Link>
      </form>


    </div>
  );
};

export default HospitalNameFormContainer;
