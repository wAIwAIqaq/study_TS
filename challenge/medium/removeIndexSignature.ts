type RemoveIndexSignature<T> = {
  [Key in keyof T as Key extends `${infer Str}` ? Str : never]: T[Key];
};
// 索引签名不能构造成字符串字面量类型，因为它没有名字，而其他索引可以。
