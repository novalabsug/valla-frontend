import { X } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import ButtonCustom from "./ButtonCustom";

const TransactionLimit = ({
  displayModal,
}: {
  displayModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed z-20 p-8 top-[10%] left-[20%] right-[20%] bg-white rounded-lg shadow-md">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => displayModal((prev: boolean) => (prev ? false : true))}
      >
        <X size={29} />
      </div>

      <div className="py-2">
        <div className="py-2">
          <div>
            <Checkbox />
          </div>

          <div className="py-1">
            <h3 className="text-lg font-semibold">Set fixed limit</h3>
            <p>Applies to all</p>

            <div className="py-2">
              <Input
                className="w-full focus:border-green-500"
                placeholder="transaction limit"
              />
            </div>
          </div>
        </div>

        <div className="py-4">
          <div>
            <Checkbox />
          </div>

          <div className="py-1">
            <h3 className="text-lg font-semibold">
              Set limit for each payment method
            </h3>

            <div className="py-2">
              <div className="py-2 flex">
                <div className="w-[30%] px-2">
                  <select
                    name="paymentMethods"
                    id=""
                    className="focus:border-green-500 outline-none border-[1.8px] border-gray-200 py-2 w-full rounded-md cursor-pointer"
                  >
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

                <div className="w-[50%] px-2">
                  <Input
                    className="w-full focus:border-green-500"
                    placeholder="transaction limit"
                  />
                </div>

                <div className="w-[20%] px-2">
                  <ButtonCustom
                    text="Set limit"
                    type="button"
                    variant="bg-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionLimit;
