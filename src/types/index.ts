// Type definitions
export interface BlockType {
  id: string;
  label: string;
  desc: string;
  color: string;
  category: string;
  editable?: boolean;
}

export interface CanvasBlock extends BlockType {
  uniqueId: number;
  value: string;
}
