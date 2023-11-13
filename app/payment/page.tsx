"use client";

import ButtonCustom from "@/components/ButtonCustom";
import Button from "@/components/ButtonCustom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { HelpCircle, QrCodeIcon, Smartphone } from "lucide-react";
import Link from "next/link";

const Payment = () => {
  return (
    <main>
      <Navbar />

      {/* // section */}
      <div className="py-8">
        <div className="flex">
          <div className="m-auto w-[90%]">
            <div className="px-4 pb-3">
              <div className="flex gap-8">
                <div className="w-fit">
                  <h3 className="text-lg font-semibold">
                    Set transaction limit (Daily)
                  </h3>
                  <p className="my-6"></p>

                  <div className="py-2">
                    <ButtonCustom
                      type="button"
                      text="Set limit"
                      variant="bg-black"
                    />
                  </div>
                </div>

                <div className="w-fit">
                  <div className="flex">
                    <h3 className="text-lg font-semibold">Generate OPC </h3>
                    <div className="ml-4">
                      <HelpCircle className="text-green-500 mt-1" size={15} />
                    </div>
                  </div>
                  <p className="">One-time Payment Codes are temporary</p>

                  <div className="py-2">
                    <ButtonCustom
                      type="button"
                      text="Create OPC"
                      variant="bg-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex py-6">
              <div className="w-1/5">
                <div className="pb-8 pt-4 px-4 bg-gray-500 rounded-lg h-[100px]">
                  <div className="py">
                    <h3 className="text-lg font-semibold text-white text-center">
                      Recent transactions
                    </h3>
                  </div>

                  <div className="py-2">
                    <div className="bg-gray-50 rounded-md py-2 px-3 cursor-pointer mb-4 shadow-md">
                      <p className="font-semibold text-sm text-gray-500">
                        10 days ago
                      </p>

                      <p className="text-sm my-1 text-green-500">
                        <span className="font-semibold text-black">
                          - amount
                        </span>{" "}
                        UGX 23,500
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-md py-2 px-3 cursor-pointer mb-4 shadow-md">
                      <p className="font-semibold text-sm text-gray-500">
                        13 days ago
                      </p>

                      <p className="text-sm my-1 text-green-500">
                        <span className="font-semibold text-black">
                          - amount
                        </span>{" "}
                        UGX 113,500
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-md py-2 px-3 cursor-pointer mb-4 shadow-md">
                      <p className="font-semibold text-sm text-gray-500">
                        13 days ago
                      </p>

                      <p className="text-sm my-1 text-green-500">
                        <span className="font-semibold text-black">
                          - amount
                        </span>{" "}
                        UGX 243,500
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-4/5">
                <div className="pl-10">
                  <div className="flex pt-8 pb-2">
                    <div className="m-auto w-4/5">
                      <div className="grid grid-cols-2">
                        <div className="hidden border-r-2 border-r-gray-500 pt-10 pb-4 px-8">
                          <h3 className="text-2xl font-semibold text-center">
                            Switch to mobile phone device to scan code
                          </h3>

                          <div className="py-3 flex justify-center items-center">
                            <Smartphone size={50} className="text-green-500" />
                          </div>
                        </div>

                        <div className="py-8 flex justify-center flex-col items-center border-r-2 border-r-gray-500">
                          <div className="p-2 w-fit h-fit border-2 rounded-lg border-gray-700 cursor-pointer">
                            <QrCodeIcon
                              size={120}
                              className="text-gray-700 hover:text-green-500"
                            />
                          </div>

                          <div className="py-4">
                            <h3 className="text-center text-2xl">
                              Scan to pay
                            </h3>
                          </div>
                        </div>

                        <div className="py-8 pl-8 pr-4">
                          <div className="py-3">
                            <h3 className="text-lg font-semibold">
                              Enter payment code to proceed
                            </h3>
                          </div>

                          <form>
                            <div className="py-2">
                              <input
                                type="text"
                                name="code"
                                placeholder="payment code ..."
                                className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
                              />
                            </div>

                            <div className="py-2">
                              <ButtonCustom
                                type="submit"
                                text="Pay with code"
                                variant="bg-black"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden">
                    <div className="w-full py-12">
                      <div className="py-3">
                        <p className="text-2xl font-light text-center">
                          Make Payment
                        </p>
                        <h3 className="text-lg font-semibold text-center">
                          Choose payment method
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Payment;
