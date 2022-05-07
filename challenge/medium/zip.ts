type Zip<T extends unknown[], U extends unknown[]> = T extends [
  infer FirstT,
  ...infer RestT
]
  ? U extends [infer FirstU, ...infer RestU]
    ? [[FirstT, FirstU], ...Zip<RestT, RestU>]
    : []
  : T;
type ZipRes = Zip<[1, 2, 3], ["1", "2"]>;
