import { QrCodeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ButtonCustom from "@/components/ButtonCustom";
import Sidenav from "@/components/Sidenav";
import { PaymentOptions, SelectedPaymentOptions } from "@/constants/constants";
import PaymentCard from "@/components/PaymentCard";
import AddPaymentMethod from "@/components/AddPaymentMethod";

const PaymentMethods = () => {
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
              text="Scan / Generate"
              type="button"
              icon={<QrCodeIcon size={20} className="mx-2" />}
              variant="bg-black"
            />
          </Link>
        </div>
      </nav>

      <AddPaymentMethod />

      <div className="pb-8 pt-4">
        <div className="flex">
          <div className="m-auto w-4/5">
            <div className="flex">
              <Sidenav />

              <div className="py-4 px-8 w-4/5">
                <div className="py-2 relative w-full">
                  <div className="py-2">
                    <p className="text-light">Payment Methods</p>
                    <h3 className="font-semibold text-2xl">
                      <span className="text-green-500">2 </span> Added
                    </h3>
                  </div>

                  <div className="py-2">
                    <select
                      name="paymentOptions"
                      id="paymentOptions"
                      title="Add Payment method"
                      className="py-2 px-3 rounded-md bg-black text-white w-[200px] cursor-pointer"
                    >
                      {PaymentOptions.map((value, index) => (
                        <option
                          value={value.toLowerCase()}
                          key={index}
                          className="bg-black border-b-2 border-b-gray-600 outline-none py-1"
                        >
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="py-6">
                  <div className="grid grid-cols-3 gap-4">
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
