type ObjectEntries<
  T extends Record<string, any>,
  U extends keyof any = keyof T
> = U extends U ? (U extends keyof T ? [U, Required<T>[U]] : never) : never;
