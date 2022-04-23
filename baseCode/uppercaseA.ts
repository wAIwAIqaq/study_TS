type UppercaseA<Item extends string> = Item extends "a"
  ? Uppercase<Item>
  : Item;
type Union = "a" | "b" | "c";
type UppercaseAResult = UppercaseA<Union>;
