interface User {
  id: number;
  name: string;
  sname: string;
  lname: string|null;
}

const developer: User = { id: 1, name: "Naftaly", sname: "Boro", lname: "Mwaura" };
console.log("TypeScript runner active:", developer);
console.log("I am ready for my interview tomorrow!");
console.log(8*8);

let value: number = 7;
console.log("The value of x is:", value);
console.log("The value of x squared is:", value*value);
console.log("I am happy to lerning TypeScript and JavaScript!");