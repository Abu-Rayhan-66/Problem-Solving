

type Car = {
    make: string;
    model: string;
    year: number;
  };
  
  const cars: Car[] = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "BMW", model: "3 Series", year: 2019 },
    { make: "Audi", model: "A4", year: 2023 },
  ];
  
  const sortByYear = (cars: Car[]): Car[] => {
    return cars.sort((a, b) => a.year - b.year);
  };
  
  console.log(sortByYear(cars));
 