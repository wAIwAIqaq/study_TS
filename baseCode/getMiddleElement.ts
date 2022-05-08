type GetMiddleElement<T extends unknown[]> = T["length"] extends 2
  ? T
  : T extends [infer Head, ...infer Rest, infer Tail]
  ? GetMiddleElement<Rest>
  : T;
// type GetMiddleElementRes = GetMiddleElement<[]>;
// type GetMiddleElementRes = GetMiddleElement<[1, 2, 3, 4, 5]>;
// type GetMiddleElementRes = GetMiddleElement<[1, 2, 3, 4, 5, 6]>;
// type GetMiddleElementRes = GetMiddleElement<[() => string]>;
// type GetMiddleElementRes = GetMiddleElement<[() => number, "3", [3, 4], 5]>;
// type GetMiddleElementRes = GetMiddleElement<[() => number, () => string]>;
// type GetMiddleElementRes = GetMiddleElement<[never]>;
