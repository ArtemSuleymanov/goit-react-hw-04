import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ isOpen, closeModal, image }) => {
  if (!image) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <div onClick={handleOverlayClick} style={{ cursor: "pointer" }}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.modalImage}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
