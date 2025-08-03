import React from "react";
import { Handle, Position } from "@xyflow/react";
import StacksIcon from "@/assets/stacks-icon";
import { ShieldCheck, ShieldX } from "lucide-react";
import MaskIcon from "@/assets/mask-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  StartNodeContent,
  ProcessNodeContent,
  EndNodeContent,
} from "./node-content";
import { cn } from "@/lib/utils";

interface CustomNodeProps {
  data: {
    label: string | (() => React.JSX.Element);
    type: "start" | "process" | "end";
    endStatus?: "success" | "error" | "warning";
  };
}

const CustomNode = ({ data }: CustomNodeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <div className="flex flex-col items-center gap-1.5">
            {data.type === "start" ? (
              <MaskIcon className="h-[3.25rem] w-[3.25rem]" />
            ) : (
              <div className="relative">
                <StacksIcon className="h-[3.25rem] w-[3.25rem]" />
                {data.type === "end" && (
                  <div
                    className={cn(
                      "absolute -right-1.5 -top-1.5 grid h-6 w-6 place-content-center rounded-full",
                      {
                        "bg-[#02983E]": data.endStatus === "success",
                        "bg-[#E5372B]": data.endStatus === "error",
                        "bg-[#FF9500]": data.endStatus === "warning",
                      },
                    )}
                  >
                    {data.endStatus === "success" ? (
                      <ShieldCheck className="h-4 w-4 text-white" />
                    ) : (
                      <ShieldX className="h-4 w-4 text-white" />
                    )}
                  </div>
                )}
              </div>
            )}
            {typeof data.label === "string" ? (
              <p className="text-[0.875rem] font-semibold leading-[0.875rem] text-gray-soft-700">
                {data.label}
              </p>
            ) : (
              <data.label />
            )}
          </div>
          {data.type === "start" && (
            <Handle type="source" position={Position.Right} />
          )}
          {data.type === "process" && (
            <>
              <Handle type="target" position={Position.Left} />
              <Handle type="source" position={Position.Right} />
            </>
          )}
          {data.type === "end" && (
            <Handle type="target" position={Position.Left} />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent asChild>
        <>
          {data.type === "start" && <StartNodeContent />}
          {data.type === "process" && <ProcessNodeContent />}
          {data.type === "end" && <EndNodeContent status={data.endStatus} />}
        </>
      </PopoverContent>
    </Popover>
  );
};

export default CustomNode;
