type StrLen<
  Str extends string,
  CountStr extends unknown[] = []
> = Str extends `${string}${infer Rest}`
  ? StrLen<Rest, [...CountStr, unknown]>
  : CountStr["length"];

type StrLenResult = StrLen<"apple">;
