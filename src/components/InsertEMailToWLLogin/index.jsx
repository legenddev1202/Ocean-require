import React from "react";

import { Img, Text } from "components";

const InsertEMailToWLLogin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[948px] ml-auto my-auto w-[87%] sm:w-full">
          <Img
            className="absolute h-[948px] inset-[0] justify-center m-auto object-cover w-[548px]"
            src="images/img_184101.png"
            alt="184101"
          />
          <div className="absolute flex flex-col items-center justify-start right-[2%] top-[1%] w-[141px]">
            <div className="bg-blue_gray-50 border border-deep_purple-400 border-solid flex flex-row gap-[10.5px] h-12 md:h-auto items-center justify-between pl-4 pr-2 py-1 rounded-lg w-full">
              <Text
                className="flex-1 text-[22px] text-deep_purple-A200 sm:text-lg md:text-xl w-auto"
                size="txtInterExtraBold22"
              >
                {props?.placeholder}
              </Text>
              <Img
                className="h-[23px] md:h-auto object-cover"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[257px] items-center justify-start left-[9%] w-[67%]">
          <div className="blue_300_01_amber_A200_border border-b border-solid flex flex-col gap-6 items-start justify-start py-4 w-[417px] sm:w-full">
            <Img
              className="h-[72px] w-[408px]"
              src="images/img_httpslottief_black_900.svg"
              alt="tclogonovoOne"
            />
            <Text
              className="leading-[100.00%] max-w-[406px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-gray-300_02"
              size="txtPoppinsBold30"
            >
              {props?.timezone}
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start w-[417px] sm:w-full">
            <div className="bg-white-A700 flex flex-row gap-4 h-12 md:h-auto items-center justify-start md:px-10 px-24 sm:px-5 py-1.5 rounded-[24px] w-full">
              <Img className="h-6 w-6" src="images/img_icon.svg" alt="icon" />
              {props?.actiongoogle}
            </div>
            <div className="bg-white-A700 flex flex-row gap-4 h-12 md:h-auto items-center justify-start md:px-10 px-24 sm:px-5 py-1.5 rounded-[24px] w-full">
              <Img
                className="h-6 w-6"
                src="images/img_icon_blue_a400.svg"
                alt="icon_One"
              />
              {props?.actionfacebook}
            </div>
            <div className="bg-white-A700 flex flex-row gap-4 h-12 md:h-auto items-center justify-start md:px-10 px-24 sm:px-5 py-1.5 rounded-[24px] w-full">
              <Img
                className="h-6 md:h-auto object-cover w-6"
                src="images/img_icon_white_a700.png"
                alt="icon_Two"
              />
              {props?.actiontelegram}
            </div>
            <div className="bg-white-A700 flex flex-row gap-4 h-12 md:h-auto items-center justify-start md:px-10 px-24 sm:px-5 py-1.5 rounded-[24px] w-full">
              <Img
                className="h-6 w-6"
                src="images/img_icon_deep_purple_a200.svg"
                alt="icon_Three"
              />
              {props?.actionemail}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

InsertEMailToWLLogin.defaultProps = {
  placeholder: "EN",
  timezone:
    "Lorem ipsum dolor sit amet. Qui dignissimos beatae aut exercitati iste est quia mollitia.",
  actiongoogle: (
    <Text
      className="text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto"
      size="txtPoppinsSemiBold14"
    >
      <span className="text-blue_gray-400 font-poppins font-semibold">
        Continue with
      </span>
      <span className="text-blue_gray-900 font-poppins font-semibold"> </span>
      <span className="text-blue_gray-900 font-poppins font-bold">Google</span>
    </Text>
  ),
  actionfacebook: (
    <Text
      className="text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto"
      size="txtPoppinsSemiBold14"
    >
      <span className="text-blue_gray-400 font-poppins font-semibold">
        Continue with
      </span>
      <span className="text-blue_gray-900 font-poppins font-semibold"> </span>
      <span className="text-blue_gray-900 font-poppins font-bold">
        Facebook
      </span>
    </Text>
  ),
  actiontelegram: (
    <Text
      className="text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto"
      size="txtPoppinsSemiBold14"
    >
      <span className="text-blue_gray-400 font-poppins font-semibold">
        Continue with{" "}
      </span>
      <span className="text-blue_gray-900 font-poppins font-bold">
        Telegram
      </span>
    </Text>
  ),
  actionemail: (
    <Text
      className="text-blue_gray-900 text-center text-sm tracking-[0.10px] w-auto"
      size="txtPoppinsSemiBold14"
    >
      <span className="text-blue_gray-400 font-poppins font-semibold">
        Continue with
      </span>
      <span className="text-blue_gray-900 font-poppins font-semibold"> </span>
      <span className="text-blue_gray-900 font-poppins font-bold">E-mail</span>
    </Text>
  ),
};

export default InsertEMailToWLLogin;
