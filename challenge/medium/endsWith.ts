type EndsWith<
  T extends string,
  U extends string
> = T extends `${infer Prefix}${U}` ? true : false;
