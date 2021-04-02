import React from 'react';
import styled, {keyframes} from 'styled-components';

const LdsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const LdsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const LdsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`
const LdsEllipsis = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: 200px;
`

const LdsEllipsisChild = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #D1E3FF;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  &:nth-child(1) {
    left: 8px;
    animation: ${LdsEllipsis1} 0.6s infinite;
  }
  &:nth-child(2) {
    left: 8px;
    animation: ${LdsEllipsis2} 0.6s infinite;
  }
  &:nth-child(3) {
    left: 32px;
    animation: ${LdsEllipsis2} 0.6s infinite;
  }
  &:nth-child(4) {
    left: 56px;
    animation: ${LdsEllipsis3} 0.6s infinite;
  }
`

const LoadAnimation = () => (
  <LdsEllipsis><LdsEllipsisChild/><LdsEllipsisChild/><LdsEllipsisChild/><LdsEllipsisChild/></LdsEllipsis>
)

export default LoadAnimation;