import React from "react";

const sizeClasses = {
  txtRobotoRegular12: "font-normal font-roboto",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtInterExtraBold22: "font-extrabold font-inter",
  txtPoppinsBold30: "font-bold font-poppins",
  txtRobotoRegular14Gray70001: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
