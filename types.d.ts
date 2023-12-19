import type { ThemeColors, colShades, shadows } from "./theme";
type cursors =
  | "auto"
  | "default"
  | "none"
  | "context-menu"
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text"
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "grab"
  | "grabbing"
  | "all-scroll"
  | "col-resize"
  | "row-resize"
  | "n-resize"
  | "e-resize"
  | "s-resize"
  | "w-resize"
  | "ne-resize"
  | "nw-resize"
  | "se-resize"
  | "sw-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "zoom-in"
  | "zoom-out";

type JustifyContent =
  | "normal"
  | "left"
  | "right"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | "safe"
  | "unsafe"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end";
type ThemCol = keyof typeof ThemeColors;
export type BorderTypes = "solid" | "dotted" | "dashed";
export type Sides = "all" | "top" | "left" | "right" | "bottom";
export type unit =
  | `${string}px`
  | `${string}em`
  | `${string}rem`
  | `${string}%`
  | `${string}vw`
  | `${string}vh`
  | number
  | "auto"
  | "max-content";
export type color =
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgb(${string},${string},${string})`
  | `${ThemCol}-${colShades}`
  | "white"
  | "black";

export type shadowType = keyof typeof shadows;
export type CssProperties = {
  c?: [color, color]; ////bg,color
  w?: unit | "max-content"; ////width
  maxW?: unit; ////Maxwidth
  maxH?: unit; ////MaxHeight
  h?: unit; ///hieght
  wh?: [unit, unit]; //////width; height
  fs?: unit; //////fontSize
  fw?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  round?: unit | [unit, unit, unit, unit];
  p?: unit | [unit, unit] | [unit, unit, unit, unit];
  m?: unit | [unit, unit] | [unit, unit, unit, unit];
  mt?: unit;
  mb?: unit;
  mr?: unit;
  ml?: unit;
  bg?: color;
  fc?: color; ////forground
  br?: [BorderTypes?, color?, unit?, Sides?] | "none";
  ol?: "none";
  overflow?: "visible" | "hidden" | "clip" | "scroll" | "auto";
  t?: unit; //top
  l?: unit; //left
  b?: unit; ///bottom
  r?: unit; //right
  cont?: string; //content
  /** 
  * @param left
  * @param  top
  * @param right
  * @param bottom
  
  */
  absolute?: [unit?, unit?, unit?, unit?];
  pos?: "absolute" | "relative" | "sticky" | "static" | "fixed";
  op?: number;
  display?: "flex" | "grid" | "block" | "inline" | "inline-block" | "none";
  transition?: [`${number}s`];
  shadow?: shadowType | [shadowType, color];
  cursor?: cursors;
  /**
   * @param ColomnGrid [colunmNumber,columWidth,columGap]
   */
  cgrid?: [number, (unit | "1fr" | "auto")?, unit?]; /////Colomn Grid ///colNumber,
  gspan?: number;
  jc?: JustifyContent;
  ta?: "center" | "right" | "left";
  lh?: number;
  flex?: [
    unit,
    ("row" | "row-reverse" | "column" | "column-reverse")?,
    ("wrap" | "nowrap")?
  ]; ///gap,orientation
  transform?:
    | { x?: unit; y?: unit; rot?: `${number}deg`; scale?: number }
    | "none";
  z?: number;
};
