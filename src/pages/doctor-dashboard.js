import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SidebarContainer from "../components/sidebar-container.js";
import CoinContainer from "../components/coin-container.js";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/doctor-list.js");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-3xs bg-background-color-1 h-[64rem] overflow-hidden text-left text-[0.875rem] text-text-100 font-heading-2-20">
      <SidebarContainer
        dimensionsCode="/logo.svg"
        onLinkContainerClick={onLinkContainerClick}
      />
      <div className="absolute top-[0rem] left-[15.938rem] w-[74.063rem] h-[7.125rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[74.063rem] h-[6.25rem]" />
        <div className="absolute top-[1.625rem] left-[1.938rem] text-[2rem] font-semibold">
          Dashboard
        </div>
        <div className="absolute top-[1.75rem] left-[19.938rem] w-[28.125rem] h-[2.75rem] text-text-10">
          <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-background-color-2 w-[28.125rem] h-[2.75rem]" />
          <img
            className="absolute h-[54.55%] w-[5.33%] top-[22.73%] right-[4.44%] bottom-[22.73%] left-[90.22%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/iconsearchnormal.svg"
          />
          <div className="absolute top-[0.688rem] left-[1.25rem]">
            Search...
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[54.438rem] w-[2.75rem] h-[2.75rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-background-color-2 w-[2.75rem] h-[2.75rem]" />
          <div className="absolute top-[0.625rem] left-[0.625rem] flex flex-row items-start justify-start">
            <img
              className="w-[1.5rem] relative h-[1.5rem]"
              alt=""
              src="/icon--notification.svg"
            />
          </div>
        </div>
        <div className="absolute top-[1.75rem] left-[59.063rem] flex flex-row items-center justify-start gap-[0rem_0.938rem]">
          <div className="w-[2.75rem] relative rounded-3xs bg-text-10 h-[2.75rem]" />
          <div className="relative font-medium">Aabid Hussain</div>
          <img
            className="w-[1.5rem] relative h-[1.5rem]"
            alt=""
            src="/iconarrowdown.svg"
          />
        </div>
      </div>
      <div className="absolute top-[6.75rem] left-[17.875rem] w-[70.125rem] h-[13.125rem]">
        <div className="absolute top-[2rem] left-[0rem] w-[70.125rem] h-[11.125rem]">
          <div className="absolute top-[0rem] left-[0rem] w-[70.125rem] h-[11.125rem]">
            <CoinContainer
              iconarrowUp="/iconarrowup.svg"
              prop="+0.25%"
              amount="$52,291"
              text="Beemari 1"
              text1="BTC"
              icon="/icon.svg"
              graph="/graph.svg"
            />
            <div className="absolute top-[0rem] left-[36rem] w-[16.125rem] h-[11.125rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-background-color-2 shadow-[4px_4px_33px_rgba(0,_0,_0,_0.05)] w-[16.125rem] h-[11.125rem]" />
              <img
                className="absolute h-[10.11%] w-[6.98%] top-[18.54%] right-[6.98%] bottom-[71.35%] left-[86.05%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/iconarrowup.svg"
              />
              <div className="absolute top-[8.188rem] left-[1.188rem] tracking-[0.02em] leading-[1.403rem] font-semibold text-secondary-100">
                +0.25%
              </div>
              <div className="absolute top-[5.438rem] left-[1.25rem] text-[1.313rem] tracking-[0.02em] font-semibold inline-block w-[8.875rem]">
                $28,291
              </div>
              <div className="absolute top-[1.438rem] left-[5.125rem] text-[1rem] font-semibold">
                Beemari 3
              </div>
              <div className="absolute top-[3.313rem] left-[5.125rem] text-[0.75rem] opacity-[0.6]">
                ETH
              </div>
              <div className="absolute top-[1.438rem] left-[1.188rem] rounded-3xs bg-background-color-1 w-[2.75rem] h-[2.75rem]" />
              <img
                className="absolute h-[13.48%] w-[9.3%] top-[18.54%] right-[79.46%] bottom-[67.98%] left-[11.24%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/iconethereumeth.svg"
              />
              <img
                className="absolute top-[6.25rem] left-[8.063rem] w-[6.938rem] h-[2.906rem]"
                alt=""
                src="/graph.svg"
              />
            </div>
            <CoinContainer
              iconarrowUp="/iconarrowup.svg"
              prop="+0.25%"
              amount="$8,291"
              text="Beemari 2"
              text1="ITC"
              icon="/icon.svg"
              graph="/graph.svg"
              propLeft="18rem"
              propColor="#1ecb4f"
            />
            <CoinContainer
              iconarrowUp="/iconarrowdown@2x.png"
              prop="-0.25%"
              amount="$14,291"
              text="bEEMARI 4"
              text1="SOL"
              icon="/icon.svg"
              graph="/graph.svg"
              propLeft="54rem"
              propColor="#f46d22"
            />
          </div>
        </div>
        <div className="absolute top-[0rem] left-[63.625rem] text-[1.25rem] font-medium font-overpass-mono flex items-center w-[6rem] h-[1.813rem]">
          See all
        </div>
      </div>
      <div className="absolute top-[21.875rem] left-[41.875rem] w-[46.188rem] h-[27.563rem] text-[0.75rem] text-stroke">
        <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-background-color-2 shadow-[4px_4px_33px_rgba(0,_0,_0,_0.05)] w-[46.188rem] h-[27.563rem]" />
        <img
          className="absolute top-[11.625rem] left-[5.5rem] w-[38.938rem] h-[11.75rem]"
          alt=""
          src="/graphs.svg"
        />
        <div className="absolute top-[5.375rem] left-[1.875rem] flex flex-row items-center justify-start gap-[0rem_0.625rem] text-[0.875rem]">
          <div className="relative opacity-[0.6]">Bitcoin/BTC</div>
          <img
            className="w-[1.125rem] relative h-[1.125rem]"
            alt=""
            src="/iconarrowdown.svg"
          />
        </div>
        <div className="absolute top-[6.938rem] left-[1.875rem] text-[1.125rem] font-semibold">
          $35,352.02
        </div>
        <div className="absolute top-[1.875rem] left-[1.875rem] text-[1.313rem] font-semibold text-text-100">
          Chart
        </div>
        <div className="absolute top-[24.813rem] left-[5.125rem] w-[39.25rem] flex flex-row items-center justify-center gap-[0rem_5.5rem] text-text-10">
          <div className="relative leading-[1rem]">19:00</div>
          <div className="relative leading-[1rem]">19:10</div>
          <div className="relative leading-[1rem]">19:20</div>
          <div className="relative leading-[1rem]">19:30</div>
          <div className="relative leading-[1rem]">19:40</div>
          <div className="relative leading-[1rem]">19:50</div>
        </div>
        <div className="absolute top-[10.125rem] left-[1.875rem] w-[2.875rem] h-[13.875rem] text-text-10">
          <div className="absolute top-[0rem] left-[0rem] flex items-center w-[2.875rem]">
            50.000
          </div>
          <div className="absolute top-[3.188rem] left-[0rem] flex items-center w-[2.875rem]">
            40.000
          </div>
          <div className="absolute top-[6.375rem] left-[0rem] flex items-center w-[2.875rem]">
            30.000
          </div>
          <div className="absolute top-[9.563rem] left-[0rem] flex items-center w-[2.875rem]">
            20.000
          </div>
          <div className="absolute top-[12.75rem] left-[0rem] flex items-center w-[2.875rem]">
            10.000
          </div>
        </div>
        <div className="absolute top-[23.406rem] left-[5.094rem] bg-gainsboro box-border w-[39.313rem] h-[0.063rem] border-t-[1px] border-solid border-background-color-1" />
        <div className="absolute top-[6.5rem] left-[29.063rem] flex flex-row items-start justify-start gap-[0rem_0.625rem] text-center text-[0.625rem] text-text-10">
          <div className="rounded-mini bg-main-linear flex flex-row items-center justify-center py-[0rem] px-[0.938rem] text-stroke">
            <div className="relative leading-[1.375rem] font-medium">1h</div>
          </div>
          <div className="rounded-mini flex flex-row items-center justify-center py-[0rem] px-[0.938rem] border-[1px] border-solid border-background-color-1">
            <div className="relative leading-[1.375rem] font-medium">3h</div>
          </div>
          <div className="rounded-mini flex flex-row items-center justify-center py-[0rem] px-[0.938rem] border-[1px] border-solid border-background-color-1">
            <div className="relative leading-[1.375rem] font-medium">1d</div>
          </div>
          <div className="rounded-mini flex flex-row items-center justify-center py-[0rem] px-[0.938rem] border-[1px] border-solid border-background-color-1">
            <div className="relative leading-[1.375rem] font-medium">1w</div>
          </div>
          <div className="rounded-mini flex flex-row items-center justify-center py-[0rem] px-[0.938rem] border-[1px] border-solid border-background-color-1">
            <div className="relative leading-[1.375rem] font-medium">1m</div>
          </div>
        </div>
        <div className="absolute top-[1.875rem] left-[38.625rem] rounded-8xs flex flex-row items-center justify-center p-[0.313rem] gap-[0rem_0.625rem] text-center text-[0.625rem] border-[1px] border-solid border-background-color-1">
          <img
            className="w-[1.125rem] relative h-[1.125rem]"
            alt=""
            src="/icondollarcircle.svg"
          />
          <div className="relative leading-[1.375rem] font-semibold opacity-[0.6]">
            USD
          </div>
          <img
            className="w-[1.125rem] relative h-[1.125rem]"
            alt=""
            src="/iconarrowdown.svg"
          />
        </div>
        <div className="absolute top-[1.875rem] left-[35.688rem] rounded-8xs flex flex-row items-center justify-center p-[0.438rem] border-[1px] border-solid border-background-color-1">
          <img
            className="w-[1.125rem] relative h-[1.125rem]"
            alt=""
            src="/iconcandle.svg"
          />
        </div>
        <div className="absolute top-[21.438rem] left-[5.5rem] w-[38.938rem] flex flex-row items-end justify-start gap-[0rem_0.313rem] opacity-[0.1]">
          <div className="w-[0.5rem] relative bg-main-linear h-[1rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.375rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.813rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.875rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.375rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.875rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.813rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.875rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.875rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.875rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.375rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.875rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.5rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.375rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.063rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[0.625rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[1.375rem]" />
          <div className="w-[0.5rem] relative bg-main-linear h-[2rem]" />
        </div>
      </div>
      <div className="absolute top-[51.438rem] left-[41.875rem] w-[46.125rem] h-[10.813rem] text-[0.625rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-background-color-2 w-[46.125rem] h-[10.813rem]" />
        <div className="absolute top-[1.875rem] left-[40.063rem] rounded-8xs flex flex-row items-center justify-center py-[0.313rem] px-[0.625rem] text-center text-stroke border-[1px] border-solid border-background-color-1">
          <div className="relative leading-[1.375rem] font-semibold opacity-[0.6]">
            View More
          </div>
        </div>
        <div className="absolute top-[7.5rem] left-[2.063rem] w-[40.125rem] h-[1.563rem] text-[0.875rem]">
          <div className="absolute top-[0.125rem] left-[27.438rem] tracking-[0.02em] inline-block w-[11.188rem] opacity-[0.8]">
            $65.20M
          </div>
          <div className="absolute top-[0.125rem] left-[18.125rem] tracking-[0.02em] opacity-[0.8]">
            $3.560M
          </div>
          <div className="absolute top-[0.063rem] left-[10.563rem] leading-[1.5rem] font-medium text-secondary-100 opacity-[0.8]">
            +12.00%
          </div>
          <div className="absolute top-[0.125rem] left-[0rem] tracking-[0.02em] font-medium inline-block w-[6.5rem] opacity-[0.8]">
            Bitcoin
          </div>
          <img
            className="absolute h-[96%] w-[3.74%] top-[0%] right-[0%] bottom-[4%] left-[96.26%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/iconmore.svg"
          />
        </div>
        <div className="absolute top-[1.875rem] left-[1.875rem] text-[1.313rem] font-semibold">
          Last Visit
        </div>
        <div className="absolute top-[5.125rem] left-[2.063rem] w-[39.688rem] h-[1.125rem] text-[0.75rem] text-text-10">
          <div className="absolute top-[0rem] left-[18.5rem]">Date</div>
          <div className="absolute top-[0rem] left-[10.625rem] inline-block w-[5.688rem]">
            Department
          </div>
          <div className="absolute top-[0rem] left-[27rem] inline-block w-[12.688rem]">
            Prescriptiom
          </div>
          <div className="absolute top-[0rem] left-[0rem] inline-block w-[3.625rem]">{`Doctor `}</div>
        </div>
      </div>
      <div className="absolute top-[21.938rem] left-[17.313rem] w-[22.5rem] h-[39.563rem] text-[1.25rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-mini bg-background-color-2 shadow-[4px_4px_33px_rgba(0,_0,_0,_0.05)] w-[22.5rem] h-[37.875rem]" />
        <div className="absolute top-[1.875rem] left-[1.875rem] text-[1.313rem] tracking-[0.03em] font-semibold text-stroke">
          Patient Information
        </div>
        <div className="absolute top-[32.5rem] left-[-2.312rem] w-[18.688rem] h-[2.75rem]">
          <b className="absolute top-[-0.937rem] left-[3.75rem]">Eye Sight</b>
          <div className="absolute top-[1.375rem] left-[3.75rem] font-medium font-overpass-mono flex items-center w-[10.063rem]">
            -6.0|-6.5
          </div>
        </div>
        <div className="absolute top-[27.938rem] left-[-2.312rem] w-[18.688rem] h-[2.75rem]">
          <b className="absolute top-[-0.937rem] left-[3.75rem]">
            Chronic Disease
          </b>
          <div className="absolute top-[1.375rem] left-[3.75rem] font-medium font-overpass-mono flex items-center w-[10.063rem]">
            Blood Pressur
          </div>
        </div>
        <div className="absolute top-[23.375rem] left-[-2.312rem] w-[18.688rem] h-[2.75rem]">
          <b className="absolute top-[-0.937rem] left-[3.75rem]">Blood Group</b>
          <div className="absolute top-[1.375rem] left-[3.75rem] font-medium font-overpass-mono flex items-center w-[10.063rem]">
            B+ve
          </div>
        </div>
        <div className="absolute top-[18.813rem] left-[-2.312rem] w-[18.688rem] h-[2.75rem]">
          <b className="absolute top-[-0.937rem] left-[3.75rem]">Gender</b>
          <div className="absolute top-[1.375rem] left-[3.75rem] font-medium font-overpass-mono flex items-center w-[10.063rem]">
            Male
          </div>
        </div>
        <div className="absolute top-[14.25rem] left-[-2.312rem] w-[18.688rem] h-[2.75rem]">
          <b className="absolute top-[-0.937rem] left-[3.75rem]">
            Date of Birth
          </b>
          <div className="absolute top-[1.375rem] left-[3.75rem] font-medium font-overpass-mono flex items-center w-[10.063rem]">
            14-07-2004
          </div>
        </div>
        <div className="absolute top-[6.313rem] left-[-2.312rem] w-[18.688rem] h-[2.75rem]">
          <b className="absolute top-[-0.937rem] left-[3.75rem]">Name :</b>
          <div className="absolute top-[1.188rem] left-[3.75rem] font-medium font-overpass-mono flex items-center w-[10.063rem]">
            Mohammad Ahmadullah Khan
          </div>
        </div>
        <img
          className="absolute top-[5.688rem] left-[12.188rem] rounded-xl w-[8.375rem] h-[8.563rem] object-cover"
          alt=""
          src="/patient-image@2x.png"
        />
      </div>
    </div>
  );
};

export default DoctorDashboard;
