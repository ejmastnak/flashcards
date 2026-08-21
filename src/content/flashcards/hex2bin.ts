export const title = "hex2bin";

export function generate() {
  const x = Math.floor(Math.random() * 15) + 1;
  const hex = `0x${x.toString(16).toUpperCase()}`;
  const bin = `0x${x.toString(2).padStart(4, "0")}`;

  if (Math.random() < 0.5) {
    return {
      question: hex,
      answer: bin,
    };
  } else {
    return {
      question: bin,
      answer: hex,
    };
  }
}
