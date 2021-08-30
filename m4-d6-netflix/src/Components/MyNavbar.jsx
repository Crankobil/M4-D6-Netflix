import { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import NetflixLogo from "../assets/netflix_logo.png"
import {Navbar, Nav, NavDropdown} from "react-bootstrap"
import "../style.css"
import {BsSearch} from "react-icons/bs"
import {BsFillBellFill} from "react-icons/bs"
import Avatar from "../assets/avatar.png"

class MyNavbar extends Component {
    render(){
        return (
            <Navbar expand="lg" className="netflix-nav-dark navbar-dark">
            <Navbar.Brand href="#home"><img src={NetflixLogo} alt="" id="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">TV Shows</Nav.Link>
                <Nav.Link href="#link">Recently Added</Nav.Link>
                <Nav.Link href="#link">My List</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <BsSearch className="nav-top-right mx-1"/>
                <Nav.Link className="nav-top-right mx-1"> KIDS </Nav.Link>
                <BsFillBellFill className="nav-top-right mx-1"/>
                <NavDropdown title={<img src={Avatar} width="32px" alt=""/>} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

              </Nav>
              
            </Navbar.Collapse>
          </Navbar> 
        )
    }
}

export default MyNavbar