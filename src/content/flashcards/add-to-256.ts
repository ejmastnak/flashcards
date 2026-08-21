export const title = "Add to 256";

export function generate() {
  const a = 16 * (Math.floor(Math.random() * 15) + 1);
  const b = 256 - a;

  return {
    question: String(a),
    answer: String(b),
  };
}
