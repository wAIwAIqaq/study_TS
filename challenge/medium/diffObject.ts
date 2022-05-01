type UnionDiff<U1, U2> = Exclude<U1, U2> | Exclude<U2, U1>;
type Diff<O extends Record<string, any>, O1 extends Record<string, any>> = {
  [Key in UnionDiff<keyof O, keyof O1>]: Key extends keyof O
    ? O[Key]
    : Key extends keyof O1
    ? O1[Key]
    : never;
};
