import styled from 'styled-components';

const StyledCountdown = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white;
  background: black;

  h2 {
    margin: 0;
    font-size: 20rem;
    animation: zOoOom 0.08s ease-in-out;
  }

  @keyframes zOoOom {
    0% {
      transform: scale(1.4);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export default StyledCountdown;
