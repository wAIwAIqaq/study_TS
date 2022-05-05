type FlipArguments<T> = T extends (...args: infer Args) => infer ReturnType
  ? (...args: Reverse<Args>) => ReturnType
  : never;
