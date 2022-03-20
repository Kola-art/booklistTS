import React, { FC } from 'react';
import '../../styles/button.css';

interface ButtonProps {
  onClick:() => void
};

const Button: FC<ButtonProps> = ({onClick, children}) => {
  return (
  <> 
    <button className='button' onClick={ onClick }>{children}</button>
  </>
  );
}

export default Button;