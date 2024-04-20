import { menuItems } from "./data/db";

import MenuItem from "./components/MenuItem";

import useOrder from "./hooks/useOrder";
import OrderList from "./components/OrderList";

function App() {
  const { handleAddItem, handleRemoveItem, order, tip, setTip, saveOrder } = useOrder();
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black uppercase">
          Calculadora de propinas y consumos
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto pt-10 grid md:grid-cols-2">
        <div className="p-4">
          <h2 className=" text-3xl font-black">Menu</h2>
          <div className=" space-y-1 mt-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                handleAddItem={handleAddItem}
              />
            ))}
          </div>
        </div>
        <div
          className={`
            ${order.length ? "p-4 " : ""}
            border border-dashed border-slate-300 rounded-lg space-y-10 `}
        >
          <OrderList order={order} handleRemoveItem={handleRemoveItem} setTip={setTip} tip={tip} saveOrder={saveOrder}/>
        </div>
      </main>
    </>
  );
}

export default App;
