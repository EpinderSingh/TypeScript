const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(1, 3));

const subtract = (a: number, b: number): void => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
