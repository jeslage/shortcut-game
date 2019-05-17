import styled from 'styled-components';

const StyledSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;
  }

  fieldset {
    display: flex;
    border: none;
    outline: none;
  }

  input:disabled {
    background: #dddddd;
  }
`;

export default StyledSettings;
