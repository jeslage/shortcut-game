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
    max-width: 800px;
    margin: 120px auto;

    h3 {
      text-transform: uppercase;
      text-align: center;
      border: 5px solid black;
      margin: 0;
      padding: 20px;
    }
  }

  .settings__wrapper {
    display: flex;
    margin: 0;
    border-left: 5px solid black;
    border-right: 5px solid black;
    padding: 0;

    label[for="player"] {
      width: 100%;
    }

    input[type="text"] {
      display: block;
      width: calc(100% - 40px);
      padding: 20px;
      border: none;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .settings__entry {
    width: 50%;
    text-align: center;
    text-transform: uppercase;

    input[type="radio"] {
      position: absolute;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);

      &:checked ~ h4 {
        background: #000;
        color: #fff;
      }

      &:disabled ~ h4 {
        opacity: 0.5;
      }
    }

    h4 {
      padding: 50px;
      margin: 0;
    }
  }

  button {
    outline: none;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    border: 5px solid #000;
    width: 100%;
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
