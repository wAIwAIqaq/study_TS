type StringToUnion<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? First | StringToUnion<Rest>
    : never;

type StringToUnionResult = StringToUnion<"apple">;
