//  'aaa-bbb-ccc' => 'aaa-Bbb-Ccc';
type KebabCaseToCamelCase<Str extends string> =
  Str extends `${infer FirstItem}-${infer Rest}`
    ? `${FirstItem}${KebabCaseToCamelCase<Capitalize<Rest>>}`
    : Str;

type KebabCaseToCamelCaseRes = KebabCaseToCamelCase<"aaa-bbb-ccc">;

type CamelCaseToKebabCase<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First extends Capitalize<First>
      ? `-${Lowercase<First>}${CamelCaseToKebabCase<Rest>}`
      : `${First}${CamelCaseToKebabCase<Rest>}`
    : Str;
type CamelCaseToKebabCaseRes = CamelCaseToKebabCase<"aaaBbbCcc">;
