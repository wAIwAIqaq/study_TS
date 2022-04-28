type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer LeftRest}${From}${infer RightRest}`
  ? `${LeftRest}${To}${ReplaceAll<RightRest, From, To>}`
  : S;
type res = ReplaceAll<"foobar", "bar", "foo">;
