import React, { ReactNode } from "react";

type ButtonProps = {
  type: "button" | "submit";
  text: string;
  icon?: ReactNode;
  variant: "bg-green-500" | "bg-black" | "bg-red-500";
};

const ButtonCustom = ({ type, text, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`py-2 px-4 rounded-md ${variant} ${
        variant == "bg-black"
          ? "hover:bg-[#161616]"
          : variant == "bg-red-500"
          ? "hover:bg-red-700"
          : "hover:bg-green-700"
      } text-white text-base flex`}
      type={type}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default ButtonCustom;
