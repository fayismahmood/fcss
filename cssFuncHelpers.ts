import { ThemeColors } from "./theme";

export function unit(s: string | number) {
  if (typeof s == "number") {
    return `${s}px`;
  }
  if (typeof s == "string") {
    return s;
  }
}
export function col(s: string):string {
  let [col, shade] = s.split("-");
  //@ts-ignore
  if (col && shade && ThemeColors[col]) {
    //@ts-ignore
    return ThemeColors[col][shade];
  } else {
    return s;
  }
}
