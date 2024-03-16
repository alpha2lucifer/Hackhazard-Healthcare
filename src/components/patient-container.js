import { memo, useEffect, useMemo, useState,useCallback } from "react";
import { get_patient_lists } from "../utils/Contract.js";
import { Link ,useNavigate} from "react-router-dom";


const PatientContainer = memo(({ rectangleIconTop, rectangleIconLeft }) => {
  const productStyle = useMemo(() => {
    return {
      top: rectangleIconTop,
      left: rectangleIconLeft,
    };
  }, [rectangleIconTop, rectangleIconLeft]);
  const [count, setCount] = useState(0);

  const [patient_list, setPatient_list] = useState([

  ]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const list = await get_patient_lists();// Adjust URL based on your backend API endpoint
        setPatient_list(list);
        console.log(patient_list[0].name)
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, [])

  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/records");
  }, [navigate]);








  return (
    <div
      className="absolute top-[31.063rem] left-[22.313rem] w-[60.5rem] h-[50.75rem] text-left text-[0.75rem] text-blueviolet font-heading-2-20"
      style={productStyle}
    >
      <img
        className="absolute top-[0rem] left-[0rem] rounded-11xl w-[60.5rem] h-[50.75rem]"
        alt=""
        src="/rectangle-30.svg"
      />
      <div className="absolute top-[46.875rem] left-[2.375rem] text-[0.875rem] tracking-[-0.01em] font-medium whitespace-pre-wrap">
        Showing data 1 to 8 of 256K entries
      </div>
      <div className="absolute top-[2.75rem] left-[2.25rem] text-[1.5rem] tracking-[-0.01em] font-semibold text-text-100">
        All Patients
      </div>

      <div className="absolute top-[8.188rem] left-[0rem] w-[60.5rem] h-[36.688rem] text-[0.875rem] text-whitesmoke-200">
        <div className="absolute top-[0rem] left-[2.375rem] w-[53.938rem] h-[1.313rem] text-silver">
          <div className="absolute top-[0rem] left-[0rem] tracking-[-0.01em] font-medium">
            Patient Name
          </div>
          <div className="absolute top-[0rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Hospital
          </div>
          <div className="absolute top-[0rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            Phone Number
          </div>
          <div className="absolute top-[0rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            Email
          </div>
          <div className="absolute top-[0rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Country
          </div>
          <div className="absolute top-[0rem] left-[51.125rem] tracking-[-0.01em] font-medium text-center">
            Status
          </div>
        </div>

        {patient_list.map((_patient, index) => (
          
            <div  key={index} onClick={onLinkContainerClick} className="absolute top-[3.75rem] left-[2.375rem] w-[55.375rem] h-[1.813rem]">
              <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
                {_patient.name}
              </div>
              <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
                Shreyas
              </div>
              <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
                {_patient.phone_number}
              </div>
              <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
                {_patient.name + '@gmail.com'}
              </div>
              <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
                India
              </div>
              <div className="absolute top-[0rem] left-[50.375rem] rounded bg-mediumaquamarine box-border w-[5rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-seagreen border-[1px] border-solid border-mediumseagreen">
                <div className="relative tracking-[-0.01em] font-medium">
                  Active
                </div>
              </div>
            </div>
 

        ))}


        {/* <div className="absolute top-[7.75rem] left-[2.375rem] w-[55.375rem] h-[1.813rem]">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Floyd Miles
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Yahoo
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (205) 555-0100
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            floyd@yahoo.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Kiribati
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-pink flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-red border-[1px] border-solid border-red">
            <div className="relative tracking-[-0.01em] font-medium">
              Inactive
            </div>
          </div>
        </div>
        <div className="absolute top-[12.063rem] left-[2.375rem] w-[55.375rem] h-[1.813rem]">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Ronald Richards
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Adobe
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (302) 555-0107
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            ronald@adobe.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Israel
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-pink flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-red border-[1px] border-solid border-red">
            <div className="relative tracking-[-0.01em] font-medium">
              Inactive
            </div>
          </div>
        </div>
        <div className="absolute top-[16.375rem] left-[2.375rem] w-[55.375rem] h-[1.813rem]">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Marvin McKinney
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Tesla
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (252) 555-0126
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            marvin@tesla.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Iran
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-mediumaquamarine box-border w-[5rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-seagreen border-[1px] border-solid border-mediumseagreen">
            <div className="relative tracking-[-0.01em] font-medium">
              Active
            </div>
          </div>
        </div>
        <div className="absolute top-[20.688rem] left-[2.375rem] w-[55.375rem] h-[1.813rem]">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Jerome Bell
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Google
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (629) 555-0129
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            jerome@google.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Réunion
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-mediumaquamarine box-border w-[5rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-seagreen border-[1px] border-solid border-mediumseagreen">
            <div className="relative tracking-[-0.01em] font-medium">
              Active
            </div>
          </div>
        </div>
        <div className="absolute top-[25rem] left-[2.375rem] w-[55.625rem] h-[1.813rem]">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Kathryn Murphy
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Microsoft
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (406) 555-0120
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            kathryn@microsoft.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Curaçao
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-mediumaquamarine box-border w-[5.25rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-seagreen border-[1px] border-solid border-mediumseagreen">
            <div className="relative tracking-[-0.01em] font-medium">
              Active
            </div>
          </div>
        </div>
        <div className="absolute top-[29.313rem] left-[2.375rem] w-[55.625rem] h-[1.813rem]">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Jacob Jones
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Yahoo
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (208) 555-0112
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            jacob@yahoo.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Brazil
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-mediumaquamarine box-border w-[5.25rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-seagreen border-[1px] border-solid border-mediumseagreen">
            <div className="relative tracking-[-0.01em] font-medium">
              Active
            </div>
          </div>
        </div>
        <div className="absolute top-[33.625rem] left-[2.375rem] w-[55.625rem] h-[1.813rem] text-text-100">
          <div className="absolute top-[0.25rem] left-[0rem] tracking-[-0.01em] font-medium">
            Kristin Watson
          </div>
          <div className="absolute top-[0.25rem] left-[10.75rem] tracking-[-0.01em] font-medium">
            Facebook
          </div>
          <div className="absolute top-[0.25rem] left-[18.938rem] tracking-[-0.01em] font-medium">
            (704) 555-0127
          </div>
          <div className="absolute top-[0.25rem] left-[28.688rem] tracking-[-0.01em] font-medium">
            kristin@facebook.com
          </div>
          <div className="absolute top-[0.25rem] left-[41.625rem] tracking-[-0.01em] font-medium">
            Åland Islands
          </div>
          <div className="absolute top-[0rem] left-[50.375rem] rounded bg-pink box-border w-[5.25rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.75rem] text-red border-[1px] border-solid border-red">
            <div className="relative tracking-[-0.01em] font-medium">
              Inactive
            </div>
          </div>
        </div> */}
        <div className="absolute top-[2.156rem] left-[-0.031rem] box-border w-[60.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[6.469rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[10.781rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[15.094rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[19.406rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[23.719rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[28.031rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[32.344rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
        <div className="absolute top-[36.656rem] left-[2.469rem] box-border w-[55.563rem] h-[0.063rem] border-t-[1px] border-solid border-whitesmoke-200" />
      </div>
      <div className="absolute top-[2.75rem] left-[33.625rem] w-[13.5rem] h-[2.375rem] text-silver">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-ghostwhite w-[13.5rem] h-[2.375rem]" />
        <div className="absolute top-[0.625rem] left-[2.5rem] tracking-[-0.01em]">
          Search
        </div>
        <img
          className="absolute top-[0.438rem] left-[0.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
          alt=""
          src="/search-1.svg"
        />
      </div>
      <div className="absolute top-[2.75rem] left-[48.125rem] w-[9.625rem] h-[2.375rem] text-gray">
        <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-ghostwhite w-[9.625rem] h-[2.375rem]" />
        <img
          className="absolute top-[0.625rem] left-[7.75rem] w-[1.125rem] h-[1.125rem] overflow-hidden"
          alt=""
          src="/chevrondown-1.svg"
        />
        <div className="absolute top-[0.625rem] left-[0.938rem] tracking-[-0.01em]">
          <span>{`Short by : `}</span>
          <span className="font-semibold text-darkslategray-200">Newest</span>
        </div>
      </div>
      <div className="absolute top-[46.75rem] left-[41.063rem] w-[16.938rem] h-[1.5rem] text-darkslategray-100">
        <div className="absolute top-[0rem] left-[2.375rem] rounded bg-blueviolet flex flex-col items-center justify-center py-[0.375rem] px-[0.625rem] text-text-100 border-[1px] border-solid border-blueviolet">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
            1
          </div>
        </div>
        <div className="absolute top-[0rem] left-[4.688rem] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-[0.375rem] px-[0.563rem] border-[1px] border-solid border-whitesmoke-200">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
            2
          </div>
        </div>
        <div className="absolute top-[0rem] left-[9.25rem] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-[0.375rem] px-[0.563rem] border-[1px] border-solid border-whitesmoke-200">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
            4
          </div>
        </div>
        <div className="absolute top-[0rem] left-[12.938rem] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-[0.375rem] px-[0.313rem] border-[1px] border-solid border-whitesmoke-200">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
            40
          </div>
        </div>
        <div className="absolute top-[0rem] left-[15.313rem] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-[0.375rem] px-[0.563rem] border-[1px] border-solid border-whitesmoke-200">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">{`>`}</div>
        </div>
        <div className="absolute top-[0rem] left-[0rem] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-[0.375rem] px-[0.563rem] border-[1px] border-solid border-whitesmoke-200">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">{`<`}</div>
        </div>
        <div className="absolute top-[0.5rem] left-[11.625rem] tracking-[-0.01em] leading-[100%] font-medium text-black">
          ...
        </div>
        <div className="absolute top-[0rem] left-[7rem] rounded bg-whitesmoke-100 flex flex-col items-center justify-center py-[0.375rem] px-[0.5rem] border-[1px] border-solid border-whitesmoke-200">
          <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
            3
          </div>
        </div>
      </div>
    </div>
  );
});

export default PatientContainer;
