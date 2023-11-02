import ButtonCustom from "@/components/ButtonCustom";
import Sidenav from "@/components/Sidenav";
import TableComponent from "@/components/TableComponent";
import {
  AppWindow,
  BellIcon,
  HelpCircle,
  LogIn,
  LogOut,
  MessageSquareIcon,
  Plus,
  QrCodeIcon,
  User2Icon,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
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

      <div className="pb-8 pt-4">
        <div className="flex">
          <div className="m-auto w-4/5">
            <div className="flex">
              <Sidenav />

              <div className="py-4 px-8 w-4/5">
                <div className="py-2 relative w-full">
                  <div className="py-2">
                    <p className="text-light">Connected Applications</p>
                    <h3 className="font-semibold text-2xl">
                      <span className="text-green-500">2 Apps</span> connected
                    </h3>
                  </div>

                  <div className="py-2"></div>

                  <div className="py-2 flex gap-6">
                    <div>
                      <ButtonCustom
                        type="button"
                        variant="bg-green-500"
                        text="Connect new app"
                        icon={<Plus />}
                      />
                    </div>

                    <div>
                      <ButtonCustom
                        type="button"
                        variant="bg-black"
                        text="Generate code"
                        icon={<QrCodeIcon />}
                      />
                    </div>

                    <div>
                      <ButtonCustom
                        type="button"
                        variant="bg-black"
                        text="Activate vendor features"
                      />
                    </div>
                  </div>

                  <div className="absolute right-0 top-2">
                    <div className="flex gap-4">
                      <div className="relative">
                        <BellIcon className="cursor-pointer" />

                        <div className="absolute right-0 bg-white shadow-md rounded-md top-[110%] w-[250px] p-4 z-30 hidden">
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
