import type { Dispatch } from "react";
import { CalculatorAction, CalculatorState } from "../reducers/calculator-reducers";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  state: CalculatorState;
  dispatch: Dispatch<CalculatorAction>;
};

export default function TipPercentageForm({ state, dispatch }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              value={tipOption.value}
              id={tipOption.id}
              name="tip"
              onChange={(e) => dispatch({ type: "add-tip", payload: { value: +e.target.value } })}
              checked={tipOption.value === state.tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
