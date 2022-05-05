type Reverse<T extends unknown[], ArrRes extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest
]
  ? Reverse<Rest, [First, ...ArrRes]>
  : ArrRes;
type ReverseRes = Reverse<["a", "b"]>;
