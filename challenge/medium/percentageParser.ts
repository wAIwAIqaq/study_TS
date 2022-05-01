type PercentageParser<A extends string> = A extends `+${infer Num}%`
  ? ["+", Num, "%"]
  : A extends `-${infer Num}%`
  ? ["-", Num, "%"]
  : A extends `${infer Num}%`
  ? ["", Num, "%"]
  : A extends `+${infer Num}`
  ? ["+", Num, ""]
  : A extends `-${infer Num}`
  ? ["-", Num, ""]
  : A extends `${infer Num}`
  ? ["", Num, ""]
  : never;
