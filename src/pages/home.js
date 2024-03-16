import { useCallback } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FrameContainer from "../components/frame-container.js";

const Home = () => {
  const navigate = useNavigate();

  const onButtonmuicontainedTextClick = useCallback(() => {
    navigate("/hospital-login-page.js");
  }, [navigate]);

  const onButtonmuicontainedTextClicks = useCallback(() => {
    navigate("/doctor-login-page.js");
  }, [navigate]);

  return (
    <div className="w-full relative bg-black h-[117.438rem] overflow-hidden text-left text-[1rem] text-text-100 font-dm-sans">
      <div className="absolute top-[97.619rem] left-[-5.375rem] w-[100.75rem] h-[21.006rem] overflow-hidden">
        <div className="absolute top-[0rem] left-[0rem] w-[95.438rem] h-[21.006rem] overflow-hidden">
          <div className="absolute top-[1.944rem] left-[0rem] w-[95.438rem] h-[19.063rem]">
            <div className="absolute top-[2.625rem] left-[0rem] w-[91.938rem] flex flex-col items-center justify-start gap-[2.625rem_0rem]">
              <div className="flex flex-row items-start justify-center">
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.625rem] gap-[0rem_9.5rem]">
                  <div className="flex flex-col items-start justify-start gap-[0.938rem_0rem]">
                    <b className="relative leading-[1.75rem]">Product</b>
                    <div className="flex flex-col items-start justify-start gap-[0.688rem_0rem]">
                      <div className="relative font-medium opacity-[0.75]">
                        About
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Career
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Blog
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Special Offers
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.938rem_0rem]">
                    <b className="relative leading-[1.75rem]">Help</b>
                    <div className="flex flex-col items-start justify-start gap-[0.688rem_0rem]">
                      <div className="relative font-medium opacity-[0.75]">
                        FAQ
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Help Center
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Privacy Policy
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.938rem_0rem]">
                    <b className="relative leading-[1.75rem]">Partner</b>
                    <div className="flex flex-col items-start justify-start gap-[0.688rem_0rem]">
                      <div className="relative font-medium opacity-[0.75]">
                        Partner Hub
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Affiliates
                      </div>
                      <div className="relative font-medium opacity-[0.75]">
                        Advertise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[105.375rem] relative bg-text-100 h-[0.063rem] opacity-[0.2]" />
              <div className="w-[13.5rem] relative h-[1.125rem] text-[0.875rem] font-larsseit">
                <div className="absolute h-full w-[17.59%] top-[0%] left-[0%] font-medium inline-block">
                  Terms
                </div>
                <div className="absolute h-full w-[21.3%] top-[0%] left-[36.11%] font-medium inline-block">
                  Privacy
                </div>
                <div className="absolute h-full w-[24.07%] top-[0%] left-[75.93%] font-medium inline-block">
                  Cookies
                </div>
              </div>
            </div>
            <div className="absolute top-[1.25rem] left-[7.125rem] flex flex-col items-start justify-start gap-[2.375rem_0rem] text-[0.75rem]">
              <div className="flex flex-col items-start justify-start gap-[1.125rem_0rem]">
                <img
                  className="w-[5.225rem] relative h-[3.119rem]"
                  alt=""
                  src="/logo-lift.svg"
                />
                <div className="w-[18.625rem] relative font-medium inline-block opacity-[0.75]">{`Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.`}</div>
              </div>
              <div className="w-[8.438rem] relative h-[2.188rem]">
                <img
                  className="absolute h-full w-[25.93%] top-[0%] right-[0%] bottom-[0%] left-[74.07%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/twitter.svg"
                />
                <img
                  className="absolute h-full w-[25.93%] top-[0%] right-[37.04%] bottom-[0%] left-[37.04%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/facebook.svg"
                />
                <img
                  className="absolute h-full w-[25.93%] top-[0%] right-[74.07%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/linkedin.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0rem] left-[71.438rem] flex flex-col items-start justify-start gap-[1.25rem_0rem] font-anonymous-pro">
              <div className="w-[24rem] h-[6.063rem] flex flex-col items-start justify-start gap-[0.938rem_0rem]">
                <b className="w-[11.375rem] relative leading-[1.75rem] inline-block h-[1.75rem] shrink-0">
                  Subscribe
                </b>
                <div className="w-[15.5rem] relative rounded-md bg-text-100 box-border h-[3.125rem] text-[0.875rem] text-slategray font-larsseit border-[1.5px] border-solid border-lavender">
                  <img
                    className="absolute h-full w-[20.16%] top-[0%] right-[0%] bottom-[0%] left-[79.84%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/fill.svg"
                  />
                  <img
                    className="absolute h-[26%] w-[6.17%] top-[38%] right-[6.73%] bottom-[36%] left-[87.1%] max-w-full overflow-hidden max-h-full object-contain mix-blend-normal"
                    alt=""
                    src="/path.svg"
                  />
                  <div className="absolute h-[36%] w-[33.87%] top-[32%] left-[6.45%] inline-block mix-blend-normal">
                    Email address
                  </div>
                </div>
              </div>
              <div className="w-[15.5rem] relative text-[0.75rem] font-medium font-dm-sans inline-block opacity-[0.75]">
                <p className="m-0">{`Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.`}</p>
                <p className="m-0">WITH LOVE FROM ODE To Code</p>
              </div>
            </div>
          </div>
          <img
            className="absolute h-[63.97%] w-[24.38%] top-[0%] right-[3.6%] bottom-[36.03%] left-[72.02%] rounded-xl max-w-full overflow-hidden max-h-full opacity-[0.1] mix-blend-normal"
            alt=""
            src="/rectangle-2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[6.5rem] left-[-6.437rem] w-[102.875rem] h-[73.938rem] overflow-hidden text-center text-[1.25rem] font-antic-slab">
        <FrameContainer />
        <div className="absolute top-[9.25rem] left-[17.75rem] w-[67.375rem] h-[11.063rem] overflow-hidden text-left text-[6rem] font-droid-sans">
          <div className="absolute top-[0rem] left-[6.563rem] w-[60.813rem] h-[11.063rem] overflow-hidden">
            <div className="absolute top-[0rem] left-[2.5rem] tracking-[0.02em] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#ff3bff,_#ecbfbf_38.02%,_#5c24ff_75.83%,_#d94fd5)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[58.313rem] h-[6.875rem]">
              A Fast Blockchain.
            </div>
            <div className="absolute top-[6.375rem] left-[0rem] text-[4rem] tracking-[0.02em]">
              Connecting Care Effortlessly
            </div>
          </div>
        </div>
        <div className="absolute top-[22.813rem] left-[28.625rem] w-[45.625rem] h-[2.063rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0.438rem] tracking-[0.72px] leading-[2.063rem] inline-block w-[45.188rem]">
            Where every patient's journey begins with us
          </div>
        </div>
        <div className="absolute top-[25.063rem] left-[28.688rem] w-[45.5rem] h-[6.188rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0.313rem] tracking-[0.72px] leading-[2.063rem] inline-block w-[45.188rem]">
            Our technology performing fast blockchain (120K TPS) and it has
            guaranteed AI-based data security. Proof of Stake, its consensus
            algorithm enables unlimited speeds.
          </div>
        </div>
        <div
          className="cursor-pointer [text-decoration:none] absolute top-[33.063rem] left-[0rem] w-[102.875rem] h-[40.875rem] overflow-hidden text-[inherit] font-space-grotesk"

        >
          <div className="absolute top-[0rem] left-[0rem] w-[100.313rem] h-[40.875rem] overflow-hidden">
            <img
              className="absolute top-[1.188rem] left-[16.938rem] w-[73.375rem] h-[36.063rem]"
              alt=""
              src="/group-4.svg"
            />
            <img
              className="absolute top-[2.188rem] left-[0rem] w-[100.313rem] h-[38.688rem] object-cover"
              alt=""
              src="/123z-2101w020n001946bp15-1@2x.png"
            />
            <div className="absolute top-[0rem] left-[38.188rem] w-[21.063rem] h-[4.375rem]">
              <Link to="/hospital-login-page">
                <Button
                  className="absolute top-[0rem] left-[0rem] cursor-pointer"
                  disableElevation={true}
                  color="primary"
                  variant="contained"
                  sx={{ borderRadius: "0px 0px 0px 0px", height: 70 }}
                  onClick={onButtonmuicontainedTextClick}
                >
                  Get started
                </Button>
              </Link>
              <div
                className="absolute top-[0rem] left-[13.688rem]  bg-black box-border flex flex-row items-center justify-center cursor-pointer border-text-100"

              >
                <Link>
                  <Button
                    className="absolute top-[0rem] left-[0rem] cursor-pointer"
                    disableElevation={true}
                    color="primary"
                    variant="contained"
                    sx={{ borderRadius: "0px 0px 0px 0px", height: 70 }}
                    onClick={onButtonmuicontainedTextClicks}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
