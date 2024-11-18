import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { calculatorReducer, initialState } from "./reducers/calculator-reducers";

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black uppercase">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-10 grid md:grid-cols-2">
        <div className=" pb-5 pr-5">
          <h2 className="text-4xl font-black uppercase">Menu</h2>
          <div className="space-y-2 mt-2">
            {state.menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContents state={state} dispatch={dispatch} />
              <TipPercentageForm state={state} dispatch={dispatch} />
              <OrderTotals state={state} dispatch={dispatch} />
            </>
          ) : (
            <>
              <p className="text-center">La order esta vacia</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
