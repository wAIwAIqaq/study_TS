type CamelcaseUnion<Item extends string> =
  Item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelcaseUnion<Rest>}`
    : Item;
type CamelcaseUnionResult = CamelcaseUnion<"a_a_a" | "b_b_b" | "c_c_c">;
