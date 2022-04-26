declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [Key in keyof T]: Awaited<T[Key]>;
}>;
