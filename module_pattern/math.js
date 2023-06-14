export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export const privateValue = "This is private to this module only.";

const multiply = (x, y) => x * y;
export default multiply;
