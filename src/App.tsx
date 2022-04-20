import React from "react";
import "./App.css";
import Header from "components/Header";
import Container from "components/Container";
import Board from "components/board/Board";

function App() {
  return (
    <div className="game_app">
      <Header />
      <Container>
        <Board />
        <div>Keyboard</div>
      </Container>
    </div>
  );
}

export default App;
