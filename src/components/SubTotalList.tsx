import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type SubTotalListPropos = {
  order: OrderItem[];
};
export default function SubTotalList({ order }: SubTotalListPropos) {
  const totalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  return (
    <div className="mt-4">
      <p className="text-center">Total: <span className="font-semibold">{formatCurrency(totalAmount)}</span></p>
    </div>
  );
}
