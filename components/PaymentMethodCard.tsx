import React from "react";

const PaymentMethodCard = ({ title }: { title: String }) => {
  return (
    <div className="p-8 h-20 w-fit rounded-md items-center">
      <div className="flex justify-center items-center h-full w-full">
        <p className="text-3xl font-extrabold text-gray-300 hover:text-green-500 text-clip text-center cursor-pointer">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
