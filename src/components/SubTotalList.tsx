import { useMemo, Dispatch, SetStateAction } from "react";

import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

import FormTips from "./FormTips";

type SubTotalListPropos = {
  order: OrderItem[];
  setTip: Dispatch<SetStateAction<number>>;
  saveOrder: () => void;
};
export default function SubTotalList({
  order,
  setTip,
  saveOrder,
}: SubTotalListPropos) {
  const totalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  return (
    <div className="mt-4">
      <p className="text-center">
        Total:{" "}
        <span className="font-semibold">{formatCurrency(totalAmount)}</span>
      </p>

      <FormTips setTip={setTip} saveOrder={saveOrder} />
    </div>
  );
}
