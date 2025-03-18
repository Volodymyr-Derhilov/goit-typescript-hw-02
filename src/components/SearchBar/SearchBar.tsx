import { ChangeEvent, FormEvent, useState } from 'react';
import css from './SearchBar.module.css'
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast';
import { Props } from '../../Types.type';

function SearchBar({ onSubmit }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const term = form.elements.namedItem('term') as HTMLInputElement;        

        if (!term.value.trim()) {
            toast.error("Search term is required!");
            return;
        }
        onSubmit(term.value.trim());
        setSearchTerm(term.value.trim());
        form.reset();
    }

    return (
        <form onSubmit={handleSumbit}>
            <div className={css.input__icon}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    className={css.form__input}
                    placeholder="Search images and photos"
                    onInput={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    name='term'
                />
                <button type='submit' className={css.button}><FaSearch className={ css.field__icon} /></button>
            </div>
  </form>
    )
}

export default SearchBar;