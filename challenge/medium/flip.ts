type Flip<T extends Record<string, any>> = {
  [Key in keyof T as `${T[Key & (string | boolean | symbol)]}`]: Key;
};
