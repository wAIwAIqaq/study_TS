type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | " "
  | "\n"
  | "\t"}`
  ? TrimRight<Rest>
  : Str;
type TrimLeft<Str extends string> = Str extends `${
  | " "
  | "\n"
  | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : Str;
type TrimStr<Str extends string> = TrimLeft<TrimRight<Str>>;

type TrimResult = TrimStr<"    1  \n  \t  ">;
