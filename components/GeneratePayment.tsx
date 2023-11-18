import React, { Dispatch, SetStateAction } from "react";
import ButtonCustom from "./ButtonCustom";
import { QrCode, X } from "lucide-react";

const GeneratePayment = ({
  displayModal,
}: {
  displayModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed z-20 p-8 top-[10%] left-[30%] right-[30%] bg-white rounded-lg shadow-md">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => displayModal((prev: boolean) => (prev ? false : true))}
      >
        <X size={29} />
      </div>

      <div className="py-4">
        <div className="py-3">
          <h3 className="text-lg text-center font-semibold">
            Enter cash amount
          </h3>
        </div>

        <div className="flex">
          <div className="m-auto w-2/4">
            <form>
              <div className="py-2">
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter cash amount to receive"
                  className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
                />
              </div>

              <div className="py-2 flex justify-center items-center">
                <div>
                  <ButtonCustom
                    type="submit"
                    text="Generate code"
                    variant="bg-black"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePayment;
