import { X } from "lucide-react";
import React from "react";
import ButtonCustom from "./ButtonCustom";

const AddPaymentMethod = () => {
  return (
    <div className="fixed z-20 p-8 top-[10%] left-[20%] right-[20%] bg-white rounded-lg shadow-md">
      <div className="absolute top-4 right-4 cursor-pointer">
        <X size={29} />
      </div>

      <div className="py-2">
        <h3 className="text-2xl font-semibold">Add payment method</h3>
        <p className="text-lg">VISA Card</p>
        <p>
          <span className="font-bold text-lg">Note:</span> your card number will
          be switched for a valla card number for security purposes
        </p>
      </div>

      <div className="">
        <form className="py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="py-2">
              <div className="py-2">
                <label htmlFor="cardNumber">Card Number</label>
              </div>

              <input
                type="text"
                name="cardNumber"
                placeholder="eg. 2345-9287-3837-2340"
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="py-2">
              <div className="py-2">
                <label htmlFor="expiry">Expiry date</label>
              </div>

              <input
                type="date"
                name="expiry"
                placeholder="eg. 09/26"
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>

            <div className="py-2">
              <div className="py-2">
                <label htmlFor="password">cvc</label>
              </div>

              <input
                type="text"
                name="cvc"
                placeholder="cvc ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>
          </div>

          <div className="py-3">
            <div>
              <ButtonCustom
                type="submit"
                text="Add payment method"
                variant="bg-black"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPaymentMethod;