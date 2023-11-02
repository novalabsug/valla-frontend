import React from "react";
import ButtonCustom from "./ButtonCustom";
import Link from "next/link";
import { X } from "lucide-react";

const UpdateProfile = () => {
  return (
    <div className="fixed z-20 p-8 top-[10%] left-[20%] right-[20%] bg-white rounded-lg shadow-md">
      <div className="absolute top-4 right-4 cursor-pointer">
        <X size={29} />
      </div>

      <div className="py-2">
        <h3 className="text-2xl font-semibold">Update Profile</h3>
      </div>

      <div className="">
        <form className="py-4">
          <div className="grid grid-cols-2 gap-4">
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

          <div className="grid grid-cols-2 gap-4">
            <div className="py-2">
              <input
                type="text"
                name="phone"
                placeholder="phone number ..."
                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
