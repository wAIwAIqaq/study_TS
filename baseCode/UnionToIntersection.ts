type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never;

type UnionToIntersectionResult = UnionToIntersection<
  { a: 1 } | { b: 2 } | { c: 3 }
>;
