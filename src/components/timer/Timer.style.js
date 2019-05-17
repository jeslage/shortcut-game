import styled from 'styled-components';

const StyledTimer = styled.div`
  background: #fff;
  font-size: 40px;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 5px solid black;

  h3 {
    padding: 20px;
    width: calc(33.333% - 40px);
    margin: 0;
  }

  .shortcuts__clock {
    text-align: center;
  }

  .shortcuts__player {
    border-right: 5px solid black;
  }

  .shortcuts__round {
    border-left: 5px solid black;
    text-align: right;
  }
`;

export default StyledTimer;
