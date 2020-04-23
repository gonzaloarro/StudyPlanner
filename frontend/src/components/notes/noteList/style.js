import styled from "styled-components";

export const MasonryWrapper = styled.div`
  display: flex;
  width: auto;
`;

export const MasonryColumn = styled.div`
  width: ${props => (100/props.columns)}%;
`;
