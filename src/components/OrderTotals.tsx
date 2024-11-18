import { Dispatch, useMemo } from "react";
import { formatCurrency } from "../helpers";
import { CalculatorAction, CalculatorState } from "../reducers/calculator-reducers";

type OrderTotalsProps = {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
};

export default function OrderTotals({ state, dispatch }: OrderTotalsProps) {
  const subTotalAmount = useMemo(() => state.order.reduce((total, item) => total + item.quantity * item.price, 0), [state.order]);
  const tipAmount = useMemo(() => subTotalAmount * state.tip, [state.order, state.tip]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [state.order, state.tip]);
  return (
    <>
      <div className=" space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina: </h2>
        <p>
          Subtotal a pagar:{""} <span className="font-bold">{formatCurrency(subTotalAmount)}</span>{" "}
        </p>
        <p>
          Propina:{""} <span className="font-bold">{formatCurrency(tipAmount)}</span>{" "}
        </p>
        <p>
          Total a pagar:{""} <span className="font-bold">{formatCurrency(totalAmount)}</span>{" "}
        </p>
      </div>
      <button
        className="w-full font-black text-white bg-black p-3 uppercase disabled:opacity-20"
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: "save-order" })}
      >
        Guardar Orden
      </button>
    </>
  );
}
