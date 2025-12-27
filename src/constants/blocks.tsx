import type { BlockType } from "../types";

// Define all regex block types with colors
export const BLOCKTYPES: BlockType[] = [
  // Character Classes
  {
    id: "digit",
    label: "\\d",
    desc: "Any digit",
    color: "bg-blue-500",
    category: "Characters",
  },
  {
    id: "word",
    label: "\\w",
    desc: "Word character",
    color: "bg-blue-500",
    category: "Characters",
  },
  {
    id: "space",
    label: "\\s",
    desc: "Whitespace",
    color: "bg-blue-500",
    category: "Characters",
  },
  {
    id: "any",
    label: ".",
    desc: "Any character",
    color: "bg-blue-500",
    category: "Characters",
  },
  {
    id: "not-digit",
    label: "\\D",
    desc: "Not a digit",
    color: "bg-blue-400",
    category: "Characters",
  },
  {
    id: "not-word",
    label: "\\W",
    desc: "Not word char",
    color: "bg-blue-400",
    category: "Characters",
  },
  {
    id: "not-space",
    label: "\\S",
    desc: "Not whitespace",
    color: "bg-blue-400",
    category: "Characters",
  },

  // Quantifiers
  {
    id: "zero-more",
    label: "*",
    desc: "Zero or more",
    color: "bg-purple-500",
    category: "Quantifiers",
  },
  {
    id: "one-more",
    label: "+",
    desc: "One or more",
    color: "bg-purple-500",
    category: "Quantifiers",
  },
  {
    id: "optional",
    label: "?",
    desc: "Optional",
    color: "bg-purple-500",
    category: "Quantifiers",
  },
  {
    id: "exact",
    label: "{n}",
    desc: "Exactly n times",
    color: "bg-purple-600",
    category: "Quantifiers",
    editable: true,
  },
  {
    id: "range",
    label: "{n,m}",
    desc: "Between n and m",
    color: "bg-purple-600",
    category: "Quantifiers",
    editable: true,
  },

  // Anchors
  {
    id: "start",
    label: "^",
    desc: "Start of string",
    color: "bg-green-500",
    category: "Anchors",
  },
  {
    id: "end",
    label: "$",
    desc: "End of string",
    color: "bg-green-500",
    category: "Anchors",
  },
  {
    id: "word-boundary",
    label: "\\b",
    desc: "Word boundary",
    color: "bg-green-600",
    category: "Anchors",
  },

  // Groups
  {
    id: "group",
    label: "( )",
    desc: "Capturing group",
    color: "bg-orange-500",
    category: "Groups",
    editable: true,
  },
  {
    id: "non-capture",
    label: "(?:)",
    desc: "Non-capturing",
    color: "bg-orange-600",
    category: "Groups",
    editable: true,
  },
  {
    id: "or",
    label: "|",
    desc: "Alternation (OR)",
    color: "bg-orange-400",
    category: "Groups",
  },

  // Character Sets
  {
    id: "char-set",
    label: "[abc]",
    desc: "Character set",
    color: "bg-yellow-500",
    category: "Sets",
    editable: true,
  },
  {
    id: "not-set",
    label: "[^abc]",
    desc: "Negated set",
    color: "bg-yellow-600",
    category: "Sets",
    editable: true,
  },
  {
    id: "range-set",
    label: "[a-z]",
    desc: "Range",
    color: "bg-yellow-500",
    category: "Sets",
    editable: true,
  },

  // Literals
  {
    id: "literal",
    label: "text",
    desc: "Literal text",
    color: "bg-pink-500",
    category: "Literal",
    editable: true,
  },
];
