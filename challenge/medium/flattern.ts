type Flatten<T extends unknown[]> = T extends [infer FirstItem, ...infer Rest]
  ? FirstItem extends unknown[]
    ? [...Flatten<FirstItem>, ...Flatten<Rest>]
    : [FirstItem, ...Flatten<Rest>]
  : T;
