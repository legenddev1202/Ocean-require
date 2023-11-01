import React from "react";

import { Img, Text } from "components";

const InsertEMailToWLBrowsertabwith = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start w-auto md:w-full">
          <div className="flex flex-row items-start justify-start w-auto">
            <Img
              className="h-full w-1.5"
              src="images/img_curvel.svg"
              alt="curvel"
            />
            <div className="bg-white-A700 flex flex-row gap-[9px] items-center justify-start p-2 rounded-tl-lg rounded-tr-lg">
              <Img
                className="h-4 md:h-auto object-cover w-4"
                src="images/img_favicon.png"
                alt="favicon"
              />
              {props?.userlanguage}
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_close.svg"
                alt="close"
              />
            </div>
            <Img
              className="h-full w-1.5"
              src="images/img_curver.svg"
              alt="curver"
            />
          </div>
          <Img className="h-5 w-[18px]" src="images/img_plus.svg" alt="plus" />
        </div>
      </div>
    </>
  );
};

InsertEMailToWLBrowsertabwith.defaultProps = {
  userlanguage: (
    <Text
      className="text-gray-800 text-xs tracking-[0.20px] w-auto"
      size="txtRobotoRegular12"
    >
      <span className="text-gray-800 font-roboto text-left font-normal">
        Google{" "}
      </span>
      <span className="text-white-A700 font-roboto text-left font-normal">
        .
      </span>
    </Text>
  ),
};

export default InsertEMailToWLBrowsertabwith;
