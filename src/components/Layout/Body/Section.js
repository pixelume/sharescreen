import styled, { css } from "styled-components";

const Section = styled.section`
  width: 100%;
  ${({minHeight}) => minHeight? css`min-height: ${minHeight};`: null}
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  border-radius: ${(props) => props.borderRadius || "none"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  ${(props) =>
    props.alignSelf
      ? css`
          align-self: ${props.alignSelf};
        `
      : null}
  padding: ${(props) => props.padding || "40px 0px"};
  color: ${({theme, color}) => color? theme[color]: 'inherit'};
  background-color: ${(props) =>
    props.theme[props.backgroundColor] ||
    props.backgroundColor ||
    "transparent"};
  margin: ${(props) => props.margin || "0px"};
  position: ${(props) =>
    props.slanted ? "relative" : props.position || "static"};
  overflow: visible;
  z-index: 0;
  @media only screen and (orientation: landscape) {
    padding-left: 5vw;
    padding-right: 5vw;
    ${(props) =>
      props.background
        ? css`
            background: ${props.background};
          `
        : null}
  }
  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : null}
  ${(props) =>
    props.slanted
      ? css`
          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background: inherit;
            z-index: -1;
            bottom: 0;
            left: 0;
            transform-origin: ${props => props.up? `left `: `right`} center;
            transform: skewY(${props => props.up? `-${props.slanted}deg`: `${props.slanted}deg`});
          }
        `
      : null}
`;

export { Section };
