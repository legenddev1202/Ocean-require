import React from "react";

import { Button, Img } from "components";

const InsertEMailToWLBreadcrumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-8 items-center justify-start w-auto">
            <Button className="border border-deep_purple-A200 border-solid flex h-16 items-center justify-center p-[11px] rotate-[-180deg] rounded-[50%] w-16">
              <Img src="images/img_arrowleft.svg" alt="arrowleft" />
            </Button>
            <Img
              className="h-16 md:h-auto object-cover w-16"
              src="images/img_treatcoinbotno.png"
              alt="treatcoinbotno"
            />
          </div>
          <Img
            className="h-[120px] rounded-[32px] w-[120px]"
            src="images/img_httpslottief.svg"
            alt="httpslottief"
          />
          <div className="flex flex-row gap-8 items-center justify-end w-auto">
            <Img
              className="h-16 w-16"
              src="images/img_httpslottief_black_900.svg"
              alt="httpslottief_One"
            />
            <Button className="border border-deep_purple-A200 border-solid flex h-16 items-center justify-center p-[11px] rounded-[50%] w-16">
              <Img src="images/img_arrowright.svg" alt="arrowright" />
            </Button>
          </div>
        </div>
        <Img
          className="h-3 sm:h-auto object-cover w-full"
          src="images/img_vector.png"
          alt="vector"
        />
      </div>
    </>
  );
};

InsertEMailToWLBreadcrumb.defaultProps = {};

export default InsertEMailToWLBreadcrumb;
