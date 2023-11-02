import ButtonCustom from "@/components/ButtonCustom";
import Button from "@/components/ButtonCustom";
import Footer from "@/components/Footer";

import {
  AppWindow,
  LogIn,
  LogOut,
  QrCodeIcon,
  User2Icon,
  X,
} from "lucide-react";
import Link from "next/link";

const Payment = () => {
  return (
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
            <div className="absolute top-[120%] w-[250px] p-4 bg-white shadow-md rounded-md hidden">
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
