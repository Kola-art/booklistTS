import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutePage from './Routes';
import { BooksProvider } from './context/BooksContext'
import { IBooks } from './types/types';

function App() {
  const [books, setBooks] = useState<IBooks[]>([{title:'test', author:'test', category:'test', ISBN:'test', id:'test'}]);

  return (
    <>
      <BooksProvider books= {books} setBooks={setBooks}>
        <BrowserRouter >
          <Header />
          <RoutePage />
        </BrowserRouter>
      </BooksProvider>
   </>
  );
}

export default App;
