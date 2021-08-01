import React, {useContext} from 'react';
import styled, {css} from 'styled-components';
import { Context } from '../RootElement';
import { Link } from 'gatsby';

const NavButton = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-size: inherit;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid ${({theme}) => theme.medium1};
  color: ${({theme}) => theme.medium1};
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  width: 115px;
  ${({solid}) => solid? css`
    background-color: ${({theme}) => theme.medium1};
    color: white;
  `: null}
  @media (min-width: ${({ theme }) => theme.mobileMenu}) {
    &:nth-last-child(2) {
      margin-left: 8vw;
      margin-right: 15px;
    }
    &:last-child {
      margin-right: 8vw;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileMenu}) {
    font-size: 1em;
    margin-top: 20px
    /* text-align: center; */
    /* padding: 20px 0px; */
  }
`;

const AuthBtnItems = ({ setNavOpen, navOpen, authBtnsData }) => {
  const { user } = useContext(Context);

  return authBtnsData.map((btn, idx) => {
    if (
      (!user && btn.show !== 'loggedIn') || // signed out
      (user.jwt &&
        btn.show !== 'loggedOut' &&
        ['Any', user.user.role.name].includes(btn.role)) // signed in
    ) {
      return (
        <NavButton
          solid={btn.id === 'Register'}
          key={idx}
          to={btn.link}
          highlite={btn.text === 'Admin'}
          large={btn.id === 'MyProfile'}
          exact
          onClick={() => {
            if (navOpen) {
              setNavOpen(false);
            }
          }}
        >
          {btn.icon}&nbsp;{btn.text}
        </NavButton>
      )
    }
    return null;
  });
}

export default AuthBtnItems;