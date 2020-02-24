import styled from "styled-components";

const StyledTopLine = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid black;

  .topLine__icon {
    display: block;
    width: 11px;
    height: 11px;
    border: 3px solid black;
    margin-right: 10px;
  }

  .topLine__spacer {
    flex-grow: 2;
    display: flex;
    flex-direction: column;

    i {
      height: 3px;
      width: 100%;
      background: black;
      margin-top: 3px;

      &:nth-of-type(1) {
        margin-top: 0;
      }
    }
  }

  p {
    font-size: 17px;
    line-height: 17px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0 0 0 10px;
  }
`;

export default StyledTopLine;
