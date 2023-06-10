import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalWindow = ({ openModal, closeModal, largeImageURL, tags }) => {

  return (
    <Modal isOpen={openModal()} onRequestClose={closeModal()} style={customStyles}>
      <img src={largeImageURL} alt={tags} />
    </Modal>
  );
};
