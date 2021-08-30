import { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { AiOutlineAlignLeft } from "react-icons/ai"
import { BsFillGridFill } from "react-icons/bs"


class MyHeader extends Component {
    render() {
        return (
            <Navbar expand="lg" className="netflix-nav-dark navbar-dark">
            <Navbar.Brand href="#home"><h3>TV Shows</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown className="white-border" title="Genres" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
              </Nav>
              <Nav >
              <AiOutlineAlignLeft className="nav-bottom-right"/>
              <BsFillGridFill className="nav-bottom-right"/>
              </Nav>
              
            </Navbar.Collapse>
          </Navbar> 
        )
    }
}

export default MyHeader