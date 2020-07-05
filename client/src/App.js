import React from 'react';
import './App.css';
import './css/main.min.css'
import NavbarComp from './components/NavbarComp';
import { Container, Row } from 'react-bootstrap';
import ShopComp from './components/ShopComp';
import SideBarComp from './components/SideBarComp';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Container className="py-3 px-md-5" fluid>
          <Row>
            <SideBarComp/>
            <ShopComp/>
          </Row>
      </Container>
    </div>
  );
}

export default App;
