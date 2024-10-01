import { createContext, useState } from "react";

const ImageLoaderContext = createContext();
function ImageLoaderProvider({ children }) {
  const [isImgShow, setIsImgShow] = useState(false);
  const onImageLoaded = () => setIsImgShow(true);
  return (
    <ImageLoaderContext.Provider
      value={{ isImgShow, setIsImgShow, onImageLoaded }}
    >
      {children}
    </ImageLoaderContext.Provider>
  );
}

export { ImageLoaderContext, ImageLoaderProvider };
