import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import InsertEMailToWLBreadcrumb from "components/InsertEMailToWLBreadcrumb";
import InsertEMailToWLBrowsertabwith from "components/InsertEMailToWLBrowsertabwith";
import InsertEMailToWLLogin from "components/InsertEMailToWLLogin";

const InsertemailtoWLPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[175px] justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1024px] h-[1085px] md:px-5 relative w-full">
            <div className="absolute md:h-[1024px] h-[1085px] inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute h-[1024px] inset-x-[0] mx-auto object-cover top-[0] md:w-full"
                src="images/img_group66.png"
                alt="groupSixtySix"
              />
              <div className="absolute bottom-[0] h-[1010px] left-[0] w-[65%] md:w-full">
                <Img
                  className="h-[1010px] m-auto object-cover rounded-[38px] w-full"
                  src="images/img_pexelsomarhouchaimi3090072.png"
                  alt="pexelsomarhouch"
                />
                <InsertEMailToWLBreadcrumb className="absolute bottom-[10%] flex flex-col gap-8 inset-x-[0] items-center justify-center max-w-[687px] mx-auto w-full" />
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-300 flex flex-row items-center justify-start pt-2 px-2 rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex flex-row gap-[7px] items-center justify-start ml-[5px] w-[18%]">
                    <Img
                      className="h-3"
                      src="images/img_browsercontrols.svg"
                      alt="browsercontrols"
                    />
                    <div className="flex flex-col items-center justify-start pl-0.5 w-[77%]">
                      <InsertEMailToWLBrowsertabwith
                        className="flex flex-col items-center justify-start w-full"
                        userlanguage={
                          <Text className="text-gray-800 text-xs tracking-[0.20px] w-auto">
                            <span className="text-gray-800 font-roboto text-left font-normal">
                              Google{" "}
                            </span>
                            <span className="text-white-A700 font-roboto text-left font-normal">
                              .
                            </span>
                          </Text>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-row items-center justify-start p-[5px] shadow-bs w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[7px] w-[99%]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[8%] md:w-full">
                      <Img
                        className="common-pointer h-4 w-4"
                        src="images/img_arrowleft_gray_700.svg"
                        alt="arrowleft_One"
                        onClick={() => navigate(-1)}
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowright_gray_400.svg"
                        alt="arrowright_One"
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_home.svg"
                        alt="home"
                      />
                    </div>
                    <header className="bg-gray-100 flex md:flex-col flex-row md:gap-5 items-center justify-center rounded-[14px] w-full">
                      <Img
                        className="h-3 md:ml-[0] ml-[11px] md:mt-0 my-2 w-3"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <div className="flex md:flex-1 flex-col items-start justify-start ml-2.5 md:ml-[0] md:mt-0 my-1 w-[14%] md:w-full">
                        <div className="flex flex-row items-center justify-start w-auto">
                          <Text
                            className="text-gray-900 text-sm tracking-[0.25px] w-auto"
                            size="txtRobotoRegular14"
                          >
                            google.com
                          </Text>
                          <Text
                            className="text-gray-700_01 text-sm tracking-[0.25px] w-auto"
                            size="txtRobotoRegular14Gray70001"
                          >
                            /search
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-4 md:ml-[0] ml-[1001px] mr-2.5 md:mt-0 my-1.5 w-4"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                      />
                    </header>
                    <div className="flex flex-row gap-[13px] items-center justify-between w-[4%] md:w-full">
                      <Img
                        className="h-[22px] md:h-auto rounded-[50%] w-[22px]"
                        src="images/img_imageuserprofile.png"
                        alt="imageuserprofil"
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gradient  border-l-8 border-solid flex flex-col h-max inset-y-[0] items-center justify-start my-auto pink_200_blue_300_border2 right-[0] w-auto">
              <Img
                className="h-[948px] md:h-auto object-cover w-[548px]"
                src="images/img_184102.png"
                alt="184102"
              />
            </div>
            <InsertEMailToWLLogin
              className="absolute bg-gradient  border-l-8 border-solid font-inter inset-y-[0] my-auto pink_200_blue_300_border3 md:pl-10 sm:pl-5 pl-[82px] right-[0] w-[630px] md:w-full"
              actiongoogle={
                <Text className="font-semibold text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto">
                  <span className="text-blue_gray-400 font-poppins">
                    Continue with
                  </span>
                  <span className="text-blue_gray-900 font-poppins"> </span>
                  <span className="text-blue_gray-900 font-poppins font-bold">
                    Google
                  </span>
                </Text>
              }
              actionfacebook={
                <Text className="font-semibold text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto">
                  <span className="text-blue_gray-400 font-poppins">
                    Continue with
                  </span>
                  <span className="text-blue_gray-900 font-poppins"> </span>
                  <span className="text-blue_gray-900 font-poppins font-bold">
                    Facebook
                  </span>
                </Text>
              }
              actiontelegram={
                <Text className="font-semibold text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto">
                  <span className="text-blue_gray-400 font-poppins">
                    Continue with{" "}
                  </span>
                  <span className="text-blue_gray-900 font-poppins font-bold">
                    Telegram
                  </span>
                </Text>
              }
              actionemail={
                <Text className="font-semibold text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto">
                  <span className="text-blue_gray-400 font-poppins">
                    Continue with
                  </span>
                  <span className="text-blue_gray-900 font-poppins"> </span>
                  <span className="text-blue_gray-900 font-poppins font-bold">
                    E-mail
                  </span>
                </Text>
              }
            />
          </div>
        </div>
        <Img
          className="h-[55px] md:h-auto ml-36 md:ml-[0] mr-[1240px] object-cover w-[55px]"
          src="images/img_58.png"
          alt="FiftyEight"
        />
      </div>
    </>
  );
};

export default InsertemailtoWLPage;
