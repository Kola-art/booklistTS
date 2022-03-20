export interface IBooks {
  title: string;
  author: string;
  category: string;
  ISBN: string;
  id: string;
}

export interface IDescr {
  value: string;
  dirty: boolean;
  empty: boolean;
  inputValid: boolean;
  onBlur: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void
}