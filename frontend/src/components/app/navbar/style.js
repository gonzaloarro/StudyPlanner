import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  background-color: ${props => props.theme.colors.dominantColor};
`;

export const Logo = styled.div`
  margin-left: 0.5rem;
  color: ${props => props.theme.colors.background};
  font-size: 2.5rem;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  transition: color .15s linear;
  color: ${props => props.theme.colors.background};
  font-size: 2.2rem;

  &:hover {
    color: ${props => props.theme.colors.lighterDominantColor2};
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.5rem;
  transition: color .10s linear;
  transition: color .10s linear;

  &:hover {
    text-decoration: none;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

export const StyledMenuOption = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  transition: color .10s linear;
  color: ${props => props.theme.colors.background};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.lighterDominantColor2};
  }
`;
