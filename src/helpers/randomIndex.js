export function randomIndex(arr) {
  if (!Array.isArray(arr)) return 0;
  return Math.floor(Math.random() * arr.length);
}
