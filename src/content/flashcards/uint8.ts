export const title = "uint8 to decimal";

export function generate() {
  const x = Math.floor(Math.random() * 256);

  return {
    question: `0x${(x).toString(16).toUpperCase().padStart(2, "0")}`,
    answer: String(x),
  };
}
