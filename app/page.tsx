import Button from "@/components/ButtonCustom";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
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
        <nav className="py-6 px-12 flex justify-between">
          <Link href={"/"}>
            <h3 className="font-bold text-2xl">
              Val<span className="text-green-400">la</span>
            </h3>
          </Link>

          <div className="flex">
            <div className="px-4 relative">
              <div className="py-2 px-3 rounded-full flex bg-green-500 cursor-pointer">
                <User2Icon className="text-gray-50" />

                <div className="ml-2">
                  <p className="text-base text-white">Jeremy Ma</p>
                </div>
              </div>

              {/* // dropdown menu */}
              <div className="absolute top-[120%] w-[250px] p-4 bg-white shadow-md rounded-md">
                <div className="absolute top-2 right-3 cursor-pointer">
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
              <Button
                text="Sign In"
                type="button"
                icon={<LogIn size={20} className="mx-2" />}
                variant="bg-black"
              />
            </Link>
          </div>
        </nav>

        <Hero />

        {/* // section */}
        <div className="py-12">
          <div className="flex">
            <div className="m-auto w-3/5">
              <p className="text-center text-4xl font-light">
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
          <div className="flex">
            <div className="w-2/4 flex">
              <div className="py-2 w-3/5 m-auto">
                <img
                  src="images/img-2.jpg"
                  className="w-full h-auto object-cover rounded-lg"
                  alt="img"
                />
              </div>
            </div>

            <div className="w-2/4 pr-20 pl-4">
              <div className="py-6">
                <h3 className="text-center text-3xl font-semibold">
                  Key Features
                </h3>
              </div>

              <div className="py-2">
                <div className="grid grid-cols-2 gap-4">
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
