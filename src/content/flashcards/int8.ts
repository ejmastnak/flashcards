export const title = "Int8 → decimal";

export function generate() {
  const x = Math.floor(Math.random() * 256) - 128;

  return {
    question: `0x${((x + 256) % 256).toString(16).toUpperCase().padStart(2, "0")}`,
    answer: String(x),
  };
}
