import styled, { css } from "styled-components";

const StyledTooltip = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
  position: relative;
  margin: 0 10px;
  font-size: 0.875rem;
  font-weight: normal;

  .tooltip__trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 20px;
    width: 20px;
    height: 20px;
  }

  .tooltip__content {
    visibility: ${props => (props.visible ? "visible" : "hidden")};
    position: absolute;
    right: 50%;
    transform: translateX(calc(50% - 3px));
    margin: 20px 0;

    p {
      position: relative;
      z-index: 99;
      margin: 0;
      padding: 15px;
      color: #000;
      border: 5px solid #000;
      background: #fff;
      hyphens: auto;
      min-width: 100px;
      max-width: 350px;
    }

    &:before {
      position: absolute;
      left: 50%;
      width: 20px;
      height: 20px;
      background: #000;
      border-top: none;
      border-left: none;
      transform: rotate(45deg) translateX(-50%);
      content: "";
    }

    ${props =>
      props.position === "top" &&
      css`
        bottom: 100%;

        &:before {
          bottom: -17px;
        }
      `}

    ${props =>
      props.position === "bottom" &&
      css`
        top: 100%;

        &:before {
          top: 0;
        }
      `}
  }
`;

export default StyledTooltip;
