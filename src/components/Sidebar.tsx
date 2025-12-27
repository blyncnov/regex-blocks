import { BLOCKTYPES } from "../constants/blocks";

export default function Sidebar() {
  const categories: string[] = [...new Set(BLOCKTYPES.map((b) => b.category))];

  return (
    <aside className="w-full h-full bg-[#111] p-4">
      <div className="w-full flex flex-col gap-4">
        <header>
          <h2 className="text-lg font-semibold text-gray-200">Regex Blocks</h2>
        </header>

        {categories.map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              {category}
            </h3>
            <div className="space-y-2">
              {BLOCKTYPES.filter((b) => b.category === category).map(
                (block) => (
                  <div
                    key={block.id}
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("block", JSON.stringify(block));
                    }}
                    className={`${block.color} p-3 rounded-lg cursor-move hover:opacity-80 transition-opacity shadow-md`}
                  >
                    <div className="font-mono font-bold text-white">
                      {block.label}
                    </div>
                    <div className="text-sm font-medium text-white opacity-90 mt-1">
                      {block.desc}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
