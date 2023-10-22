import React from "react";
import ButtonCustom from "./ButtonCustom";

const Hero = () => {
  return (
    <div>
      <div className="pt-8 pb-2 flex">
        <div className="m-auto w-4/5 flex">
          <div className="w-3/5 pt-6 pb-2 pr-2">
            <h3 className="text-6xl font-bold">
              All in one <span className="text-green-400">digital</span> payment
              solution
            </h3>

            <div className="py-8">
              <p className="text-lg font-semibold text-gray-700">
                Simplify your financial life, make transactions easier, faster,
                and safer than ever before
              </p>
            </div>

            <div className="pt-4 pb-6">
              <ButtonCustom
                type="button"
                variant="bg-green-500"
                text="Get Started"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
