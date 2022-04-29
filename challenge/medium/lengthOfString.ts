type LengthOfString1<
  S extends string,
  CountArr extends unknown[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString1<Rest, [...CountArr, First]>
  : CountArr["length"];

type LengthOfString1Res = LengthOfString1<"">;
