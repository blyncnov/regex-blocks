import { Trash2 } from "lucide-react";
import type { BlockType, CanvasBlock } from "../types";

type CanvasProps = {
  blocks: CanvasBlock[];
  setBlocks: React.Dispatch<React.SetStateAction<CanvasBlock[]>>;
};

export default function Canvas({ blocks, setBlocks }: CanvasProps) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const blockData = e.dataTransfer.getData("block");
    if (!blockData) return;

    const draggedBlock: BlockType = JSON.parse(blockData);

    const newBlock: CanvasBlock = {
      ...draggedBlock,
      uniqueId: Date.now() + Math.random(),
      value: draggedBlock.label,
    };

    setBlocks((prev) => [...prev, newBlock]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const removeBlock = (uniqueId: number): void => {
    setBlocks(blocks.filter((b) => b.uniqueId !== uniqueId));
  };

  const updateBlockValue = (uniqueId: number, newValue: string): void => {
    setBlocks(
      blocks.map((b) =>
        b.uniqueId === uniqueId ? { ...b, value: newValue } : b
      )
    );
  };

  return (
    <main
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="w-full canvas flex flex-wrap items-start justify-start gap-1.5 bg-[#0b0b0b] p-6 flex-1 min-h-screen overflow-y-scroll"
    >
      {blocks.length === 0 && (
        <div>
          <p className="opacity-40">Drag regex blocks here 🧱</p>
        </div>
      )}

      {blocks.map((block) => (
        <div key={block.uniqueId} className="relative group">
          <div className={`${block.color} p-2 rounded-lg shadow-lg`}>
            {block.editable ? (
              <input
                type="text"
                value={block.value}
                onChange={(e) =>
                  updateBlockValue(block.uniqueId, e.target.value)
                }
                className="bg-white bg-opacity-20 text-black font-mono font-bold px-2 py-1 rounded w-24 text-center"
              />
            ) : (
              <div className="font-mono font-bold text-white text-lg">
                {block.value}
              </div>
            )}
            <button
              onClick={() => removeBlock(block.uniqueId)}
              className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
