import styled, { css } from "styled-components";

const baseSize = {
  desktop: 4,
  mobile: 2.5,
};

const H1 = styled.h1`
  color: ${({ theme }) => theme.greyBlue};
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${baseSize.mobile}em;
  @media only screen and (orientation: landscape) {
    font-size: ${baseSize.desktop}em;
  }
  font-weight: bold;
`;
const SubHeading = styled.h3`
  color: ${({ color, theme }) => theme[color] || color || "olive"};
  /* color: slategrey; */
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${baseSize.mobile / 2.5}em;
  text-transform: uppercase;
  font-weight: bold;
  margin: ${(props) => props.margin || "auto"};
  letter-spacing: ${baseSize.mobile / 50}em;
  @media only screen and (orientation: landscape) {
    font-size: ${baseSize.desktop / 3}em;
    letter-spacing: ${baseSize.desktop / 50}em;
  }
`;

const P = styled.p`
  color: ${({ color, theme }) => theme[color] || color || theme.greyBlue};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "auto"};
  ${(props) =>
    props.lineHeight
      ? css`
          line-height: ${props.lineHeight};
        `
      : css`
          line-height: 1.7em;
        `}
  @media only screen and (orientation: landscape) {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 3px -1px #000000;
`;

const imgStyle = {
  width: '100%',
  borderRadius: '15px',
  boxShadow: '0px 0px 3px -1px #000000',
}

export { H1, SubHeading, P, Img, imgStyle };
