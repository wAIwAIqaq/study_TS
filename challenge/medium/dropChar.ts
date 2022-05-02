type DropChar<
  S,
  C extends string = ""
> = S extends `${infer First}${C}${infer Rest}`
  ? `${First}${DropChar<Rest, C>}`
  : S;
