

const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const composeFunctions = (num: number): number => addFive(double(square(num)));

console.log(composeFunctions(3)); 
