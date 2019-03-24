import styled, { css } from 'styled-components';

const StyledHint = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;
`;

const StyledKey = styled.div`
  align-items: center;
  background: #141414;
  color: #fff;
  border-radius: 5px;
  border: 2px solid #000;
  display: inline-flex;
  height: 60px;
  justify-content: center;
  margin-right: 20px;
  padding: 5px;
  position: relative;
  text-transform: uppercase;
  width: 60px;

  ${props =>
    (props.keyName === 'Cmd' ||
      props.keyName === 'Shift' ||
      props.keyName === 'Control' ||
      props.keyName === 'Alt') &&
    css`
      align-items: flex-end;
      justify-content: flex-start;
      text-transform: lowercase;
      width: 80px;
    `}

  ${props =>
    props.keyName === 'Space' &&
    css`
      width: 180px;
    `}

  span {
    display: block;
    font-weight: bold;
    line-height: 1;
    padding: 5px;
  }
`;

export { StyledHint, StyledKey };
