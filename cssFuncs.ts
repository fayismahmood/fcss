import { col, unit } from "./cssFuncHelpers";
import { shadows } from "./theme";
import type { CssProperties } from "./types";

export let cssFunc: Required<{
  [key in keyof CssProperties]: (t: CssProperties[key]) => string[];
}> = {
  /**
   * 
   * @param t [foreground-color,background-color]
   * @returns 
   */
  c(t = ["#fffff", "#00000"]) {
    let [fr, bg] = t;

    return [`background-color:${col(bg)}`, `color:${col(fr)}`];
  },
  /**
   * 
   * @param t ["none"]
   * @returns 
   */
  ol(t) {
    return [`outline:none`];
  },
  /**
   * 
   * @param t width
   * @returns 
   */
  w(t = 0) {
    return [`width:${unit(t)}`];
  },
 /**
  * 
  * @param t height
  * @returns 
  */
  h(t = 0) {
    return [`height:${unit(t)}`];
  },
  /**
   * 
   * @param t top
   * @returns 
   */
  t(t = 0) {
    return [`top:${unit(t)}`];
  },
  /**
   * 
   * @param t left
   * @returns 
   */
  l(t = 0) {
    return [`left:${unit(t)}`];
  },
  b(t = 0) {
    return [`bottom:${unit(t)}`];
  },
  r(t = 0) {
    return [`right:${unit(t)}`];
  },
  maxW(t = 0) {
    return [`max-width:${unit(t)}`];
  },
  maxH(t = 0) {
    return [`max-height:${unit(t)}`];
  },
  overflow(t = "visible") {
    return [`overflow:${t}`];
  },
  pos(t = "static") {
    return [`position:${t}`];
  },
  op(t = 1) {
    return [`opacity:${t}`];
  },
  wh(t = [0, 0]) {
    let [width, height] = t;
    return [`width:${unit(width)}`, `height:${unit(height)}`];
  },
  flex(t) {
    return [
      `display:flex`,
      `gap:${unit(t?.[0] || 0)}`,
      `flex-direction:${t?.[1] || "row"}`,
      `flex-wrap:${t?.[2] || "nowrap"}`,
    ];
  },
  fs(t = 12) {
    return [`font-size:${unit(t)}`];
  },
  fw(t = 500) {
    return [`font-weight:${t}`];
  },
  cursor(t = "auto") {
    return [`cursor:${t}`];
  },
  round(t = 0) {
    if (Array.isArray(t) && t?.length == 4) {
      return [`border-radius:${t.map((e) => unit(e)).join(" ")}`];
    } else {
      return [`border-radius:${unit(t)}`];
    }
  },
  p(t = 0) {
    if (Array.isArray(t) && t?.length > 1) {
      return [`padding:${t.map((e) => unit(e)).join(" ")}`];
    } else if (typeof t != "object") {
      return [`padding:${unit(t)}`];
    }
    return [``];
  },
  m(t = 0) {
    if (Array.isArray(t) && t?.length > 1) {
      return [`margin:${t.map((e) => unit(e)).join(" ")}`];
    } else if (typeof t != "object") {
      return [`margin:${unit(t)}`];
    }
    return [``];
  },
  bg(t = "#fffff") {
    return [`background-color:${col(t)}`];
  },
  fc(t = "#fffff") {
    return [`color:${col(t)}`];
  },
  absolute(t) {
    let pos = [];
    t?.[0] ? pos.push(`left:${unit(t[0])}`) : "";
    t?.[1] ? pos.push(`top:${unit(t[1])}`) : "";
    t?.[2] ? pos.push(`right:${unit(t[2])}`) : "";
    t?.[3] ? pos.push(`bottom:${unit(t[3])}`) : "";
    return [`position:absolute`, ...pos];
  },
  cont(t = "") {
    //console.log(`content:"${t}"`);
    return [`content:"${t}"`];
  },
  display(t) {
    return [`display:${t}`];
  },
  transition(t) {
    return [`transition:${t}`];
  },
  shadow(t) {
    let c: string = "";
    let s: string = "";
    if (typeof t == "string") {
      //return [`box-shadow:${s}`]
      c = shadows[t].c;
      s = shadows[t].s;
    } else if (Array.isArray(t)) {
      c = t[1];
      s = shadows[t[0]].s;
    }
    let _s = s?.replace(/{c}/g, c);
    return [`box-shadow:${_s}`];
  },
  transform(t) {
    if(t=="none")return [`transform:none;`]
    return [
      `transform:${t?.x ? `translateX(${unit(t.x)})` : ""} ${
        t?.y ? `translateY(${unit(t.y)})` : ""
      } ${t?.scale ? `scale(${t.scale})` : ""}  `,
    ];
  },
  br(t) {
    if (!t) return [``];
    let _sides = `-${t[3]}`;
    if (t[3] == "all" || !t[3]) {
      _sides = ``;
    }
    console.log();

    if (t == "none") return [`border:none`];
    return [
      `border${_sides}:${t[0]} ${col(t[1] || "#fffff")} ${unit(t[2] || 1)}`,
    ];
  },
  cgrid(t) {
    return [
      `display:grid`,
      `grid-template-columns:repeat(${t?.[0] || 1},${unit(t?.[1] || "1fr")})`,
      `gap:${unit(t?.[2] || 20)}`,
    ];
  },
  gspan(t) {
    return [`grid-column: ${t || 1} span / ${t || 1} span;`];
  },
  jc(t) {
    return [`justify-content:${t}`]
  },
  ta(t) {
    return [`text-align:${t}`]
  },
  lh(t) {
    return [`line-height:${t}`]
    
  },
  z(t) {
    return [`z-index:${t}`]
  },
  mt(t) {
    return [`margin-top:${unit(t||0)}`]
  },
  mr(t) {
    return [`margin-right:${unit(t||0)}`]
  },
  mb(t) {
    return [`margin-bottom:${unit(t||0)}`]
  },
  ml(t) {
    return [`margin-left:${unit(t||0)}`]
  },

};
