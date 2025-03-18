import css from './ImageGalery.module.css'
import ImageCard from '../ImageCard/ImageCard'
import type { ImageGaleryType } from '../../Types.type'

export default function ImageGalery({images, onImageClick}: ImageGaleryType) {
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