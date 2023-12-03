import { X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import ButtonCustom from "./ButtonCustom";
import OpcCard from "./OpcCard";

const OpcSidenav = ({
  displayModal,
}: {
  displayModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 lg:w-2/5 w-4/5 bg-white z-20 shadow-md">
      <div
        className="absolute top-6 right-4 cursor-pointer"
        onClick={() => displayModal((prev: boolean) => (prev ? false : true))}
      >
        <X size={35} />
      </div>

      <div className="py-12 px-8">
        <div className="py-4">
          <h3 className="text-lg font-semibold">Active OPCs</h3>

          <div className="py-4">
            {[
              { _id: "1", code: "TGS8265", date: "2 hours ago" },
              { _id: "2", code: "USE72654", date: "50 mins ago" },
            ].map(
              (
                opc: { _id: String; code: String; date: String },
                index: Number | any
              ) => (
                <OpcCard opc={opc} key={index} />
              )
            )}
          </div>

          <div className="py-12 hidden">
            <p className="text-3xl text-gray-500">
              No active OPCs, create new OPC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpcSidenav;
