// React
import React from "react";
// Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser, faTachometerAlt, faTasks, faCalendarAlt, faStickyNote } from "@fortawesome/free-solid-svg-icons";
// Styled Components
import {
  StyledNavbar,
  Logo,
  MenuIcon,
  StyledLink,
  UserMenu,
  StyledMenuOption
} from "./style";


export default function NavigationBar(props) {
  return (
    <StyledNavbar expand="lg" fixed="top">
      <Logo>
        <FontAwesomeIcon icon={faGraduationCap}/>
      </Logo>
      {
        props.withMenu &&
        <div className="d-lg-none">
            <StyledLink to="/dashboard"><MenuIcon icon={faTachometerAlt}/></StyledLink>
            <StyledLink to="/tareas"><MenuIcon icon={faTasks}/></StyledLink>
            <StyledLink to="/calendario"><MenuIcon icon={faCalendarAlt}/></StyledLink>
            <StyledLink to="/notas"><MenuIcon icon={faStickyNote}/></StyledLink>
        </div>
      }

      <Navbar.Toggle/>

      <Navbar.Collapse>
        <UserMenu className="d-lg-none">
          {
            props.withMenu &&
            <StyledMenuOption onClick={() => props.selectPlan(null)}>
              Seleccionar plan
            </StyledMenuOption>
          }
          <StyledMenuOption onClick={props.changeTheme}>
            Cambiar tema
          </StyledMenuOption>
          <StyledMenuOption onClick={props.logout}>
            Cerrar sesión
          </StyledMenuOption>
        </UserMenu>
      </Navbar.Collapse>

      <Navbar.Collapse>
        <Nav className="ml-auto d-none d-lg-block">
          <NavDropdown title=<MenuIcon icon={faUser}/> alignRight className="ml-auto">
            {
              props.withMenu &&
              <NavDropdown.Item onClick={() => props.selectPlan(null)}>
                Planes de estudio
              </NavDropdown.Item>
            }
            <NavDropdown.Item onClick={props.changeTheme}>
              Cambiar tema
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={props.logout}>
              Cerrar sesión
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  )
}
