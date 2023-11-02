import { AppWindow, CreditCard, LogOut, User2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidenav = () => {
  return (
    <div className="w-1/5">
      <div className="py-2">
        <div className="">
          <div className="py-2 my-2">
            <p className="text-lg font-semibold">Logged In as, </p>
            <p className="text-green-500 font-bold text-2xl">Jeremy Ma</p>
            <p className="text-sm text-gray-500">
              not verified / <span className="text-green-500">verified</span>
            </p>
          </div>

          <hr />

          <div className="py-4">
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
  );
};

export default Sidenav;
