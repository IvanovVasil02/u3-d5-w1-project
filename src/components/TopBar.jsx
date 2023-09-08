import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from '../assets/logo.png';
import { BsSearch, BsBellFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


function TopBar() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" style={{height : "60px"}}>
      <Container fluid>
      <Navbar.Brand href="#home">
            <img src={myLogo} style={{width: "100px", height: "55px"}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='flex-grow-1'>
            <Nav.Link href="#home">TV show</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Addded</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
            
            <Nav.Link href="#home" className='ms-auto'><BsSearch /></Nav.Link>
            
            <Nav.Link href="#link">KIDS</Nav.Link>

            <Nav.Link href="#link"><BsBellFill /></Nav.Link>

            <Nav.Link href="#link" ><BsFillPersonFill /></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;