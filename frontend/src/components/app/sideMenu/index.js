// React
import React, { useState } from "react";
// React Router
import { useLocation } from "react-router-dom";
// React Bootstrap
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// FontAwesome Icons
import { faTachometerAlt, faTasks, faCalendarAlt, faStickyNote } from "@fortawesome/free-solid-svg-icons";
// Styled Components
import {
  Container,
  StyledIcon,
  StyledMenuItem
} from "./style";


export default function SideMenu() {

  const [currentRoute, setCurrentRoute] = useState(useLocation().pathname);

  if (currentRoute === '/') {
    setCurrentRoute('/dashboard');
  }

  const menuItems = [
    {route: "/dashboard", tooltip: "Dashboard.", icon: faTachometerAlt},
    {route: "/tareas", tooltip: "Tareas.", icon: faTasks},
    {route: "/calendario", tooltip: "Calendario.", icon: faCalendarAlt},
    {route: "/notas", tooltip: "Notas.", icon: faStickyNote}
  ];

  function handleClick(route) {
    if (route !== currentRoute) {
      setCurrentRoute(route);
    }
  }

  return (
    <Container className="d-none d-lg-block">
    {
      menuItems.map((menuItem, i) => (
        <MenuItem
          key={i}
          route={menuItem.route}
          tooltip={menuItem.tooltip}
          active={(currentRoute === menuItem.route ? true : false)}
          icon={menuItem.icon}
          onClick={() => handleClick(menuItem.route)}
        />
      ))
    }
    </Container>
  );
}

function MenuItem(props) {
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 500, hide: 300 }}
      trigger={["hover", "focus"]}
      overlay={ <Tooltip>{props.tooltip}</Tooltip> }
    >
      <StyledMenuItem
        to={props.route}
        className={props.active ? "active" : ""}
        onClick={props.onClick}
      >
        <StyledIcon icon={props.icon} />
      </StyledMenuItem>
    </OverlayTrigger>
  );
}
