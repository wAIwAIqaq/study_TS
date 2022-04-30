type Merge<F extends Record<string, any>, S extends Record<string, any>> = {
  [Key in keyof F | keyof S]: Key extends keyof S
    ? S[Key]
    : Key extends keyof F
    ? F[Key]
    : never;
};
