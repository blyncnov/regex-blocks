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
    <div>
      <div className="w-full relative hidden md:block">
        <div className="w-full h-screen grid grid-cols-1 md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r min-h-screen overflow-y-scroll">
            <Sidebar />
          </div>

          {/* Canvas */}
          <div className="md:col-span-2 overflow-auto min-h-screen overflow-y-scroll hide-scrollbar">
            <Canvas blocks={canvasBlocks} setBlocks={setCanvasBlocks} />
          </div>

          {/* Output */}
          <div className="md:col-span-1 border-t md:border-t-0 md:border-l min-h-screen overflow-y-scroll">
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
            className={`w-full fixed inset-0 bg-white/10 backdrop-blur flex items-end md:items-center md:justify-end hide-scrollbar z-50 transition-all duration-500 ease-in-out ${
              showTestModal ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setShowTestModal(false)}
          >
            <div
              className={`bg-white shadow-2xl w-full h-auto max-h-[80vh] md:max-h-screen rounded-tr-2xl rounded-tl-2xl md:rounded-none! py-4 md:py-0 md:h-screen md:max-w-xl overflow-y-scroll hide-scrollbar transform transition-transform duration-300 ease-out ${
                showTestModal
                  ? "translate-y-0 md:translate-x-0"
                  : "translate-y-full md:translate-x-full"
              }`}
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

      <div className="w-full md:hidden min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-sm mx-auto">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
              <svg
                className="w-10 h-10 text-indigo-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-semibold text-white mb-2">
            Larger screen required
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 mb-6">
            This tool is optimized for desktop and tablet devices. Please switch
            to a larger screen to continue.
          </p>

          {/* Decorative dots */}
          <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-indigo-300 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse delay-75" />
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </div>
  );
}
