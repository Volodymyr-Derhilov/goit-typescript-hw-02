import css from './ImageGalery.module.css'
import ImageCard from '../ImageCard/ImageCard'
import { ImageGalery } from '../../Types.type'

export default function ImageGalery({images, onImageClick}: ImageGalery) {
    return (
        <ul className={css.ImageGalery}>
            {
                images.map(img => (
                    <li key={crypto.randomUUID()} className={css.galery__item}>
                        <ImageCard img={img} onImageClick={ onImageClick} />
                    </li>
                ))
            }
            </ul>
    )
}