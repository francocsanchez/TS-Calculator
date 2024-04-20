import { Dispatch, SetStateAction } from "react";

import { TypeTips } from "../types";

const tipOptions: TypeTips[] = [
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

type FormTipProps = {
  setTip: Dispatch<SetStateAction<number>>;
  saveOrder: () => void;
};

export default function FormTips({ setTip, saveOrder }: FormTipProps) {
  return (
    <>
      <h3 className="uppercase font-bold">Propina</h3>
      <form>
        {tipOptions.map((item) => (
          <div className="flex gap-2" key={item.id}>
            <input
              type="radio"
              name="tip"
              id={item.id}
              value={item.value}
              onChange={(e) => setTip(+e.target.value)}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))}
      </form>

      <button onClick={saveOrder} className="w-full bg-teal-500 hover:bg-teal-600 py-2 mt-5 uppercase text-white font-black rounded-lg">Guardar orden</button>
    </>
  );
}
