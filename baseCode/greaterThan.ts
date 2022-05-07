type GreaterThan<T extends number, U extends number> = GreaterThanByArr<
  BuildArray<T>,
  BuildArray<U>
>;
type GreaterThanByArr<T extends unknown[], U extends unknown[]> = T extends [
  infer FirstT,
  ...infer RestT
]
  ? U extends [infer FirstU, ...infer RestU]
    ? GreaterThanByArr<RestT, RestU>
    : true
  : false;
