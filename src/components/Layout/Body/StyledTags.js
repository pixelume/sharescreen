import styled, { css } from "styled-components";

const baseSize = {
  desktop: 3,
  mobile: 2.5,
};

const H1 = styled.h1`
  color: ${({ theme, color }) => theme[color] || color || theme.textDark1};
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${baseSize.mobile}em;
  @media only screen and (orientation: landscape) {
    font-size: ${baseSize.desktop}em;
  }
  font-weight: bold;
`;
const H3 = styled.h3`
  color: ${({ color, theme }) => theme[color] || color || theme.dark1};
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
const H4 = styled.h4`
  color: ${({ color, theme }) => theme[color] || color || theme.dark1};
  /* color: slategrey; */
  text-align: ${(props) => props.textAlign || "left"};
  font-size: ${baseSize.mobile / 3}em;
  /* text-transform: uppercase; */
  font-weight: bold;
  margin: ${(props) => props.margin || "auto"};
  letter-spacing: ${baseSize.mobile / 50}em;
  @media only screen and (orientation: landscape) {
    font-size: ${baseSize.desktop / 4}em;
    letter-spacing: ${baseSize.desktop / 50}em;
  }
`;

const P = styled.p`
  color: ${({ color, theme }) => theme[color] || color || theme.textDark1};
  text-align: ${(props) => props.textAlign || "left"};
  margin: ${(props) => props.margin || "auto"};
  font-size: ${({sizeFactor}) => (baseSize.mobile / 3) * sizeFactor || 1}em;
  ${(props) =>
    props.lineHeight
      ? css`
          line-height: ${props.lineHeight};
        `
      : css`
          line-height: 1.7em;
        `}
  @media only screen and (orientation: landscape) {
    /* padding-left: 15px;
    padding-right: 15px; */
    font-size: ${({sizeFactor}) => (baseSize.desktop / 3.6) * sizeFactor || 1}em;
    letter-spacing: ${baseSize.desktop / 50}em;
    box-sizing: border-box;
  }
`;

const SmallHeading = styled.span`
  color: ${({ color, theme }) => theme[color] || color || theme.mediumDark1};
  font-weight: bold;
`

const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 3px -1px #000000;
`;

const imgStyle = {
  width: '100%',
  borderRadius: '15px',
  boxShadow: '0px 0px 3px -1px #000000',
  minHeight: 233,
  PointerEvent: 'none',
  cursor: 'pointer'
}

export { H1, H3, P, H4, Img, imgStyle, SmallHeading };
