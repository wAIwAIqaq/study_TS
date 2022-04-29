type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, A]) => ReturnType
  : never;
