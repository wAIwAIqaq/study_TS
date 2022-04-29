type Permutation<U, res = U> = [U] extends [never]
  ? []
  : U extends res
  ? Exclude<res, U> extends never
    ? [U]
    : [U, ...Permutation<Exclude<res, U>>]
  : never;
