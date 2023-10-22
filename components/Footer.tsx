import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="flex">
        <div className="m-auto w-4/5">
          <div className="py-6">
            <Link href={"/"}>
              <h3 className="font-bold text-3xl">
                Val<span className="text-green-400">la</span>
              </h3>
            </Link>

            <div className="pt-2 pb-3">
              <div className="flex gap-4">
                <Link href={"/"}>
                  <TwitterIcon
                    size={22}
                    className="hover:text-green-500 font-bold"
                  />
                </Link>

                <Link href={"/"}>
                  <LinkedinIcon
                    size={22}
                    className="hover:text-green-500 font-bold"
                  />
                </Link>

                <Link href={"/"}>
                  <InstagramIcon
                    size={22}
                    className="hover:text-green-500 font-bold"
                  />
                </Link>
              </div>
            </div>

            <hr />
          </div>

          <div className="py-4">
            <div className="flex gap-6">
              <Link href={"/"}>
                <h3 className="font-bold">Terms</h3>
              </Link>

              <Link href={"/"}>
                <h3 className="font-bold">Privacy</h3>
              </Link>

              <Link href={"/"}>
                <h3 className="font-bold">FAQs</h3>
              </Link>

              <Link href={"/"}>
                <h3 className="font-bold">Help</h3>
              </Link>
            </div>

            <p className="my-2">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
