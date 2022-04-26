import React from "react";
import "./App.css";
import Header from "components/Header";
import Container from "components/Container";
import Board from "components/board/Board";
import Keyboard from "components/keyboard/Keyboard";

function App() {
  return (
    <div className="game_app">
      <Header />
      <Container>
        <Board />
        <Keyboard />
      </Container>
    </div>
  );
}

export default App;
