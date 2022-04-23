/* 
 ['a','b','c'] =>
 {
   a:{
        b:{
            c:'xxx'
        }
   }
 } */
type TupleToNestedObject<Tuple extends unknown[], Value> = Tuple extends [
  infer First,
  ...infer Rest
]
  ? {
      /*null、undifined不能作为索引类型的key，只有Symbol|number|string  */
      [Key in First as Key extends keyof any
        ? Key
        : never]: Rest extends unknown[]
        ? TupleToNestedObject<Rest, Value>
        : Value;
    }
  : Value;
type TupleToNestedObjectRest = TupleToNestedObject<
  ["a", "b", number, "c"],
  111
>;
