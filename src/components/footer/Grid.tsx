import React from "react";
import { Button } from "../ui/button";

type GridData = {
  id: number;
  title: string;
  label: string;
}[];

interface GridProps {
  data: GridData;
}
export default function Grid({ data }: GridProps) {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-3 grid-row-auto auto-rows-[300px] gap-4 my-10 p-2 grid-flow-row-dense">
      <div className="bg-red-500 shadow-2xl rounded-xl col-span-3"></div>
      <div className="bg-blue-500 shadow-2xl rounded-xl row-span-2 col-span-2"></div>
      <div className="bg-emerald-500 shadow-2xl rounded-xl row-span-2"></div>
      <div className="bg-orange-500 shadow-2xl rounded-xl col-span-3"></div>
    </div>
  );
}

// {data.map((item, index) => (
//         <div
//           key={index}
//           className="bg-neutral-200 border-2 p-2 rounded-xl flex flex-col justify-center items-center"
//         >
//           <h1 className="text-xl text-gray-600 font-semibold">{item.title}</h1>
//           <Button>{item.label}</Button>
//         </div>
//       ))}
