import styled from "styled-components";

const StyledSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;

  svg {
    width: 50px;
    height: 50px;
  }

  form {
    width: 100%;
  }

  input:disabled {
    background: #dddddd;
  }

  label[for="player"] {
    input {
      display: block;
      width: 100%;
      padding: 20px;
      border: none;
      font-size: 5rem;
      font-weight: bold;
      border-bottom: 5px solid #000;
    }
  }

  .settings__apps,
  .settings__systems {
    display: flex;
    margin: 0;
    padding: 0;

    input {
      display: none;

      &:checked ~ div {
        background: gray;
      }

      &:disabled ~ div {
        opacity: 0.5;
      }
    }
  }

  .settings__app,
  .settings__system {
    width: 50%;
    text-align: center;

    &-icon {
      padding: 50px;
    }
  }

  button {
    outline: none;
    border: 5px solid #000;
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    padding: 20px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

export default StyledSettings;
