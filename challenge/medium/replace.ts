type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer LeftRest}${From}${infer RightRest}`
  ? `${LeftRest}${To}${RightRest}`
  : S;
