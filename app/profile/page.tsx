import ButtonCustom from "@/components/ButtonCustom";
import Sidenav from "@/components/Sidenav";
import UpdatePassword from "@/components/UpdatePassword";
import UpdateProfile from "@/components/UpdateProfile";
import {
  CameraIcon,
  Edit,
  HelpCircle,
  Lock,
  QrCodeIcon,
  Trash2Icon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Profile = () => {
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

      {/* <UpdateProfile /> */}
      <UpdatePassword />

      <div className="pb-8 pt-4">
        <div className="flex">
          <div className="m-auto w-4/5">
            <div className="flex">
              <Sidenav />

              <div className="py-4 px-8 w-4/5">
                <div>
                  <div className="py-2 relative w-full">
                    <div className="py-2">
                      <h3 className="font-semibold text-2xl">
                        General settings
                      </h3>
                    </div>

                    <div className="pt-2 pb-8 flex gap-6">
                      <div>
                        <ButtonCustom
                          type="button"
                          variant="bg-green-500"
                          text="Edit profile"
                          icon={<Edit />}
                        />
                      </div>

                      <div>
                        <ButtonCustom
                          type="button"
                          variant="bg-black"
                          text="change password"
                          icon={<Lock />}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-md">
                    <div className="py-4">
                      <div className="flex">
                        <div className="h-204 w-24 rounded-full bg-white flex justify-center items-center">
                          <User2Icon className="text-gray-500" size={35} />
                        </div>

                        <div className="px-4 py-6">
                          <ButtonCustom
                            type="button"
                            variant="bg-black"
                            text="Upload photo"
                            icon={<CameraIcon />}
                          />
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="grid grid-cols-3 w-4/5 gap-4 py-2">
                      <div className="py-1">
                        <p className="text-light text-sm">name</p>
                        <h3 className=" text-lg font-semibold">Jeremy Ma</h3>
                      </div>

                      <div className="py-1">
                        <p className="text-light text-sm">email</p>
                        <h3 className=" text-lg font-semibold">
                          jeremyMa@gmail.com
                        </h3>
                      </div>

                      <div className="py-1">
                        <p className="text-light text-sm">phone</p>
                        <h3 className=" text-lg font-semibold">_</h3>
                      </div>

                      <div className="py-1">
                        <p className="text-light">gender</p>
                        <h3 className=" text-lg font-semibold">_</h3>
                      </div>
                    </div>
                  </div>

                  <div className="py-3"></div>
                </div>

                <hr />

                <div>
                  <div className="pb-2 pt-6">
                    <h3 className="font-semibold text-2xl">
                      Security settings
                    </h3>
                  </div>

                  <div className="py-4">
                    <div className="pt-2 pb-8">
                      <div>
                        <h3 className="text-lg font-semibold">API Keys</h3>
                      </div>

                      <div className="py-2 w-2/5">
                        <div className="pt-6 pb-4 border-b-[1.8px] border-b-gray-200 flex">
                          <p className="text-sm font-bold my-2">
                            **************M3Ks
                          </p>

                          <div className="pl-8">
                            <ButtonCustom
                              type="button"
                              variant="bg-black"
                              text="remove"
                              icon={<Trash2Icon />}
                            />
                          </div>
                        </div>

                        <div className="pt-6 pb-4 border-b-[1.8px] border-b-gray-200 flex">
                          <p className="text-sm font-bold my-2">
                            **************26iD
                          </p>

                          <div className="pl-8">
                            <ButtonCustom
                              type="button"
                              variant="bg-black"
                              text="remove"
                              icon={<Trash2Icon />}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="py-2 flex">
                        <ButtonCustom
                          type="button"
                          variant="bg-red-500"
                          text="delete account"
                        />

                        <HelpCircle
                          className="ml-6 cursor-pointer my-2"
                          size={25}
                        />
                      </div>
                    </div>
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

export default Profile;
