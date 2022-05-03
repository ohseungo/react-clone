import "./Header.css";

const Header = ({ handleModalOpen }: { handleModalOpen: () => void }) => {
  return (
    <header>
      <button id="header-modal-button" onClick={handleModalOpen}>
        ⓘ
      </button>
      <div className="title">Not Wordle</div>
    </header>
  );
};

export default Header;
