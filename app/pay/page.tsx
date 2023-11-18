import ButtonCustom from "@/components/ButtonCustom";
import { QrCode, QrCodeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pay = () => {
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

      <div className="pb-8 pt-4">
        <div className="py-8">
          <div className="py-4">
            <div className="py-4">
              <h3 className="text-center text-2xl">
                Scan code to pay or use payment code
              </h3>
              <p className="my-2 text-center text-3xl font-bold">
                Amount due <span className="text-green-500">UGX 50000</span>
              </p>
            </div>

            <div className="flex py-4">
              <div className="w-2/4 border-r-[1.8px] border-r-slate-500">
                <div className="flex justify-center items-center">
                  <QrCode size={250} />
                </div>
              </div>

              <div className="w-2/4">
                <div className="flex justify-center items-center h-full">
                  <div className="w-fit py-4 px-6 border-[1px] border-slate-500 rounded-lg">
                    <h3 className="text-4xl font-light text-center">
                      IHT726354
                    </h3>
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

export default Pay;
