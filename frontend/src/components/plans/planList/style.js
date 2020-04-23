import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media(min-width: 768px) {
    justify-content: space-between;
  }
`;
