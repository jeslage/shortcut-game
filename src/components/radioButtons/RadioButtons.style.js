import styled from "styled-components";

const StyledRadioButtons = styled.div`
  display: flex;
  flex-wrap: wrap;

  .radioButtons__option {
    width: 50%;
  }

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

      span,
      svg {
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
`;

export default StyledRadioButtons;
