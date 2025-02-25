enum Colors {
  red = 31,
  green = 32,
  yellow = 33,
  blue = 34,
  magenta = 35,
  cyan = 36,
  white = 37,
}
type Color = keyof typeof Colors;

export const logColor = (message: string, color: Color) => {
  return console.log(`\x1b[${Colors[color]}m${message}\x1b[0m`);
};
