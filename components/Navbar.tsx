import {
  AppWindow,
  CreditCard,
  LogIn,
  LogOut,
  User2Icon,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ButtonCustom from "./ButtonCustom";

const Navbar = () => {
  const [userDropdown, setUserDropdown] = useState(false);

  console.log(userDropdown);

  return (
    <nav className="py-6 px-12 flex justify-between">
      <Link href={"/"}>
        <h3 className="font-bold text-2xl">
          Val<span className="text-green-400">la</span>
        </h3>
      </Link>

      <div className="flex">
        <div className="px-4 relative">
          <div
            className="py-2 px-3 rounded-full flex bg-green-500 cursor-pointer"
            onClick={() => setUserDropdown((prev) => (prev ? false : true))}
          >
            <User2Icon className="text-gray-50" />

            <div className="ml-2">
              <p className="text-base text-white">Jeremy Ma</p>
            </div>
          </div>

          {/* // dropdown menu */}
          <div
            className={`top-[120%] w-[250px] p-4 bg-white shadow-md rounded-md ${
              userDropdown ? "absolute" : "hidden"
            }`}
          >
            <div
              className="absolute top-2 right-3 cursor-pointer"
              onClick={() => setUserDropdown((prev) => (prev ? false : true))}
            >
              <X />
            </div>

            <div className="py-2 border-b-2 border-b-gray-200">
              <div className="py-2 my-2">
                <p className="text-lg font-semibold">Jeremy Ma</p>
                <p className="text-sm text-gray-500">not verified</p>
                <p className="text-sm text-green-500">verified</p>
              </div>

              <Link href={"/dashboard"} className="my-2 flex">
                <AppWindow size={20} className="text-gray-800" />

                <div className="ml-2">
                  <p className="text-base ">Dashboard</p>
                </div>
              </Link>

              <Link href={"/payment-methods"} className="my-2 flex">
                <CreditCard size={20} className="text-gray-800" />

                <div className="ml-2">
                  <p className="text-base ">Payment Methods</p>
                </div>
              </Link>

              <Link href={"/profile"} className="my-2 flex">
                <User2Icon size={20} className="text-gray-800" />

                <div className="ml-2">
                  <p className="text-base ">Profile</p>
                </div>
              </Link>
            </div>

            <div className="py-2">
              <div className="flex">
                <LogOut />

                <div className="ml-2">
                  <p className="font-semibold">Log Out</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/signin">
          <ButtonCustom
            text="Sign In"
            type="button"
            icon={<LogIn size={20} className="mx-2" />}
            variant="bg-black"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
