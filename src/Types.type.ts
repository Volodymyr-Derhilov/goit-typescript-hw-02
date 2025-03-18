export type Props = {
    onSubmit: (searchTerm: string) => void;
}

export type imgObject = {
    urls: {
        small: string,
        full: string,
    },
    alt_description: string
}

type onImageClick = (full: string, alt: string) => void;

export type ImageCard = {
    img: imgObject,
    onImageClick: onImageClick
}

export type Image = {
    alt_description: string,
    url: object
}
  
type result = {
    total: number,
    total_pages: number,
    results: imgObject[]
}

export type Request = (query: string, page: number) => Promise<result>

export type ImageGalery = {
    images: imgObject[],
    onImageClick: onImageClick
}

export type LoadMore = {
    onClick: () => void
}

export type ModalType = {
    fullImg: string,
    closeModal: () => void,
    isOpen: boolean,
    alt: string
}