import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { CalculatorAction } from "../reducers/calculator-reducers";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<CalculatorAction>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <>
      <button
        className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => dispatch({ type: "add-item", payload: { item } })}
      >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
      </button>
    </>
  );
}
