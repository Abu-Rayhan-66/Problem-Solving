

const allNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (nums: number[]): number => {
  return nums.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

console.log(sumEvenNumbers(numbers)); 
