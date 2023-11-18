import { X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import ButtonCustom from "./ButtonCustom";

const OpcComponent = ({
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
          <div className="text-center text-md">OPC's are valid for 24hrs</div>
        </div>

        <div className="flex">
          <div className="m-auto w-2/4">
            <form>
              <div className="py-2">
                <input
                  type="text"
                  name="code"
                  placeholder="UGX 500,000 max"
                  className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
                />
              </div>

              <div className="py-2">
                <select
                  name="paymentMethods"
                  id=""
                  className="focus:border-green-500 outline-none border-[1.8px] border-gray-200 py-3 w-full rounded-md cursor-pointer"
                  placeholder="Select preferred payment method"
                >
                  <option disabled>Preferred payment method</option>
                  <option
                    className="py-2 border-none outline-none"
                    value="momo"
                  >
                    MoMo Pay
                  </option>
                  <option
                    className="py-2 border-none outline-none"
                    value="momo"
                  >
                    Airtel Pay
                  </option>
                  <option
                    className="py-2 border-none outline-none"
                    value="momo"
                  >
                    Mastercard
                  </option>
                  <option
                    className="py-2 border-none outline-none"
                    value="momo"
                  >
                    Visa Card
                  </option>
                  <option
                    className="py-2 border-none outline-none"
                    value="momo"
                  >
                    Chipper Wallet
                  </option>
                </select>
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

        <div className="py-8 hidden">
          <p className="text-center">Your Code</p>
          <h3 className="my-2 font-bold text-3xl text-center">HVS7287</h3>
        </div>
      </div>
    </div>
  );
};

export default OpcComponent;
