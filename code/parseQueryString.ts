type ParseParams<Str extends string> = Str extends `${infer Key}=${infer Value}`
  ? {
      [k in Key]: Value;
    }
  : Record<string, any>;
type MergeParams<A extends object, B extends object> = {
  [Key in keyof A | keyof B]: Key extends keyof A
    ? Key extends keyof B
      ? MergeValue<A[Key], B[Key]>
      : A[Key]
    : Key extends keyof B
    ? B[Key]
    : never;
};
type MergeValue<First, Others> = First extends Others
  ? First
  : Others extends unknown[]
  ? [First, ...Others]
  : [First, Others];

type ParseQueryString<Str extends string> =
  Str extends `${infer First}&${infer Rest}`
    ? MergeParams<ParseParams<First>, ParseQueryString<Rest>>
    : ParseParams<Str>;
type ParseQueryStringResult = ParseQueryString<"a=1&a=2&b=3">;
