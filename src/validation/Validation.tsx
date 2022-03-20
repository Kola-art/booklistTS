import React, { FC, useEffect, useState } from 'react';
import FormCreator from '../components/UI/Form';
import { IBooks } from '../types/types';

interface ValidationProps {
  descr: IBooks;
  handleChange: (event :React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit:(event :React.ChangeEvent<HTMLInputElement>) => void;
};

const Validation: FC<ValidationProps> = ({handleOnSubmit, handleChange, descr}) => {

  const useValidation = (value: String, validations: Object): Object => {
    const [empty, setEmpty] = useState<boolean>(true);
    const [inputValid, setInputValid] = useState<boolean>(false);
    useEffect(() => {
      for(let validation in validations) {
        switch(validation) {
          case 'empty': 
          value ? setEmpty(false) : setEmpty(true)
          break;
          default:
          setEmpty(true)
        }
      }
    },[value,validations])

  useEffect(() => {
    if(empty || value === 'default') {
    setInputValid(false)
    } else {
    setInputValid(true)
    }
  }, [empty, value])

  return {empty, inputValid};
  }

  const useInput = ( initialValue :String, validations :Object ) :Object => {
    const [value, setValue] = useState<String>(initialValue);
    const [dirty, setDirty] = useState<boolean>(false);
    
    const valid = useValidation(value, validations);

    const onChange = (event:  React.ChangeEvent<HTMLInputElement>):void => {
    setValue(event.target.value);
    handleChange(event);
    }
   
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>):void => {
      setDirty(true);
    }
    
    return {
    value,
    onChange,
    onBlur,
    dirty,
    ...valid
    }
  }

  const title = useInput(descr.title, {empty: true});
  const author = useInput(descr.author, {empty: true});
  const category = useInput(descr.category, {empty: true});
  const ISBN = useInput(descr.ISBN, {empty: true});

  return (
    <FormCreator title={title} author={author} category={category} 
    ISBN={ISBN} handleOnSubmit={handleOnSubmit} />
  )
}

export default Validation;