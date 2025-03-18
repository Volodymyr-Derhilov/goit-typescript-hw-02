import { ImageCardType } from '../../Types.type';
import css from './ImageCard.module.css'

export default function ImageCard({ img, onImageClick } : ImageCardType) {
    const link = img.urls.small;
    const alt = img.alt_description;

    const handleClick = () => {
        onImageClick(img.urls.full, alt);
    }
    return (
        <div>
            <img src={link} alt={alt} className={css.img} onClick={handleClick}/>
        </div>
    )
}