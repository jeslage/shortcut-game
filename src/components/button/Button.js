import styled from "styled-components";

const Button = styled.button`
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  width: 100%;
  padding: 20px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0;
  z-index: 2;
  background: #fff;

  &:hover,
  &:focus,
  &:disabled {
    background: #000;
    color: #fff;
  }
`;

export default Button;
