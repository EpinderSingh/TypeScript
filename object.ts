// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Epinder',
  age: 38,
  hobbies: ['Sports', 'cooking'],
  role: [2, 'author'],
};

let favouriteActivites: string[];
favouriteActivites = person.hobbies;

console.log(person.name);
console.log(favouriteActivites);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
