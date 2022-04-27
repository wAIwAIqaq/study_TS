type MyReadonly2<T extends Record<string, any>, K extends keyof T = keyof T> = {
  readonly [Key in keyof T]: T[Key];
} & { [Key in keyof T as Key extends K ? never : Key]: T[Key] };
