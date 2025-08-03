import StacksIcon from "@/assets/stacks-icon";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RiskTable = () => {
  const RISKS = [
    { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "critical" },
    { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "critical" },
  ];

  return (
    <table className="w-full border-separate border-spacing-0 rounded-lg border border-gray-soft-100 bg-white">
      <thead className="">
        <tr>
          {["Asset", "Contextual Risk"].map((header) => (
            <td
              key={header}
              className="border-b border-gray-soft-100 px-6 py-2.5 text-[0.875rem] font-normal leading-[1.25rem] text-gray-soft-400"
            >
              {header}
            </td>
          ))}
        </tr>
      </thead>

      <tbody>
        {RISKS.map((risk, index) => (
          <tr key={risk.ip + index} className="">
            <td className="flex items-center gap-2 border-b border-gray-soft-100 p-2.5">
              <StacksIcon className="h-7 w-8 shrink-0 md:h-9 md:w-9 lg:h-11 lg:w-11" />
              <div className="flex flex-col">
                <p className="mb-1 text-[0.75rem] font-semibold leading-[0.875rem] text-gray-soft-700">
                  {risk.name}
                </p>
                <span className="text-[0.625rem] font-medium leading-[0.625rem] text-gray-soft-500">
                  {risk.ip}
                </span>
              </div>
            </td>
            <td className="border-b border-gray-soft-100 px-6">
              <span className="rounded-[38px] bg-[#FFE2E0] px-4 py-1 text-[0.9375rem] font-semibold text-[#C6190D]">
                {risk.ip}
              </span>
            </td>
          </tr>
        ))}
        <tr>
          <td className="flex w-[175%] items-center justify-center py-3">
            <button className="">
              <ChevronLeft className="h-5 w-5 text-gray-soft-200" />
            </button>
            <span className="text-[0.875rem] text-gray-soft-500">
              Showing 1-2 of 2
            </span>
            <button className="">
              <ChevronRight className="h-5 w-5 text-gray-soft-400" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RiskTable;
