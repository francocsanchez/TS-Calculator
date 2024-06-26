import { useState } from "react";
import { MenuItems, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const handleAddItem = (item: MenuItems) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updateItemAdd = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updateItemAdd);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const handleRemoveItem = (id: MenuItems["id"]) => {
    const newOrder = order.filter((item) => item.id !== id);

    setOrder(newOrder);
  };

  const saveOrder = () => {
    setTip(0);
    setOrder([]);
  };

  return { handleAddItem, handleRemoveItem, order, tip, setTip, saveOrder };
}
