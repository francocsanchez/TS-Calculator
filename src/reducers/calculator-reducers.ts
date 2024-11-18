import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export type CalculatorAction =
  | { type: "save-order" }
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "add-tip"; payload: { value: number } };

export type CalculatorState = {
  menuItems: MenuItem[];
  order: OrderItem[];
  tip: number;
};
export const initialState: CalculatorState = {
  menuItems: menuItems,
  order: [],
  tip: 0,
};

export const calculatorReducer = (state: CalculatorState = initialState, action: CalculatorAction) => {
  if (action.type === "save-order") {
    return {
      ...state,
      tip: 0,
      order: [],
    };
  }

  if (action.type === "add-item") {
    const itemExit = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
    let updateOrder: OrderItem[] = [];
    if (itemExit) {
      updateOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      );
    } else {
      const newItem = { ...action.payload.item, quantity: 1 };
      updateOrder = [...state.order, newItem];
    }

    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === "remove-item") {
    let updateOrder = state.order.filter((item) => item.id != action.payload.id);
    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === "add-tip") {
    return {
      ...state,
      tip: action.payload.value,
    };
  }
  return state;
};
