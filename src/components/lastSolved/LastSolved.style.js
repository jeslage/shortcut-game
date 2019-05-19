import styled from "styled-components";

const StyledLastSolved = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  max-width: 400px;
  width: 100%;
  border: 5px solid black;
  border-bottom: none;

  thead th {
    text-transform: uppercase;
    padding: 10px;
    text-align: left;
    border-bottom: 5px solid black;

    &:first-of-type {
      width: 20px;
      text-align: center;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  tbody tr {
    border-bottom: 5px solid black;
  }

  tbody td {
    padding: 20px 10px;

    &:first-of-type {
      font-weight: bold;
      width: 20px;
      text-align: center;
    }
  }
`;

export default StyledLastSolved;
