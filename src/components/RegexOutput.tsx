import { useState } from "react";
import { Check, Copy, Play } from "lucide-react";
import { generateRegex } from "../helpers/generate-regex";

import type { CanvasBlock } from "../types";

type CanvasProps = {
  blocks: CanvasBlock[];
  onTestClick: () => void;
  setBlocks: React.Dispatch<React.SetStateAction<CanvasBlock[]>>;
};

export default function RegexOutput({
  blocks,
  setBlocks,
  onTestClick,
}: CanvasProps) {
  const regex = generateRegex(blocks);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!regex) return;

    try {
      await navigator.clipboard.writeText(regex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <aside className="w-full h-full p-4 bg-zinc-900 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-100">Generated Regex</h3>
        {regex && (
          <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
            {regex.length} chars
          </span>
        )}
      </div>

      <div className="relative group">
        <input
          type="text"
          value={regex}
          // onChange={(e) => {}}
          placeholder="(empty pattern)"
          className="w-full bg-black p-4 rounded-xl overflow-x-auto font-mono text-sm cursor-text text-zinc-300 border border-zinc-800 flex items-center focus:outline-none focus:ring-2 focus:ring-zinc-700"
          readOnly
        />
      </div>

      <button
        onClick={handleCopy}
        disabled={!regex}
        className={`
          w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer
          ${
            !regex
              ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
              : copied
              ? "bg-white/10 text-white-500 border border-white/20"
              : "bg-white text-black hover:bg-zinc-200 active:scale-[0.98]"
          }
        `}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied to clipboard!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Pattern
          </>
        )}
      </button>

      <button
        onClick={onTestClick}
        className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-purple-800 text-white hover:bg-purple-700 active:scale-[0.98]"
      >
        <Play className="w-4 h-4" />
        Test
      </button>

      <button
        onClick={() => setBlocks([])}
        className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer bg-red-600 text-white hover:bg-red-500 active:scale-[0.98]"
      >
        Clear All
      </button>
    </aside>
  );
}
