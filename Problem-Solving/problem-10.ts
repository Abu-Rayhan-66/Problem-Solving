

type Student = {
    name: string;
    grades: number[];
  };
  
  const students: Student[] = [
    { name: "Alice", grades: [90, 80, 85] },
    { name: "Branden", grades: [70, 75, 80] },
    { name: "Nicola", grades: [85, 95, 90] },
  ];
  
  const sortStudentsByAverageGrade = (students: Student[]): Student[] => {
    return students.sort((a, b) => {
      const averageA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
      const averageB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
      return averageB - averageA; 
    });
  };
  
  console.log(sortStudentsByAverageGrade(students));
 
  