type Camelcase<Str extends string> =
  Str extends `${infer First}_${infer Right}${infer Rest}`
    ? `${First}${Uppercase<Right>}${Camelcase<Rest>}`
    : Str;

type CamelcaseResult = Camelcase<"red_apple">;
