import styled from "styled-components";

const SecondaryButton = styled.button`
  color: #fff;
  background-color: #1e1e24;
  border: none;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1em 0 0.5em 0;
  padding: 1rem 1.5rem 1rem 1.5rem;
  letter-spacing: 0.02em;
  line-height: 0.85;
  min-width: 6rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #ffffff;
    color: #1e1e24;
  }
`;

export default SecondaryButton;