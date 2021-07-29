import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const SCard = styled(Link)`
  display: box;
  position: relative;
  border-radius: ${({ borderRadius }) => borderRadius || "15px"};
  background-color: #f7f7f7;
  box-shadow: 1px 1px 8px -4px rgba(0, 0, 0, 0.75);
  padding: 10px;
  width: 95%;
  /* max-width: 450px; */
  margin: ${(props) => props.margin || "10px auto"};
  animation: ${fadeIn} 1s ease-out ${(props) => props.idx * 0.3}s both;
  cursor: pointer;
  text-decoration: none;
  &:link,
  &:hover,
  &:visited,
  :any-link {
    color: black;
  }
  @media only screen and (orientation: landscape) {
    width: 450px;
  }
`;

export const Tile = styled(Link)`
  display: block;
  position: relative;
  width: 350px;
  ${({height}) => height? css`height: ${height};`: null}
  animation: ${fadeIn} 1s ease-out ${(props) => props.idx * 0.1}s both;
  overflow: hidden;
  margin: ${props => props.margin || '4px 4px'};
  @media only screen and (orientation: portrait) {
    margin: 4px auto;
  }
  box-shadow: 0px 0px 3px -1px #000000;
  &::before,
  ::after {
    content: "";
    display: box;
    position: absolute;
    left: 0px;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    background-color: rgba(49, 112, 142, 0.8);
    opacity: 0;
    transition: all 0.2s linear;
    z-index:1;
  }

  &::before {
    top: 100%;
  }
  &::after {
    top: -50%;
  }
  &:hover {
    &::before {
      top: 50%;
      opacity: 1;
      /* transform: translateY(-100%); */
    }
    &::after {
      top: 0%;
      opacity: 1;
      /* transform: translateY(100%) */
    }
  }
`;

export const TileOverlay = styled.div`
  text-align: center;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.5s ease-out 0.2s;
  z-index: 10;
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 10px 0px;
  background-color: lightgrey;
  transform: translateY(100%);
  border-radius: ${({ borderRadius }) => borderRadius || "0px 0px 15px 15px"};
  box-shadow: 1px 1px 8px -4px rgba(0, 0, 0, 0.75);
`;
