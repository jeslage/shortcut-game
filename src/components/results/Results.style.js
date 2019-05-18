import styled from "styled-components";

const StyledResults = styled.div`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: bold;

  .Results__place {
    width: 10%;
  }

  table {
    width: 80%;
    border-collapse: collapse;
  }

  td,
  th {
    border-right: 5px solid black;
  }

  thead th {
    padding: 5px 20px;
    text-align: left;
    border-bottom: 5px solid black;
  }

  tbody td {
    padding: 20px;
    border-bottom: 5px solid black;
  }

  .Results__current-player {
    background: #000;
    color: #fff;
  }
`;

export default StyledResults;
