import React from "react";
import { Container,Row } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
function App() {
  return (
    
    <Container>
      <Row><Navi /></Row>
      
      <DashBoard/>
    </Container>
  );
}

export default App;
