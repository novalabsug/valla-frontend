import { Trash2 } from "lucide-react";
import React, { useState } from "react";

const PaymentCard = ({
  title,
  cardNumber,
}: {
  title: String;
  cardNumber: String;
}) => {
  const [deleteButtonDisplay, setDeleteButtonDisplay] = useState(false);

  return (
    <div
      onMouseEnter={() => setDeleteButtonDisplay((prev) => true)}
      onMouseLeave={() => setDeleteButtonDisplay((prev) => false)}
      className="rounded-lg cursor-pointer border-2 border-gray-100 hover:border-[1.5px] hover:border-green-500 py-8 px-4 relative"
    >
      <div
        className={`${
          deleteButtonDisplay ? "absolute" : "hidden"
        } top-4 right-4 cursor-pointer`}
      >
        <Trash2 className="text-red-500" size={23} />
      </div>

      <div className="py-1">
        <h3 className="uppercase text-sm">{title}</h3>
      </div>

      <div className="py-1">
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
