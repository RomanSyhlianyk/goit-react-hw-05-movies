import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css'

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';

  const [value, setValue] = useState(query);

  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: value });
  };
  return (
    <form className={css.Form} action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          className={css.Input}
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
      <button className={css.Button} type="submit">
        Search
      </button>
    </form>
  );
};
