type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? IsUpperFirst<Rest> extends true
    ? `${Lowercase<First>}-${KebabCase<Rest>}`
    : `${Lowercase<First>}${KebabCase<Rest>}`
  : S;
type KebabCaseRes = KebabCase<"foo_bar">;
