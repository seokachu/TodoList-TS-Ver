import { ChangeEvent, useState } from 'react';

interface IInputForm {
  id: string;
  title: string;
  content: string;
  createAt: string;
}

const inputForm = (initialState: IInputForm) => {
  const [formState, setFormState] = useState<IInputForm>(initialState);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, onChangeHandler, resetForm };
};

export default inputForm;
