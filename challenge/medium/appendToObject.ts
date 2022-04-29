type AppendToObject<T, U extends string, V> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : V;
};
