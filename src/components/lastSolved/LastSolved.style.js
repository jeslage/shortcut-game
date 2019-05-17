import styled from 'styled-components';

const StyledLastSolved = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  border: 5px solid black;
  border-left: none;
  border-bottom: none;

  .LastSolved__container {
    display: flex;
  }
`;

export default StyledLastSolved;
