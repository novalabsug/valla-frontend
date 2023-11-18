"use client";

import ButtonCustom from "@/components/ButtonCustom";
import GeneratePayment from "@/components/GeneratePayment";
import Sidenav from "@/components/Sidenav";
import TableComponent from "@/components/TableComponent";
import { BellIcon, HelpCircle, QrCodeIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Dashboard = () => {
  const [genPaymentModalDisplay, setGenPaymentModalDisplay] = useState(false);
  const [notificationModalDisplay, setNotificationModalDisplay] =
    useState(false);

  return (
    <main>
      <nav className="py-6 px-12 flex justify-between">
        <Link href={"/"}>
          <h3 className="font-bold text-2xl">
            Val<span className="text-green-400">la</span>
          </h3>
        </Link>

        <div className="px-2">
          <Link href="/payment">
            <ButtonCustom
              text="Payment"
              type="button"
              icon={<QrCodeIcon size={20} className="mx-2" />}
              variant="bg-black"
            />
          </Link>
        </div>
      </nav>

      {genPaymentModalDisplay && (
        <GeneratePayment displayModal={setGenPaymentModalDisplay} />
      )}

      <div className="pb-8 pt-4">
        <div className="flex">
          <div className="m-auto w-4/5">
            <div className="flex">
              <Sidenav />

              <div className="py-4 px-8 w-4/5">
                <div className="py-2 relative w-full">
                  <div className="flex justify-between">
                    <div className="py-2">
                      <p className="text-light">Dashboard</p>

                      <div className="px-3 border-[1px] border-slate-400 rounded-lg mt-4 w-fit">
                        <h3 className="text-lg my-2">
                          <span className="text-green-500 font-bold text-xl">
                            223
                          </span>{" "}
                          payment codes generated
                        </h3>

                        <hr />

                        <h3 className="text-lg my-2">
                          <span className="text-green-500 font-bold text-xl">
                            243
                          </span>{" "}
                          payments made
                        </h3>
                      </div>
                    </div>

                    <div className="pt-8 pb-2">
                      <div className="py-2">
                        <p className="text-light">Vendor feature</p>
                      </div>

                      <div
                        onClick={() =>
                          setGenPaymentModalDisplay((prev) =>
                            prev ? false : true
                          )
                        }
                      >
                        <ButtonCustom
                          type="button"
                          variant="bg-black"
                          text="Generate payment code"
                          icon={<QrCodeIcon className="mr-2" />}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-0 top-2">
                    <div className="flex gap-4">
                      <div className="relative">
                        <BellIcon
                          className="cursor-pointer hover:text-green-500"
                          onClick={() =>
                            setNotificationModalDisplay((prev: boolean) =>
                              prev ? false : true
                            )
                          }
                        />

                        <div
                          className={`${
                            notificationModalDisplay ? "absolute" : "hidden"
                          } right-0 bg-white shadow-md rounded-md top-[110%] w-[250px] p-4 z-30`}
                        >
                          <h3 className="text-semibold my-2">Notifications</h3>

                          <hr />

                          <div className="py-2">
                            <div className="my-1 py-2">
                              <p className="text-sm text-light">
                                Your account has been verified successfully
                              </p>
                              <h3 className="text-sm font-bold my-2">
                                2 hours ago
                              </h3>

                              <hr />
                            </div>

                            <div className="my-1 py-2">
                              <p className="text-sm text-light">
                                Your account has been verified successfully
                              </p>
                              <h3 className="text-sm font-bold my-2">
                                2 hours ago
                              </h3>

                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <HelpCircle className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-4">
                  <div className="py-2">
                    <h3 className="text-lg font-semibold">
                      Recent transactions
                    </h3>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-md">
                    <TableComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
