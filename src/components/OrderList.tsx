import { MenuItems, OrderItem } from "../types";
import { formatCurrency } from "../helpers";
import TotalLists from "./TotalLists";
import SubTotalList from "./SubTotalList";

type OrderListProps = {
  order: OrderItem[];
  handleRemoveItem: (id: MenuItems["id"]) => void;
};
export default function OrderList({ order, handleRemoveItem }: OrderListProps) {
  return (
    <div
      className={
        order.length ? "" : "h-screen flex justify-center items-center"
      }
    >
      {order.length ? (
        <>
          <TotalLists order={order} />

          {order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-200 last-of-type:border-0 py-3"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className=" font-black text-sm">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                className="bg-red-600 h-6 w-6 rounded-full text-white font-bold"
                onClick={() => handleRemoveItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
          <SubTotalList order={order}/>
        </>
      ) : (
        <div className="text-center  font-bold text-2xl text-gray-400">
          <p>La orden está vacía.</p>
        </div>
      )}
    </div>
  );
}
