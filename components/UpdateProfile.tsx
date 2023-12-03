import React, { Dispatch, SetStateAction } from "react";
import ButtonCustom from "./ButtonCustom";
import Link from "next/link";
import { X } from "lucide-react";

const UpdateProfile = ({
  displayModal,
}: {
  displayModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed z-20 lg:p-8 p-4 lg:top-[10%] top-[25%] lg:left-[20%] left-2 lg:right-[20%] right-2 bg-white rounded-lg shadow-md">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => displayModal((prev: boolean) => (prev ? false : true))}
      >
        <X size={29} />
      </div>

      <div className="py-2">
        <h3 className="text-2xl font-semibold">Update Profile</h3>
      </div>

      <div className="">
        <form className="py-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="py-2">
              <input
                type="text"
                name="name"
                placeholder="full name ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
                value="Jeremy Ma"
              />
            </div>

            <div className="py-2">
              <input
                type="text"
                name="email"
                placeholder="email ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
                value="jeremyMa@gmail.com"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="py-2">
              <input
                type="text"
                name="phone"
                placeholder="phone number ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="py-2">
              <div className="py-2">
                <label htmlFor="password">Enter account password</label>
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

export default UpdateProfile;
