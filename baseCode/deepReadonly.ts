type obj = {
  a: {
    b: {
      c: {
        d: () => "apple";
        e: {
          f: "banana";
        };
      };
    };
  };
};
type DeepReadonly<Obj extends Record<string, any>> = Obj extends never
  ? never
  : {
      readonly [Key in keyof Obj]: Obj[Key] extends object
        ? Obj[Key] extends Function
          ? Obj[Key]
          : DeepReadonly<Obj[Key]>
        : Obj[Key];
    };

type DeepReadonlyResult = DeepReadonly<obj>;
