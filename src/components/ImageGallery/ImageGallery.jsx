import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  if (images.length === 0) {
    return <p>No images found.</p>;
  }

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
