import React from "react";

const PaymentCard = ({
  title,
  cardNumber,
}: {
  title: String;
  cardNumber: String;
}) => {
  return (
    <div className="rounded-lg cursor-pointer border-2 border-gray-100 hover:border-green-500 p-4">
      <div className="py-1">
        <h3 className="uppercase">{title}</h3>
      </div>

      <div className="pt-6 pb-2">
        <h3 className="text-lg font-semibold text-gray-600">
          {title == "MOMO Pay"
            ? `${cardNumber.slice(0, 5)}************`
            : cardNumber}
        </h3>
      </div>
    </div>
  );
};

export default PaymentCard;
