type ZipRecursive<
  Arr extends unknown[],
  Other extends unknown[]
> = Arr extends [infer ArrFirst, ...infer ArrRest]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[ArrFirst, OtherFirst], ...ZipRecursive<ArrRest, OtherRest>]
    : []
  : [];
type tuple1 = [1, 2, 3, 4, 5];
type tuple2 = ["泰国", "新加坡", "印度尼西亚", "香蕉", "肉骨茶", "印尼九层塔"];

type ZipRecursiveResult = ZipRecursive<tuple1, tuple2>;
