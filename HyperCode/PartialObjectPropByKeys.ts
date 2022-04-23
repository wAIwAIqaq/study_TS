interface lcz {
  name: string;
  age: number;
  address;
}
/* 
=> 
interface lcz {
   name?: string;
   age?: number;
   address: string;
} */
// Omit 根据联合类型去除对象中的属性。
type OmitRes = Omit<lcz, "name" | "age">;
//Extract 从Obj中所有索引 keyof Obj里取出Key对应的索引，可以过滤掉Obj中一些没有的索引
type ExtractRes = Extract<keyof lcz, "name" | "age" | "aaa">;
// Pick 根据联合类型构造成新的只包含这些键值的对象
type PickRes = Pick<lcz, "name" | "age">;
// Partial 将对象中所有属性设置为可选。
type PartialRes = Partial<Pick<lcz, "name" | "age">>;

type PartialObjectPropByKeys<
  Obj extends Record<string, any>,
  Key extends keyof any
> = Copy<Partial<Pick<Obj, Extract<keyof Obj, Key>>> & Omit<Obj, Key>>;
// Copy 触发计算
type Copy<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key];
};

type PartialObjectPropByKeysRes = PartialObjectPropByKeys<lcz, "name" | "age">;
