import React, { Dispatch, SetStateAction } from "react";
import ButtonCustom from "./ButtonCustom";
import Link from "next/link";
import { X } from "lucide-react";

const UpdatePassword = ({
  displayModal,
}: {
  displayModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed z-20 lg:p-8 p-6 lg:top-[10%] top-[20%] lg:left-[20%] left-2 lg:right-[20%] right-2 bg-white rounded-lg shadow-md">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => displayModal((prev: boolean) => (prev ? false : true))}
      >
        <X size={29} />
      </div>

      <div className="py-2">
        <h3 className="lg:text-2xl text-xl font-semibold">
          Change account password
        </h3>

        <p>
          <span className="font-bold text-lg">Note:</span> you will be logged
          out of your current account
        </p>
      </div>

      <div className="">
        <form className="py-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="py-2">
              <div className="py-2">
                <label htmlFor="password">Enter current account password</label>
              </div>

              <input
                type="password"
                name="password"
                placeholder="password ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="py-2">
              <div className="py-2">
                <label htmlFor="password">Enter new account password</label>
              </div>

              <input
                type="password"
                name="password"
                placeholder="password ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>

            <div className="py-2">
              <div className="py-2">
                <label htmlFor="password">Confirm new account password</label>
              </div>

              <input
                type="password"
                name="password"
                placeholder="password ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>
          </div>

          <div className="py-3">
            <div>
              <ButtonCustom type="submit" text="update" variant="bg-black" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
