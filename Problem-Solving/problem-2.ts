

type Book = {
    title: string;
    author: string;
    year: number;
  };
  
  const books: Book[] = [
    { title: "Lord of ring", author: "Jk Rowling", year: 2000 },
    { title: "Alchemist", author: "Paulo Coelho", year: 2010 },
    { title: "Eat That Frog", author: "Brian Tracy", year: 2020 },
  ];
  
  const getBookTitles = (books: Book[]): string[] => {
    return books.map(book => book.title);
  };
  
  console.log(getBookTitles(books)); 
  