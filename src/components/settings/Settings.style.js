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

  border: 5px solid black;

  form {
    width: 100%;
    position: relative;
    background: #fff;
    z-index: 1;

    h3 {
      text-transform: uppercase;
      margin: 0;
      padding: 15px 30px;
      border-bottom: 5px solid black;
    }
  }

  .settings__radio {
    border-bottom: 5px solid black;
  }

  .settings__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
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
      border-bottom: 5px solid black;

      &:focus {
        outline: none;
      }
    }
  }

  .settings__count {
    padding: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-bottom: 5px solid #000;
    margin: 0;
    font-size: 16px;
    font-weight: normal;

    span {
      position: relative;
      margin: 0 15px;
    }
  }
`;

export default StyledSettings;
