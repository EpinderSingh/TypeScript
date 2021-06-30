let apple: number = 5;
let speed: string = 'Fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothingL: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green'];
let myNum: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true, true, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returs the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (const match of words) {
  if (match === 'green') {
    foundWord = true;
  }
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12, 23];
let numberAboveZero: boolean | number = false;

for (const i of numbers) {
  if (i > 0) {
    numberAboveZero = i;
    // console.log(numberAboveZero);
  }
}
console.log(numberAboveZero);
