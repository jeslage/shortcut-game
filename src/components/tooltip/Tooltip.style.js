import styled, { css } from 'styled-components';

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

    &:hover {
      color: #ff0000;
      border-color: #ff0000;
    }
  }

  .tooltip__content {
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    position: absolute;
    min-width: 100px;
    max-width: 350px;
    background: #000;
    color: #fff;
    right: 50%;
    transform: translateX(calc(50% - 3px));
    margin: 20px 0;
    padding: 15px;

    p {
      margin: 0;
      padding: 0;
      hyphens: auto;
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
      content: '';
    }

    ${props =>
      props.position === 'top' &&
      css`
        bottom: 100%;

        &:before {
          bottom: -15px;
        }
      `}

    ${props =>
      props.position === 'bottom' &&
      css`
        top: 100%;

        &:before {
          top: 0;
        }
      `}
  }
`;

export default StyledTooltip;
