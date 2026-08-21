// Converts module path to slug
export function path2slug(path) {
  return path
    .replace("../../content/flashcards/", "")
    .replace("../content/flashcards/", "")
    .replace(/\.ts$/, "");
}

// Extracts only final file basename
export function path2id(path) {
  return path2slug(path).split("/").pop();
}
