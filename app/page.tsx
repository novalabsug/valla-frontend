"use client";

import Button from "@/components/ButtonCustom";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PaymentMethodCard from "@/components/PaymentMethodCard";
import { PaymentOptions } from "@/constants/constants";
import {
  AppWindow,
  LogIn,
  LogOut,
  QrCodeIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TextSelection,
  User2Icon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <Hero />

        {/* // section */}
        <div className="py-12">
          <div className="flex">
            <div className="m-auto lg:w-3/5 sm:w-4/5 w-[90%]">
              <p className="text-center lg:text-4xl sm:text-3xl text-2xl font-light">
                Generate a <span className="font-bold">single</span> payment QR
                code or reference code for{" "}
                <span className="font-bold">multiple</span> payment options
              </p>
            </div>
          </div>
        </div>

        {/* // section */}
        <div className="py-16">
          <div className="flex">
            <div className="m-auto w-4/5">
              <div className="py-6">
                <h3 className="text-center text-2xl font-semibold">
                  Supported payment options
                </h3>
              </div>

              <div className="flex justify-center flex-wrap gap-4">
                {PaymentOptions.map((card, index) => (
                  <PaymentMethodCard title={card} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* // section */}
        <div className="py-12">
          <div className="flex lg:flex-row flex-col">
            <div className="lg:w-2/4 w-full flex">
              <div className="py-2 w-3/5 m-auto">
                <img
                  src="images/img-2.jpg"
                  className="w-full h-auto object-cover rounded-lg"
                  alt="img"
                />
              </div>
            </div>

            <div className="lg:w-2/4 w-full lg:pr-20 pr-4 pl-4">
              <div className="py-6">
                <h3 className="text-center text-3xl font-semibold">
                  Key Features
                </h3>
              </div>

              <div className="py-2">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-0">
                  <div className="my-1 py-3 px-2 bg-gray-100 rounded-md w-full flex">
                    <div className="w-1/5">
                      <ShieldCheckIcon size={35} className="text-gray-700" />
                    </div>
                    <p className="mr-3 w-3/5">
                      - Encrypted payment credentials
                    </p>
                  </div>

                  <div className="my-1 py-3 px-2 bg-gray-100 rounded-md w-full flex">
                    <div className="w-1/5">
                      <QrCodeIcon size={35} className="text-gray-700" />
                    </div>
                    <p className="mr-3 w-3/5">- QR code payments</p>
                  </div>

                  <div className="my-1 py-3 px-2 bg-gray-100 rounded-md w-full flex">
                    <div className="w-1/5">
                      <TextSelection size={35} className="text-gray-700" />
                    </div>
                    <p className="mr-3 w-3/5">- Reference code payments</p>
                  </div>

                  <div className="my-1 py-3 px-2 bg-gray-100 rounded-md w-full flex">
                    <div className="w-1/5">
                      <SmartphoneIcon size={35} className="text-gray-700" />
                    </div>
                    <p className="mr-3 w-3/5">- In-App budgeting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
