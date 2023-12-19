//import { nanoid } from "nanoid";
import { Queries, ThemeColors, type colShades } from "./theme";
import type { CssProperties } from "./types";
import { cssFunc } from "./cssFuncs";
import { browser } from "$app/environment";

export let stylesheet: HTMLStyleElement;
export let sheet: CSSStyleSheet | null;
export let SSRStyle = ``;
if (browser) {
  stylesheet = document.createElement("style");
  document.head.append(stylesheet);
  sheet = stylesheet.sheet;
} else {
  // sheet = {
  //   cssRules:{length: 40,},
  //   insertRule(e, a) {
  //     SSRStyle = SSRStyle + e;
  //   },
  // };
  // sheet=_
  // _.insertRule("wwwwwwwwwwwwwwwwwwwwwww")
}
let _currId = 0;
function nanoid(n: number) {
  _currId++;
  return _currId;
}
export function sudo(
  sudo: string,
  sty: CssProperties,
  cls?: string | null
): string {
  if (!cls) cls = "c" + nanoid(4);
  let Sudo,
    Query: keyof typeof Queries | string | null = null;

  if (sudo.split("|").length == 2) {
    [Query, Sudo] = sudo.split("|");
    if (Query in Queries) {
      //@ts-ignore
      Query = Queries[Query];
    }
  } else {
    Sudo = sudo;
  }
  let _ = `${Sudo?.replace(/&/g, "." + cls)}{${objToStyle(sty)}}`;

  if (Query) _ = `${Query}{${_}}`;
  try {
    sheet?.insertRule(_, sheet.cssRules.length);
  } catch (error) {
    console.log(error, sheet, stylesheet);
  }
  return cls;
}
export function css(sty: CssProperties, cls?: string | null) {
  if (!cls) cls = "c" + nanoid(4);
  try {
    sheet?.insertRule(`.${cls}{${objToStyle(sty)}}`, sheet.cssRules.length);
  } catch (error) {
    console.log(error);
  }
  return cls;
}
export function cls(
  sudoCls?: { [key: string]: CssProperties },
  wrapper?: { [key: string]: CssProperties },
  cls?: string
) {
  if (!cls) cls = "c" + nanoid(4);
  //css(sty, cls);
  if (sudoCls) {
    Object.keys(sudoCls).forEach((e) => {
      let _ = sudoCls[e];
      sudo(e, _, cls);
    });
  }

  return cls;
}

export function objToStyle(css: CssProperties) {
  // if (!clName) clName = nanoid(4)

  let _ = Object.keys(css) as (keyof CssProperties)[];
  let styles = _.map((e) => {
    let _css = css[e];
    if (cssFunc[e]) {
      //@ts-ignore
      return cssFunc[e](_css);
    }
  });
  let sty = styles.map((e) => e?.join(";")).join(";");
  //console.log();
  return sty;
}
