type CurriedFunc<Params, Return> = Params extends []
  ? () => Return
  : Params extends [infer Arg]
  ? (arg: Arg) => Return
  : Params extends [infer Arg, infer Rest]
  ? (arg: Arg) => CurriedFunc<Rest, Return>
  : never;
