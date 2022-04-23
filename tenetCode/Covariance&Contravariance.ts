interface Person {
  name: string;
  age: number;
}

interface Lcz {
  name: string;
  age: number;
  hobbies: string[];
}

let person: Person = {
  name: "",
  age: 0,
};

let lcz18YearsOld: Lcz = {
  name: "lcz",
  age: 18,
  hobbies: ["coding", "sleeping", "Gaming"],
};

person = lcz18YearsOld;

let printHobbies: (lcz18YearsOld: Lcz) => void;

printHobbies = (lcz18YearsOld) => {
  console.log(lcz18YearsOld.hobbies);
};

let printName: (person: Person) => void;

printName = (person) => {
  console.log(person.name);
};

printHobbies = printName;

// printName = printHobbies
interface Animal {
  name: string;
  hasTail: boolean;
}
let Dog: Animal = {
  name: "xiaohuang",
  hasTail: true,
};

// lcz18YearsOld = Dog;
