type UpperCaseFirst<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S;
type IsUpperFirst<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First>
    ? First extends Lowercase<First>
      ? false
      : true
    : false
  : false;
type CamelCase1<S extends string> = S extends `${infer First}-${infer Rest}`
  ? Rest extends ""
    ? S
    : IsUpperFirst<Rest> extends true
    ? `${First}-${CamelCase1<UpperCaseFirst<Rest>>}`
    : First extends ""
    ? `${First}-${CamelCase1<UpperCaseFirst<Rest>>}`
    : `${First}${CamelCase1<UpperCaseFirst<Rest>>}`
  : S;
type CamelCase1Res = CamelCase1<"foo--bar----baz">;
