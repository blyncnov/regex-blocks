import { useState } from "react";

import type { CanvasBlock } from "../types";

import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import RegexOutput from "../components/RegexOutput";

import RunSample from "../components/RunSample";
import { generateRegex } from "../helpers/generate-regex";

export default function Home() {
  const [canvasBlocks, setCanvasBlocks] = useState<CanvasBlock[]>([]);
  const [showTestModal, setShowTestModal] = useState<boolean>(false);

  return (
    <div className="w-full relative">
      <div className="w-full h-screen grid grid-cols-1 md:grid-cols-4">
        {/* Sidebar */}
        <div className="md:col-span-1 border-b md:border-b-0 md:border-r">
          <Sidebar />
        </div>

        {/* Canvas */}
        <div className="md:col-span-2 overflow-auto">
          <Canvas blocks={canvasBlocks} setBlocks={setCanvasBlocks} />
        </div>

        {/* Output */}
        <div className="md:col-span-1 border-t md:border-t-0 md:border-l">
          <RegexOutput
            blocks={canvasBlocks}
            setBlocks={setCanvasBlocks}
            onTestClick={() => setShowTestModal(true)}
          />
        </div>
      </div>

      {/* Test Modal */}
      {showTestModal && (
        <div
          className="w-full fixed inset-0 bg-white/10 backdrop-blur flex items-end md:items-center md:justify-end hide-scrollbar z-50 animate-fade-in"
          onClick={() => setShowTestModal(false)}
        >
          <div
            className="bg-white shadow-2xl w-full h-auto max-h-[80vh] md:max-h-screen rounded-tr-2xl rounded-tl-2xl md:rounded-none! py-4 md:py-0 md:h-screen md:max-w-xl overflow-y-scroll hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="overflow-y-auto">
              <RunSample regex={generateRegex(canvasBlocks)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
