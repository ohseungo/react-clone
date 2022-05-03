import React, { useState } from "react";
import "./App.css";
import Header from "components/Header";
import Container from "components/Container";
import Board from "components/board/Board";
import Keyboard from "components/keyboard/Keyboard";
import MessageToast from "components/common/MessageToast";
import InfoModal from "components/common/InfoModal";
function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="game_app">
      <Header handleModalOpen={handleModalOpen} />
      <Container>
        <Board />
        <Keyboard />
        <MessageToast />
      </Container>
      <InfoModal isOpen={isModalOpen} handleClose={handleModalClose} />
    </div>
  );
}

export default App;
