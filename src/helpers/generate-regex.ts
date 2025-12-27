import type { CanvasBlock } from "../types";

export function generateRegex(blocks: CanvasBlock[]) {
  return blocks.map((b: CanvasBlock) => b.value).join("");
}
