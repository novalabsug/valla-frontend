import React from "react";
import ButtonCustom from "./ButtonCustom";

const OpcCard = ({
  opc,
}: {
  opc: { _id: String; code: String; date: String };
}) => {
  return (
    <div className="lg:py-2 py-4">
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="py-1">
          <h3>{opc.code}</h3>
        </div>

        <div className="py-2">
          <h3 className="font-bold text-sm text-gray-500">{opc.date}</h3>
        </div>

        <div>
          <ButtonCustom type="button" text="Cancel" variant="bg-red-500" />
        </div>
      </div>
    </div>
  );
};

export default OpcCard;
