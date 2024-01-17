import "./../Navmain.css";
import { React } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

import { Search, Cart } from "react-ionicons";

import logo from "./../img/logo-no-background.png";

function Navmain(props) {
  return (
    <div>
      {["false"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar navbar-expand-lg m-auto" style={props.divStyle}>
          <Container fluid className="navbar-nav m-auto my-1 navUl">
            <Navbar.Brand className="m-auto divSize mx-5">
              <Link to="/">
                <img className="logo" src={logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="navbarOffcanvas" id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="m-auto" style={{ width: "fit-content" }}>
                <Nav className="dropdown m-auto navLink">
                  <Link to="/react-instrument-store" style={props.color}>
                    Home
                  </Link>
                  <Link to="/react-instrument-store/About" style={props.color}>
                    About
                  </Link>
                  <Link to="/react-instrument-store/Contacts" style={props.color}>
                    Contacts
                  </Link>
                  <Link to="/react-instrument-store/Products" style={props.color}>
                    Products
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Form className="m-auto searchBar">
              <form className="d-flex" role="search">
                <input className="form-control m-auto" type="search" placeholder="Type to search..." aria-label="Search" />
                <button className="btn m-auto" type="submit">
                  <Search width="1em" height="1em" className="justify-center" color="white" />
                </button>

                <a href="#a" className="cart ms-4">
                  <Cart color={props.ccolor} className="m-auto" width="1.3em" height="1.3em" />
                  <p className="ms-2 m-auto" style={props.color}>
                    {props.count}
                  </p>
                </a>
              </form>
            </Form>
          </Container>
        </Navbar>
      ))}
    </div>
    // <nav className="navbar navbar-expand-lg m-auto" style={props.divStyle}>
    //   <ul className="navbar-nav m-auto my-1 navUl">
    //     {/* LOGO */}
    //     <li className="nav-item m-auto divSize mx-5">
    //       <Link to="/">
    //         <img className="logo" src={logo} alt="logo" />
    //       </Link>
    //     </li>

    //     {/* NAVLINK*/}
    //     <li className="nav-item dropdown m-auto sticky navLink">
    //       <Link to="/" style={props.color}>
    //         Home
    //       </Link>
    //       <Link to="/About" style={props.color}>
    //         About us
    //       </Link>
    //       <Link to="/Contacts" style={props.color}>
    //         Contacts
    //       </Link>
    //       <Link to="/Products" style={props.color}>
    //         Products
    //       </Link>
    //     </li>

    //     {/* SEARCH BAR */}
    //     <li className="nav-item m-auto searchBar mx-3">
    //       <form className="inline searchBar" role="search">
    //         <input className="form-control m-auto" type="search" placeholder="Type to search..." aria-label="Search" />
    //         <button className="btn m-auto" type="submit">
    //           <Search width="1em" height="1em" className="justify-center" color="white" />
    //         </button>
    //       </form>

    //       {/* DROPDOWN */}
    //       <Dropdown>
    //         <Dropdown.Toggle variant="success" id="dropdown-basic">
    //           Dropdown Button
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu>
    //           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>

    //       <a href="#a" className="cart m-auto">
    //         <Cart color={props.ccolor} className="m-auto" width="1.3em" height="1.3em" />
    //         <p className="ms-2 m-auto">{props.count}</p>
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navmain;
