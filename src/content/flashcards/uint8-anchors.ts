export const title = "uint8 anchors";

export function generate() {
  const x = Math.floor(Math.random() * 15) + 1;

  const value = 16 * x;

  return {
    question: `0x${value.toString(16).toUpperCase().padStart(2, "0")}`,
    answer: String(value),
  };
}
