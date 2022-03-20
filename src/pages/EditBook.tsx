import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import { getBook, patchData } from '../api';
import { BooksContext } from '../context/BooksContext';
import Validation from '../validation/Validation';
import Modal from '../components/modal/Modal';
import '../styles/relative.css';
import { IBooks } from '../types/types';

const EditBook = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    getBook(id);
  },[id]);
   
  const {books, setBooks} = useContext(BooksContext);
  const book: IBooks = books.reduce((accum, book) => book.id === id ? book : accum);
  
  const [descr, setDescr] = useState<IBooks>({
    title: book.title,
    author: book.author,
    category: book.category,
    ISBN: book.ISBN,
    id: book.id
  })

  const onEdit = (title :string, author :string, category :string, ISBN :string, id :string):void => {
    patchData(title, author, category, ISBN, id, setBooks)
  }

  const handleChange = (event :React.ChangeEvent<HTMLInputElement>):void => {
    setDescr({
      ...descr,
      [event.target.name]: event.target.value
    })
  }
   
  const handleOnSubmit = (event :React.ChangeEvent<HTMLInputElement>):void => {
    setModal(true);
    event.preventDefault();
    onEdit(descr.title,descr.author, descr.category, descr.ISBN, descr.id);
    setTimeout(()=> {
      navigate('/')}, 2000
    );
  }

  return (
    <div className='formcontainer'>
      <Validation  handleOnSubmit={handleOnSubmit} handleChange={handleChange}
        descr={descr} />
      <Modal modal={modal} setModal={setModal} />
    </div>
  )
}

export default EditBook;