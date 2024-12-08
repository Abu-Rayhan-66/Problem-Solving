

const getUniqueValues = (numbers: number[]): number[] => {
    return Array.from(new Set(numbers));
  };
  
  const numbers = [1, 2, 2, 3, 4, 4, 5, 6];
  console.log(getUniqueValues(numbers)); 
  