type PartialByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any = keyof Obj
> = Copy<Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>>;
// Copy 触发计算
// type Copy<Obj extends Record<string, any>> = {
//   [Key in keyof Obj]: Obj[Key];
// };
