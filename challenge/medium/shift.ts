type Shift<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? Rest
  : never;
