export const title = "int8 anchors";

export function generate() {
  const x = 16 * (Math.floor(Math.random() * 16) - 8);

  return {
    question: `0x${((x + 256) % 256).toString(16).toUpperCase().padStart(2, "0")}`,
    answer: `${x}`,
  };
}
