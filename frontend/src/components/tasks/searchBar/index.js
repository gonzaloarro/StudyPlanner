// React
import React, { useState } from "react";
// Styled Components
import {
  Wrapper,
  StyledSearchBar
} from "./style";


export default function SearchBar(props) {

  const [focus, setFocus] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);

  function handleFilterTextChange(event) {
    props.onFilterTextChange(event.target.value);
  }

  return (
    <>
      <Wrapper>
        <StyledSearchBar
          className={focus || mouseOver ? "active" : ""}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
        >
          <input
            type="text"
            value={props.filterText}
            placeholder={focus || mouseOver ? "Buscar..." : ""}
            onChange={handleFilterTextChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </StyledSearchBar>
      </Wrapper>
    </>
  );
}
