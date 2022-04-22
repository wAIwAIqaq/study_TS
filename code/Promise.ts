interface PromiseConstructor {
  all<T extends readonly unknown[] | []>(
    values: T
  ): Promise<{
    -readonly [P in keyof T]: Awaited<T[P]>;
  }>;
  race<T extends readonly unknown[] | []>(
    values: T
  ): Promise<Awaited<T[number]>>;
}
