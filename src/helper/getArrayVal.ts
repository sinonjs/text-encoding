export function getArrayVal(idxVal: number | number[]): number[] {
  return Array.isArray(idxVal) ? idxVal : [idxVal];
}
