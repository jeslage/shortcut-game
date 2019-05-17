import styled from 'styled-components';

const StyledTimeList = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 33.333%;
  height: 200px;
  margin: 0 auto;
  text-align: left;
  overflow-y: auto;
  border: 5px solid black;
  border-left: none;
  border-bottom: none;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td,
  th {
    width: 25%;
  }

  thead th {
    padding: 5px 20px;
    border-bottom: 5px solid black;
  }

  tbody td {
    padding: 20px;
    border-bottom: 5px solid black;
  }

  .Timelist__shortcut {
    width: 50%;
  }
`;

export default StyledTimeList;
