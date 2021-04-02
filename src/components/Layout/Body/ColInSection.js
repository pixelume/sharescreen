import styled, { css } from "styled-components";

const ColInSection = styled.div`
  display: ${(props) => props.display || "block"};
  ${(props) =>
    props.justifyContent
      ? css`
          justify-content: ${props.justifyContent};
        `
      : null}
  ${(props) =>
    props.flexFlow
      ? css`
          flex-flow: ${props.flexFlow};
        `
      : null}
  text-align: ${(props) => props.textAlign || "left"};
  box-sizing: border-box;
  width: 100%;
  margin: 20px auto;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-radius: ${(props) => props.borderRadius || "none"};
  overflow: hidden;
  padding: ${(props) => props.paddingMobile || props.padding || "0px 5vw"};
  color: ${(props) => props.theme[props.color] || "inherit"};
  font-size: ${(props) => props.fontSize || "inherit"};
  line-height: ${(props) => props.lineHeight || "normal"};
  ${(props) =>
    props.colFlex
      ? css`
          display: flex;
          flex-flow: column;
          align-items: center;
        `
      : null}
  ${(props) =>
    props.shadow
      ? css`
          box-shadow: 1px 1px 8px -2px rgba(0, 0, 0, 0.75);
        `
      : null}
@media only screen and (orientation: landscape) {
    width: ${(props) =>
      props.col
        ? props.col === 1
          ? "100%"
          : `${90 / props.col - 1}vw`
        : "44vw"};
    margin: 0px;
    padding: ${(props) => props.paddingDesktop || props.padding || "0px"};
    &:nth-child(2) {
      border-left: 1px solid lightgrey;
      border-right: 1px solid lightgrey;
    }
  }
  ${(props) =>
    props.maintainAspect
      ? `
          position: relative;
          padding-bottom: 56.25%;
          padding-left: 0px;
          padding-right: 0px;
          @media only screen and (orientation: landscape) {
            padding-bottom: calc(0.5625 * ${(90/props.col-1) || 44}vw);
          }
        `
      : null}
`;

export { ColInSection };
