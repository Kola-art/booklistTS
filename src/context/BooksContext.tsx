import React, { FC } from 'react';
import { IBooks } from '../types/types';

interface BooksContextProps {
  books: IBooks[];
  setBooks: React.Dispatch<React.SetStateAction<IBooks[]>>
};

export type GlobalContent = {
  books: IBooks[], 
  setBooks:  React.Dispatch<React.SetStateAction<IBooks[]>>
}

export const BooksContext = React.createContext<GlobalContent>({
  books: [{title:'test', author:'test', category:'test', ISBN:'test', id:'test'}], 
  setBooks: () => []
});

export const BooksProvider: FC<BooksContextProps> = ({ children, books, setBooks }) => {

  return (
    <BooksContext.Provider value={ {books, setBooks} }>
      {children}
    </BooksContext.Provider>
  );
};