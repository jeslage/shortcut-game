import styled from 'styled-components';

const StyledTimer = styled.div`
  border-radius: 0 0 5px 5px;
  border: 1px solid lightgray;
  box-shadow: 7px 7px 14px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  font-size: 40px;
  left: 50%;
  padding: 20px;
  position: fixed;
  text-align: center;
  top: -1px;
  transform: translateX(-50%);
  width: 200px;
`;

export default StyledTimer;
