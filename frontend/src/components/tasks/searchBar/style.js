import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

export const StyledSearchBar = styled.div`
  display: inline-block;
  position: relative;
  height: 35px;
  width: 35px;
  box-sizing: border-box;
  margin: 0px 8px 7px 0p;
  padding: 3px 9px 2px 9px;
  border: 3px solid ${props => props.theme.colors.dominantColor};
  border-radius: 25px;
  transition: all 300ms ease;
  cursor: text;

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 20px;
    right: -5px;
    top: 21px;
    background: ${props => props.theme.colors.dominantColor};
    border-radius: 3px;
    transform: rotate(-45deg);
    transition: all 300ms ease;
  }

  &:hover, &.active {
    width: 140px;
    @media(min-width: 768px) {
      width: 180px;
    }
    @media(min-width: 992px) {
      width: 200px;
    }
    margin-right: 0px;
    &:after {
      height: 0px;
    }
  }

  input {
    width: 100%;
    border: none;
    box-sizing: border-box;
    font-family: Helvetica;
    font-size: 15px;
    color: inherit;
    background: transparent;
    outline-width: 0px;
  }
`;
