// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Epinder',
  age: 38,
  hobbies: ['Sports', 'cooking'],
};

let favouriteActivites: string[];
favouriteActivites = person.hobbies;

console.log(person.name);
console.log(favouriteActivites);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
