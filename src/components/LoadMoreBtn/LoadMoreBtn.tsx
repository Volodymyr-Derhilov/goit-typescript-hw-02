import { LoadMore } from '../../Types.type'
import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({onClick}: LoadMore) {
    return <button className={css.button} onClick={onClick}>Load more</button>
}