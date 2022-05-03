import "./InfoModal.css";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
const InfoModal = ({ isOpen = false, handleClose }: Props) => {
  return (
    <>
      {isOpen && (
        <div id="modal">
          <div id="modal-overlay" onClick={handleClose} />
          <div id="modal-main">
            <button id="modal-close-button" onClick={handleClose}>
              X
            </button>
            <div id="modal-contents">
              <h2>Info</h2>
              <p>
                This page is just a clone project of the famous word guess game
                -{" "}
                <a href="https://www.nytimes.com/games/wordle/index.html">
                  WORDLE
                </a>
              </p>
              <p>
                You can check the source I made{" "}
                <a href="https://github.com/ohseungo/wordle-clone">here</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoModal;
