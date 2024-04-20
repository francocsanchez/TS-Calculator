import { MenuItems } from "../types";

type MenuItemProps = {
  item: MenuItems;
  handleAddItem: (item: MenuItems) => void;
};

export default function MenuItem({ item, handleAddItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400  w-full p-3 flex justify-between rounded-lg hover:bg-teal-100 hover:border-teal-500"
      onClick={() => handleAddItem(item)}
    >
      <p className="">{item.name}</p>
      <p className=" font-black">$ {item.price}</p>
    </button>
  );
}
