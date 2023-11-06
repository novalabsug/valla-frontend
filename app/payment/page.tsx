import ButtonCustom from "@/components/ButtonCustom";
import Button from "@/components/ButtonCustom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { QrCodeIcon, Smartphone } from "lucide-react";
import Link from "next/link";

const Payment = () => {
  return (
    <main>
      <Navbar />

      {/* // section */}
      <div className="pb-8 pt-16">
        <div className="flex">
          <div className="m-auto w-[90%]">
            <div className="flex">
              <div className="w-1/5">
                <div className="py">
                  <h3 className="text-lg font-semibold">Recent transactions</h3>
                </div>

                <div className="py-2">
                  <div className="bg-gray-50 rounded-md py-2 px-3 cursor-pointer mb-2">
                    <p className="font-semibold text-sm text-gray-500">
                      10 days ago
                    </p>

                    <p className="text-sm my-1 text-green-500">
                      <span className="font-semibold text-black">- amount</span>{" "}
                      UGX 23,500
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-md py-2 px-3 cursor-pointer mb-2">
                    <p className="font-semibold text-sm text-gray-500">
                      13 days ago
                    </p>

                    <p className="text-sm my-1 text-green-500">
                      <span className="font-semibold text-black">- amount</span>{" "}
                      UGX 113,500
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-md py-2 px-3 cursor-pointer mb-2">
                    <p className="font-semibold text-sm text-gray-500">
                      13 days ago
                    </p>

                    <p className="text-sm my-1 text-green-500">
                      <span className="font-semibold text-black">- amount</span>{" "}
                      UGX 243,500
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-4/5">
                <div className="py-4">
                  <div className="flex">
                    <div className="m-auto w-4/5">
                      <div className="grid grid-cols-2">
                        <div className="lg:block sm:block hidden border-r-2 border-r-gray-500 pt-10 pb-4 px-8">
                          <h3 className="text-2xl font-semibold text-center">
                            Switch to mobile phone device to scan code
                          </h3>

                          <div className="py-3 flex justify-center items-center">
                            <Smartphone size={50} className="text-green-500" />
                          </div>
                        </div>

                        <div className="lg:hidden sm:hidden py-8 flex justify-center flex-col items-center border-r-2 border-r-gray-500">
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
