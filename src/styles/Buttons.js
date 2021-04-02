import styled, { css } from "styled-components";

export const Button = styled.button`
  display: ${({ display }) => display || "block"};
  border-radius: 10px;
  background-color: ${({ theme, color }) =>
    color ? theme[color].bg : "#f7f7f7"};
  color: ${({ theme, color }) => (color ? theme[color].text : "#000")};
  ${({ theme, bgColor }) =>
    bgColor
      ? theme[bgColor]
        ? css`
            background-color: ${theme[bgColor]};
          `
        : css`
            background-color: ${bgColor};
          `
      : null}
  ${({theme, textColor}) =>
    textColor
      ? theme[textColor]
        ? css`
            color: ${theme[textColor]};
          `
        : css`
            color: ${textColor};
          `
      : null}
  padding: ${({ padding }) => padding || "15px"};
  outline: none;
  cursor: pointer;
  border: none;
  margin: ${({ margin }) => margin || "auto"};
  box-shadow: 1px 1px 8px -4px rgba(0, 0, 0, 0.75);
  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : null}
`;
