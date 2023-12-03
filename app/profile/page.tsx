"use client";

import ApiKey from "@/components/ApiKey";
import ButtonCustom from "@/components/ButtonCustom";
import Sidenav from "@/components/Sidenav";
import UpdatePassword from "@/components/UpdatePassword";
import UpdateProfile from "@/components/UpdateProfile";
import { ApiKeys } from "@/constants/constants";
import {
  CameraIcon,
  Edit,
  HelpCircle,
  Lock,
  Menu,
  Plus,
  QrCodeIcon,
  Trash2Icon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Profile = () => {
  const [updateProfileModalDisplay, setUpdateProfileModalDisplay] =
    useState(false);
  const [updatePasswordModalDisplay, setUpdatePasswordModalDisplay] =
    useState(false);
  const [displaySideNav, setDisplaySideNav] = useState<boolean>(false);

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

      {updateProfileModalDisplay && (
        <UpdateProfile displayModal={setUpdateProfileModalDisplay} />
      )}

      {updatePasswordModalDisplay && (
        <UpdatePassword displayModal={setUpdatePasswordModalDisplay} />
      )}

      <div className="pb-8 pt-4">
        <div className="flex">
          <div className="m-auto lg:w-4/5 w-full">
            <div className="flex">
              <Sidenav
                setDisplaySideNav={setDisplaySideNav}
                displaySideNav={displaySideNav}
              />

              <div
                className={`py-2 px-4 cursor-pointer w-fit ${
                  displaySideNav ? "hidden" : "absolute top-[10%]"
                }`}
                onClick={() => setDisplaySideNav((prev) => !prev)}
              >
                <Menu size={35} />
              </div>

              <div className="py-4 lg:px-8 px-4 lg:w-4/5 w-full">
                <div>
                  <div className="py-2 relative w-full">
                    <div className="py-2">
                      <h3 className="font-semibold text-2xl">
                        General settings
                      </h3>
                    </div>

                    <div className="pt-2 pb-8 flex lg:flex-row flex-col gap-6">
                      <div
                        onClick={() =>
                          setUpdateProfileModalDisplay((prev: boolean) =>
                            prev ? false : true
                          )
                        }
                      >
                        <ButtonCustom
                          type="button"
                          variant="bg-green-500"
                          text="Edit profile"
                          icon={<Edit />}
                        />
                      </div>

                      <div
                        onClick={() =>
                          setUpdatePasswordModalDisplay((prev: boolean) =>
                            prev ? false : true
                          )
                        }
                      >
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

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-4/5 gap-4 py-2">
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
                      <div className="flex justify-between">
                        <h3 className="text-lg font-semibold">API Keys</h3>

                        <div className="w-fit">
                          <ButtonCustom
                            type="button"
                            variant="bg-black"
                            text="Add key"
                            icon={<Plus />}
                          />
                        </div>
                      </div>

                      <div className="py-2 w-2/5">
                        {ApiKeys.map((key: String, index: Number | any) => (
                          <ApiKey key={index} value={key} />
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="py-2 flex">
                        <div className="w-fit">
                          <ButtonCustom
                            type="button"
                            variant="bg-red-500"
                            text="delete account"
                          />
                        </div>

                        <div className="w-fit">
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
      </div>
    </main>
  );
};

export default Profile;
