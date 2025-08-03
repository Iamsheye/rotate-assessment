import React from "react";
import { ReactFlow, type Node, type Edge } from "@xyflow/react";
import CustomEdge from "./node-ui/custom-edge";
import CustomNode from "./node-ui/custom-node";
import "@xyflow/react/dist/style.css";

const nodeStyle: React.CSSProperties = {
  width: "max-content",
};

const FlowDiagram = () => {
  const nodes: Node[] = [
    {
      id: "node1",
      data: { label: "Loremipsumm", type: "start" },
      position: { x: 0, y: 100 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node2",
      data: { label: "Loremipsu", type: "process" },
      position: { x: 200, y: 100 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node3",
      data: { label: "Loremipsu", type: "process" },
      position: { x: 400, y: 100 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node4",
      data: {
        label: () => (
          <div className="text-center">
            <p className="text-[0.875rem] font-semibold leading-[0.875rem] text-gray-soft-700">
              Loremipsumdolorsit
            </p>
            <span className="text-[0.75rem] font-medium leading-[0.875rem] text-gray-soft-500">
              192.168.1.1
            </span>
          </div>
        ),
        type: "end",
        endStatus: "error",
      },
      position: { x: 750, y: 25 },
      type: "custom",
      style: nodeStyle,
    },
    {
      id: "node5",
      data: {
        label: () => (
          <div className="text-center">
            <p className="text-[0.875rem] font-semibold leading-[0.875rem] text-gray-soft-700">
              Loremipsumdolorsit
            </p>
            <span className="text-[0.75rem] font-medium leading-[0.875rem] text-gray-soft-500">
              192.168.1.2
            </span>
          </div>
        ),
        type: "end",
        endStatus: "error",
      },
      position: { x: 750, y: 175 },
      type: "custom",
      style: nodeStyle,
    },
  ];

  const edges: Edge[] = [
    { id: "edge1", source: "node1", target: "node2", type: "custom" },
    { id: "edge2", source: "node2", target: "node3", type: "custom" },
    { id: "edge3", source: "node3", target: "node4", type: "custom" },
    { id: "edge4", source: "node3", target: "node5", type: "custom" },
  ];

  return (
    <div className="h-[14.5rem] w-full">
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        edgeTypes={{ custom: CustomEdge }}
      ></ReactFlow>
    </div>
  );
};

export default FlowDiagram;
