import { useState } from "react";

import type { CanvasBlock } from "../types";

import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import RegexOutput from "../components/RegexOutput";

export default function Home() {
  const [canvasBlocks, setCanvasBlocks] = useState<CanvasBlock[]>([]);

  console.log(canvasBlocks);

  return (
    <div className="w-full relative">
      {/* <header className="w-full p-4 bg-[#1d1d1d] sticky top-0 left-0 right-0">
        <p className="text-center text-white text-sm font-medium">
          Regex Blocks - Build regex patterns visually with drag-and-drop blocks
        </p>
      </header> */}

      <div className="w-full grid grid-cols-4 h-screen max-h-screen min-h-screen">
        <Sidebar />
        <Canvas blocks={canvasBlocks} setBlocks={setCanvasBlocks} />
        <RegexOutput blocks={canvasBlocks} setBlocks={setCanvasBlocks} />
      </div>
    </div>
  );
}
