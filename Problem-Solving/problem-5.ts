

const modifyAge = (people: Person[], name: string, newAge: number): Person[] => {
    return people.map(person => 
      person.name === name ? { ...person, age: newAge } : person
    );
  };
  
  console.log(modifyAge(people, "Bob", 40));
  
  