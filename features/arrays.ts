const carMakers = ['Ford', 'Toyota', 'Honda'];
const dates = [new Date(), new Date()];

const carByMakes: string[][] = [['f150'], ['prado'], ['accord']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Flexible types

const importantDates = [new Date(), '2020-10-10'];
