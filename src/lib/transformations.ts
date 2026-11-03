import { all, create } from "mathjs";
const math = create(all, {});
export type Transform = { a:number; b:number; h:number; k:number };
export function transformX(x:number, t:Transform) { return t.b * (x - t.h); }
export function transformY(baseY:number, t:Transform) { return t.a * baseY + t.k; }
export function transformedValue(fn:(x:number)=>number, x:number, t:Transform) {
  return transformY(fn(transformX(x,t)),t);
}
export function formatNumber(n:number) {
  if (Number.isInteger(n)) return String(n);
  return Number(n.toFixed(3)).toString();
}
export function equationText(fn:string,t:Transform) {
  const inner = t.b === 1 ? `(x - ${formatNumber(t.h)})` : `${formatNumber(t.b)}(x - ${formatNumber(t.h)})`;
  return `y = ${formatNumber(t.a)} · (${fn.replace(/\bx\b/g, inner)}) + ${formatNumber(t.k)}`;
}
export function compileFunction(expression:string):(x:number)=>number {
  if (!expression || expression.length > 100 || /[^0-9a-zA-Z_+\-*/^().,\s]/.test(expression)) throw new Error("Use a valid function expression.");
  const compiled = math.compile(expression);
  return (x:number) => {
    const value = compiled.evaluate({x});
    return typeof value === "number" && Number.isFinite(value) ? value : NaN;
  };
}
export const parentFunctions = [
  {label:"Quadratic",expr:"x^2"},{label:"Absolute value",expr:"abs(x)"},
  {label:"Cubic",expr:"x^3"},{label:"Square root",expr:"sqrt(x)"},
  {label:"Sine",expr:"sin(x)"},{label:"Reciprocal",expr:"1/x"}
];
