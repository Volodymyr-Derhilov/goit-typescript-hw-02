import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import fetchImages from './components/services/api'
import toast from 'react-hot-toast';
import ImageGalery from './components/ImageGalery/ImageGalery'
import { FallingLines } from 'react-loader-spinner'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import { LoadMore, imgObject } from './Types.type';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<imgObject[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullImg, setFullImg] = useState<string>("");
  const [alt, setAlt] = useState<string>('');

  function onSubmit(searchTerm: string ): void {
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const {results} = await fetchImages(query, page);        
        setImages((prev) => [...prev, ...results]);        
      } catch {
        toast.error('Server is offline');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const onClick = () => {
    setPage(prev => prev + 1);
  }
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onImageClick = (full: string, alt: string): void => {
    openModal();
    setFullImg(full);
    setAlt(alt);
  }

  return (
    <>
      <Header onSubmit={onSubmit} />
      <ImageGalery images={images} onImageClick={onImageClick} />
      <div className="position">
        {isLoading && <FallingLines color="#3747ac" width="100" visible={true} />}
        {isError && <ErrorMessage />}
        {images.length ? <LoadMoreBtn onClick={onClick} /> : ""}
      </div>
      {isOpen && <ImageModal closeModal={closeModal} fullImg={fullImg} isOpen={ isOpen} alt={alt} />}
    </>
  )
}

export default App
