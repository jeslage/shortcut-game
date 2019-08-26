import styled from "styled-components";

const StyledSettings = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 900px;
  margin: 70px auto;

  &:after,
  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    max-width: 900px;
    content: "";
  }

  &:before {
    top: 60px;
    left: 50px;
    background: #f4f4f4;
  }

  &:after {
    top: 30px;
    left: 20px;
    border: 5px solid #000;
  }

  form {
    width: 100%;
    position: relative;
    background: #fff;
    z-index: 1;

    h3 {
      text-transform: uppercase;
      border: 5px solid black;
      margin: 0;
      padding: 20px 30px;
    }
  }

  .settings__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    border-left: 5px solid black;
    border-right: 5px solid black;
    padding: 0;

    label[for="player"] {
      position: relative;
      width: 100%;

      svg {
        position: absolute;
        right: 30px;
        top: 8px;
      }
    }

    input[type="text"] {
      display: block;
      width: calc(100% - 60px);
      padding: 20px 30px;
      border: none;
      font-size: 2rem;
      font-weight: bold;

      &:focus {
        outline: none;
      }
    }
  }

  .settings__entry {
    width: 50%;

    input[type="radio"] {
      position: absolute;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);

      &:checked ~ h4 svg {
        display: block;
      }

      &:disabled ~ h4 {
        &:before,
        .tooltip__trigger {
          border-color: rgba(0, 0, 0, 0.5);
        }

        span {
          opacity: 0.5;
        }
      }
    }

    h4 {
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      padding: 30px 30px 30px 90px;
      margin: 0;

      &:before {
        position: absolute;
        top: 25px;
        left: 30px;
        width: 25px;
        height: 25px;
        border: 5px solid #000;
        content: "";
      }

      svg {
        position: absolute;
        top: 10px;
        left: 25px;
        display: none;
      }

      span {
        text-transform: uppercase;
      }
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

    &:hover,
    &:focus,
    &:disabled {
      background: #000;
      color: #fff;
    }
  }

  .settings__count {
    padding: 20px 0;
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-top: 5px solid #000;
    border-left: 5px solid #000;
    border-right: 5px solid #000;
    margin: 0;

    span {
      position: relative;
      margin: 0 15px;
      color: red;
      transform: rotate(-8deg);

      svg {
        position: absolute;
        top: -15px;
        left: -15px;
        width: 55px;
        height: 55px;
      }
    }
  }
`;

export default StyledSettings;
