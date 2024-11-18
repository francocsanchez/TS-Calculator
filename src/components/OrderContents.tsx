import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { CalculatorAction, CalculatorState } from "../reducers/calculator-reducers";

type OrderContentsProps = {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
};

export default function OrderContents({ state, dispatch }: OrderContentsProps) {
  return (
    <>
      <h2 className="font-black uppercase text-xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {state.order.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b">
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 font-black text-white rounded-full"
              onClick={() => dispatch({ type: "remove-item", payload: { id: item.id } })}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
