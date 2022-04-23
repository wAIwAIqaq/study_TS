class Person {
  name: string;
  helloMsg: string;
  constructor() {
    this.name = "dog";
    this.helloMsg = "wang~wang~,i'm ";
  }

  hello(this: Person) {
    return this.helloMsg + this.name;
  }
}

const dog = new Person();
dog.hello.call({ name: 1 }); //     "strictBindCallApply": true 下会报错
type GetThisParameterType<T> = T extends (
  this: infer ThisType,
  ...args: any[]
) => any
  ? ThisType
  : unknown;
type GetThisParameterResult = GetThisParameterType<typeof dog.hello>;
