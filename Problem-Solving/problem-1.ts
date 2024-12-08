

type Person = {
    name: string;
    age: number;
    gender: string;
  };
  
  const people: Person[] = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Rocky", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
  ];
  
  const filterAndMap = (people: Person[]): string[] => {
    return people.filter(person => person.gender === "male").map(person => person.name);
  };
  
  console.log(filterAndMap(people));
  