type Replace<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefex}${From}${infer Suffix}`
  ? `${Prefex}${To}${Suffix}`
  : Str;

type ReplaceResult = Replace<"i'm a dog", "i'm", "you are">; // type ReplaceResult = "you are a dog"
