"use client";

import { Menu, Plus, QrCodeIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ButtonCustom from "@/components/ButtonCustom";
import Sidenav from "@/components/Sidenav";
import { PaymentOptions, SelectedPaymentOptions } from "@/constants/constants";
import PaymentCard from "@/components/PaymentCard";
import AddPaymentMethod from "@/components/AddPaymentMethod";

const PaymentMethods = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [addPayMethodModalDisplay, setAddPayMethodModalDisplay] =
    useState(false);
  const [displaySideNav, setDisplaySideNav] = useState<boolean>(false);

  const checkIfAdded = (value: string): boolean => {
    const paymentMethod = SelectedPaymentOptions.filter(
      (method) => method.title === value
    );

    if (paymentMethod.length > 0) return true;

    return false;
  };

  return (
    <main>
      <nav className="py-6 lg:px-12 px-4 flex justify-between">
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

      {addPayMethodModalDisplay && (
        <AddPaymentMethod
          displayModal={setAddPayMethodModalDisplay}
          paymentMethod={selectedPaymentMethod}
        />
      )}

      <div className="pb-8 pt-4">
        <div className="flex">
          <div className="m-auto lg:w-4/5 w-[90%]">
            <div className="flex">
              <Sidenav
                setDisplaySideNav={setDisplaySideNav}
                displaySideNav={displaySideNav}
              />

              <div
                className={`py-2 cursor-pointer w-fit ${
                  displaySideNav ? "hidden" : "absolute top-[10%]"
                }`}
                onClick={() => setDisplaySideNav((prev) => !prev)}
              >
                <Menu size={35} />
              </div>

              <div className="py-4 px-8 lg:w-4/5 w-full">
                <div className="py-2 relative w-full">
                  <div className="py-2">
                    <p className="text-light">Payment Methods</p>
                    <h3 className="font-semibold text-2xl">
                      <span className="text-green-500">
                        {SelectedPaymentOptions.length}{" "}
                      </span>{" "}
                      Added
                    </h3>
                  </div>

                  <div className="py-4">
                    <div className="py-2">
                      <p className="text-light">Add Payment Method</p>
                    </div>

                    <div className="flex gap-6 lg:flex-row flex-col">
                      <select
                        name="paymentOptions"
                        id="paymentOptions"
                        title="Add Payment method"
                        className="py-2 px-3 rounded-md border-black border-[1.5px] w-[250px] cursor-pointer focus:border-[1px] focus:border-green-500"
                        onChange={(e) =>
                          setSelectedPaymentMethod((prev) => e.target.value)
                        }
                      >
                        <option value={undefined}>
                          -- Select payment method
                        </option>

                        {PaymentOptions.map((value, index) => (
                          <option
                            value={value.toLowerCase()}
                            key={index}
                            className="py-1"
                            disabled={checkIfAdded(value.toString())}
                          >
                            {value}
                          </option>
                        ))}
                      </select>

                      <div
                        className="w-fit"
                        onClick={() => {
                          if (selectedPaymentMethod == "") return;

                          setAddPayMethodModalDisplay((prev: boolean) =>
                            prev ? false : true
                          );
                        }}
                      >
                        <ButtonCustom
                          type={"submit"}
                          text="Add Payment"
                          variant="bg-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {SelectedPaymentOptions.map(
                      (
                        value: { title: String; cardNumber: String },
                        index: Number | any
                      ) => (
                        <PaymentCard
                          title={value.title}
                          cardNumber={value.cardNumber}
                          key={index}
                        />
                      )
                    )}
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

export default PaymentMethods;
