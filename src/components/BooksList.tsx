import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import Button from "./UI/Button";
import { IBooks } from '../types/types';

interface BooksListProps {
  descr: IBooks;
  idx: Number
  onDelete: (id:string) => void;
};

const BooksList: FC<BooksListProps> = ({ descr, idx, onDelete }) => {
    const { title, author, category, ISBN, id } = descr;
    const navigate = useNavigate();
    const bookNumber: number = Number(idx) +1 ;
    const deleteBook = ():void => {
      onDelete(id)
    };

    const handleClick = () =>  {
      navigate(`${id}`);
    }

    return (
        <tr className="dashboard__table_tr">
          <td>{bookNumber+1}</td>
          <td> { title } </td>
          <td> { author }</td>
          <td> { category }</td>
          <td> { ISBN }</td>
          <td>
            <div className="dashboard__table_btn">
              <Button onClick={ deleteBook }>delete</Button>
              <Button onClick={ handleClick }>edit</Button>
            </div>
          </td>
        </tr>
    )
} 

export default BooksList;