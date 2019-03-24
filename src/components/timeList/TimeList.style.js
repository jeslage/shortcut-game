import styled from 'styled-components';

const StyledTimeList = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
  width: 700px;
  height: 200px;
  background: rgba(255, 255, 255, 1);
  margin: 0 auto;
  border-radius: 5px;
  text-align: left;
  overflow-y: auto;
  box-shadow: 7px 7px 14px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid lightgray;

  table {
    width: 100%;
  }

  td,
  th {
    width: 25%;
  }

  thead th {
    padding: 5px 20px;
    border-bottom: 1px solid lightgray;
  }

  tbody td {
    padding: 20px;
    border-bottom: 1px solid lightgray;
  }

  .Timelist__shortcut {
    width: 50%;
  }
`;

export default StyledTimeList;
