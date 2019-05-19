import styled from "styled-components";

const StyledResults = styled.div`
  position: relative;
  padding: 0;
  font-weight: bold;
  font-size: 1.5rem;
  max-width: 800px;
  margin: 120px auto;

  &:after,
  &:before {
    position: absolute;
    width: 100%;
    height: calc(100vh - 240px);
    background: #fff;
    max-width: 800px;
    content: "";
  }

  &:before {
    top: 60px;
    left: 50px;
    background: #f4f4f4;
  }

  &:after {
    top: 30px;
    left: 20px;
    border: 5px solid #000;
  }

  .results__wrapper {
    position: relative;
    z-index: 1;
    height: calc(100vh - 240px);
    overflow: scroll;
    border: 5px solid black;
    background: #fff;
  }

  .results__place {
    width: 10%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
  }

  td,
  th {
    border-right: 5px solid black;

    &:last-of-type {
      border-right: none;
    }
  }

  thead th {
    position: sticky;
    top: 0;
    text-transform: uppercase;
    padding: 10px 20px;
    text-align: left;
    border-bottom: 5px solid black;
    background: #000;
    color: #fff;
    font-weight: normal;
  }

  tbody tr {
    border-bottom: 5px solid black;
  }

  tbody td {
    padding: 20px;
  }

  .results__current-player {
    background: #f4f4f4;

    .results__place {
      position: relative;
    }

    svg {
      position: absolute;
      top: -4px;
      left: 4px;
      width: 60px;
      height: auto;
    }
  }

  .results__loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledResults;
