import React from "react";
import "./App.css";
import Header from "components/Header";
import Container from "components/Container";
import Board from "components/board/Board";
import Keyboard from "components/keyboard/Keyboard";
import MessageToast from "components/common/MessageToast";

function App() {
  return (
    <div className="game_app">
      <Header />
      <Container>
        <Board />
        <Keyboard />
        <MessageToast />
      </Container>
    </div>
  );
}

export default App;
