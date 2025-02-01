import { useState } from "react";
import { searchImages } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const data = await searchImages(query);
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
