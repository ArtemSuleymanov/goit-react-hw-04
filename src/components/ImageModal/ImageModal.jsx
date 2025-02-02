import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ isOpen, closeModal, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <div className={s.modalBody}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.modalImage}
        />
        <div className={s.info}>
          <p>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p>
            <strong>Likes:</strong> {image.likes}
          </p>
          <p>
            <strong>Description:</strong> {image.description || "Empty"}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
