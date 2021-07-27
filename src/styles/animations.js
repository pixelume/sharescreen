import {keyframes} from 'styled-components';

export const fadeIn = keyframes`
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
`;

export const bounceOutRight = keyframes`
  0% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  5% {
    transform: translateX(30px);
    animation-timing-function: ease-in;
  }
  15% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translateX(38px);
    animation-timing-function: ease-in;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  52% {
    transform: translateX(80px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
`