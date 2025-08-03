import { Inter } from "next/font/google";
import React from "react";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
});

const ContextualRisk = () => {
  const CONTEXTUAL_RISK = [
    { text: "Critical", value: 2, color: "#C6190D" },
    { text: "High", value: 0, color: "#E5372B" },
    { text: "Medium", value: 0, color: "#EBA622" },
    { text: "Low", value: 0, color: "#08B94E" },
  ];

  return (
    <>
      <p className="text-[1.125rem] font-medium leading-[1.75] text-gray-soft-500">
        Contextual Risk
      </p>
      <div
        className={`flex flex-wrap items-center justify-between gap-2 ${inter.className}`}
      >
        <div className="flex flex-col gap-4">
          {CONTEXTUAL_RISK.map((risk) => (
            <div
              key={risk.text}
              className="flex items-center gap-1 text-[1rem] leading-[1.25] text-[#383874]"
            >
              <span
                className={cn("h-2 w-2 rounded-full", `bg-[${risk.color}]`)}
              ></span>
              <span className="">{risk.value}</span>
              <span className="">{risk.text}</span>
            </div>
          ))}
        </div>

        <div className="grid h-36 w-36 place-content-center rounded-full border-[8px] border-[#C6190D]">
          <p className="text-[2.25rem] font-semibold leading-[1.75rem] text-[#656575]">
            2
          </p>
        </div>
      </div>
    </>
  );
};

export default ContextualRisk;
