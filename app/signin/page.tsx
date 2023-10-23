import ButtonCustom from "@/components/ButtonCustom";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <main>
      <nav className="py-6 px-12 flex justify-between">
        <Link href={"/"}>
          <h3 className="font-bold text-2xl">
            Val<span className="text-green-400">la</span>
          </h3>
        </Link>
      </nav>

      <div className="py-4">
        <div className="py-6"></div>

        <div className="flex">
          <div className="m-auto w-3/5 py-12">
            <div className="py-4">
              <h3 className="text-3xl font-light">
                Sign In to{" "}
                <span className="font-semibold">
                  Va<span className="text-green-500">ll</span>a
                </span>
              </h3>
              <p className="my-1 font-semibold">
                A secure link will be sent to your email to log in
              </p>
            </div>

            <form className="py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="py-2">
                  <input
                    type="text"
                    name="email"
                    placeholder="email ..."
                    className="border-[1.85px] outline-none py-2 px-4 rounded-lg w-full focus:border-2 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="py-3">
                <div className="flex">
                  <div>
                    <ButtonCustom
                      type="submit"
                      text="Sign In"
                      variant="bg-black"
                    />
                  </div>

                  <div className="py-2 px-8">
                    <p className="text-lg">
                      Or{" "}
                      <span className="font-semibold">
                        <Link href="/signup" className="text-green-500">
                          Sign Up
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
