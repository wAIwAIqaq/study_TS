type MyOmit<T, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[Key];
};
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }
// type MyOmitRes = MyOmit<Todo, "description">;
