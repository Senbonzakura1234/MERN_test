import React from 'react';
import './App.css';
import './css/main.min.css'
import NavbarComp from './components/NavbarComp';
import { Container, Row , Col } from 'react-bootstrap';
import ShopComp from './components/ShopComp';
import SideBarComp from './components/SideBarComp';
function App() {
  return (
    <div className="App">
      <SideBarComp/>
      <Container fluid>
          <NavbarComp/>
          <Row>
            <ShopComp/>
          </Row>
      </Container>
    </div>
  );
}

export default App;
