import styled, {css} from 'styled-components';
import { fadeIn } from './animations';

const Notification = styled.div`
  border-radius: ${({borderRadius}) => borderRadius || 'none'};
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  color: ${({ theme, color }) => theme[color].text || 'inherit'};
  background-color: ${({ theme, color }) => theme[color].bg || 'inherit'};
  animation: ${fadeIn} 0.3s ease-out ;
  `

export default Notification;
// ${props => props.animate? css`animation: ${fadeIn} 0.3s ease-out ;`: null }