"use client";
import ContextualRisk from "@/components/contextual-risk";
import DetailsColumn from "@/components/details-column";
import FlowChart from "@/components/flow-chart";
import RiskTable from "@/components/risk-table";
import StatusLegend from "@/components/status-legend";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-5 px-5 py-3 pb-24 tracking-[0.01em] lg:flex-row lg:px-9 lg:py-7 lg:pb-7">
      <DetailsColumn />

      <div className="order-1 h-full grow overflow-y-scroll rounded-2xl bg-white px-6 py-5 shadow-drop lg:order-2 lg:h-[calc(100dvh-3.5rem)]">
        <div className="mb-4 flex flex-col gap-4">
          <h2 className="text-[1.25rem] font-bold text-[#02983E]">
            Lorem Lorem Lorem
          </h2>
          <div className="flex flex-col gap-2.5 rounded-lg bg-gray-soft-25 px-2 py-4">
            <FlowChart />
            <hr className="h-[1px] w-full bg-gray-soft-100" />
            <div className="flex flex-wrap">
              <StatusLegend status="error" />
              <StatusLegend status="warning" />
              <StatusLegend status="success" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[1.25rem] font-bold text-[#02983E]">
            Lorem ipsum dolor sit
          </h2>

          <div className="flex flex-col flex-wrap gap-4 lg:flex-row">
            <div className="grow basis-[48%]">
              <RiskTable />
            </div>
            <div className="flex grow basis-[48%] flex-col justify-between gap-2 rounded-[20px] border border-[#F2F3F7] bg-white px-6 py-2 shadow-drop-lg">
              <ContextualRisk />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
