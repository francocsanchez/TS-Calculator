import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type TotalListsProps = {
  order: OrderItem[];
  tip: number;
};
export default function TotalLists({ order, tip }: TotalListsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip]);

  return (
    <div className="flex items-center justify-between">
      <h2 className=" text-3xl font-black">Consumos</h2>
      <p className="text-2xl text-teal-600">
        Total: <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </p>
    </div>
  );
}
