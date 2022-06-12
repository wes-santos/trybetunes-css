import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 4em;
  height: 4em;
  border-radius: 50%;
`;

const LoadingWrapper = styled.div`
  align-items: center;  
  display: flex;
  height: 100vh;
  justify-content: center;
`;

// Spinner credits:
// https://gist.github.com/adrianmcli/9fac3ff3c144c2805be90381eaa8d3d4

export { Spinner, LoadingWrapper };
