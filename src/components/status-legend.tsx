import { cn } from "@/lib/utils";
import { ShieldCheck, ShieldX } from "lucide-react";

type StatusLegendProps = {
  status: "success" | "error" | "warning";
};

const StatusLegend = ({ status }: StatusLegendProps) => {
  return (
    <div className="mx-3 flex items-center gap-2">
      <div
        className={cn("grid h-6 w-6 place-content-center rounded-full", {
          "bg-[#02983E]": status === "success",
          "bg-[#E5372B]": status === "error",
          "bg-[#FF9500]": status === "warning",
        })}
      >
        {status === "success" ? (
          <ShieldCheck className="h-4 w-4 text-white" />
        ) : (
          <ShieldX className="h-4 w-4 text-white" />
        )}
      </div>
      <span
        className={cn("text-[0.9375rem] font-bold leading-[2.375rem]", {
          "text-[#02983E]": status === "success",
          "text-[#E5372B]": status === "error",
          "text-[#FF9500]": status === "warning",
        })}
      >
        Lorem
      </span>
    </div>
  );
};

export default StatusLegend;
