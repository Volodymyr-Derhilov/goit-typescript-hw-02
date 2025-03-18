import css from './Header.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { Props } from '../../Types.type';

function Header({onSubmit}: Props) {
    return (
        <>
            <header className={css.header}>
                <SearchBar onSubmit={onSubmit} />
            </header>
        </>
    )
}

export default Header;