type PickByType<T extends Record<string, any>, U extends unknown> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key];
};
