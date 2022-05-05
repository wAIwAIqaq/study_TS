type TupleToNestedObject1<T extends unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? {
      [Key in First as Key extends keyof any
        ? Key
        : never]: Rest extends unknown[] ? TupleToNestedObject<Rest, U> : U;
    }
  : U;
type TupleToNestedObject1Res = TupleToNestedObject<["a"], string>;
