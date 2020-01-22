import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Rank } from "./components/rank";

// <Image src="https://cdn1.iconfinder.com/data/icons/game-design-butterscotch-vol-1/256/Leader-512.png" fluid/>
function App() {
  return (
    <Container>
      <Row>
        <h1>Tibia ranking</h1>
      </Row>
      <Row>
        <Rank />
      </Row>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
