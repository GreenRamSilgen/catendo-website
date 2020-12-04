import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CatendoLogo from '../../assets/Cat.svg';

function Navb() {
  const zIdx = {
    height: 75,
    fontSize: 20,
    display: `flex`,
  };
  zIdx[`z-index`] = `10`;
  zIdx[`justify-content`] = `space-between`;
  zIdx[`box-shadow`] = `0px 0px 5px black`;
  return (
    <Navbar bg="dark" variant="dark" style={zIdx}>
      <Navbar.Brand href="/">
        <img
          src={CatendoLogo}
          width="auto"
          height="75"
          className="d-inline-block align-top"
          alt="Catendo Company Logo"
        />
      </Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/character">Character</Nav.Link>
        <Nav.Link href="/team">Team</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navb;
