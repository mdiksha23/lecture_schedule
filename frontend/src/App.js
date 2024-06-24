import React from "react";
import AppRoutes from "./routes";
import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <p className=" titleIdea">IdeaMagix</p>
          <div className="d-flex align-items-center">
            <img
              src="https://ui-avatars.com/api/?name=D&size=50&background=0D8ABC&color=fff"
              className="mx-2 rounded-circle"
            />
            <h5>Diksha</h5>
          </div>
        </div>
      </Container>
      <AppRoutes />
    </div>
  );
};

export default App;
