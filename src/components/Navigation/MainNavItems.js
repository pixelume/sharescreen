import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Context } from '../RootElement';
import { Link } from 'gatsby';

const NavLink = styled(Link).attrs({
  activeClassName: 'active',
})`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: ${({ highlite }) => (highlite ? 'white' : 'grey')};
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  /* border-left: 1px solid lightgrey; */
  font-size: inherit;
  background-color: inherit;
  cursor: pointer;
  ${({ large }) =>
      large
        ? css`
            font-size: 3em;
          `
        : null}
  ${({ highlite }) =>
      highlite
        ? css`
            color: lightcoral;
          `
        : null}
  @media (min-width: ${({ theme }) => theme.mobileMenu}) {
    /* border-right: 1px solid lightgrey; */
      ${({ large }) =>
      !large
        ? css`
            &:hover,
            &.active {
              /* box-sizing: border-box; */
              padding: 0px 20px;
            }
            &:hover {
              border-bottom: 5px solid ${({ theme }) => theme.medium1};
            }
          `
        : null}
    &.active {
      border-bottom: 5px solid ${({ theme }) => theme.dark1};
    }
    /* &:last-child {
      border-right: none;
    } */
  }
  /* color: ${({ theme }) => theme.primaryDark}; */
  transition: color 0.3s linear;
  &.active {
    color: ${({ theme }) => theme.dark1};
  }
  &:hover {
    color: ${({ theme }) => theme.medium1};
    /* text-decoration: underline; */
  }
  @media (max-width: ${({ theme }) => theme.mobileMenu}) {
    /* font-size: 1em; */
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid lightgrey;
    &:first-child {
      border-top: 1px solid lightgrey;
    }
  }
`;

// const NavButton = styled(Link)`
//   display: flex;
//   position: relative;
//   align-items: center;
//   justify-content: center;
//   padding: 5px 10px;
//   font-size: inherit;
//   background-color: transparent;
//   border: 1px solid ${({theme}) => theme.medium1};
//   color: ${({theme}) => theme.medium1};
//   border-radius: 5px;
//   cursor: pointer;
//   align-self: center;
//   ${({solid}) => solid? css`
//     background-color: ${({theme}) => theme.medium1};
//     color: white;
//   `: null}
//   @media (min-width: ${({ theme }) => theme.mobileMenu}) {
//     &:nth-last-child(2) {
//       margin-left: 8vw;
//       margin-right: 15px;
//     }
//     &:last-child {
//       margin-right: 8vw;
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.mobileMenu}) {
//     font-size: 1em;
//     margin-top: 20px
//     /* text-align: center; */
//     /* padding: 20px 0px; */
//   }
// `;

const MainNavItems = ({ setNavOpen, navOpen, navData }) => {
  const { user, setUser } = useContext(Context);

  return navData.map((navItem, idx) => {
    if (
      (!user && navItem.show !== 'loggedIn') || // signed out
      (user.jwt &&
        navItem.show !== 'loggedOut' &&
        ['Any', user.user.role.name].includes(navItem.role)) // signed in
    ) {
      if (navItem.text === 'Sign Out') {
        return (
          <NavLink
            as='button'
            key={idx}
            onClick={() => {
              setUser(false);
              if (navOpen) {
                setNavOpen(false);
              }
            }}
          >
            {navItem.icon}&nbsp;{navItem.text}
          </NavLink>
        );
      } /* else if (['Sign In', 'Register'].includes(navItem.id)) {
        return (
          <NavButton
            solid={navItem.id === 'Register'}
            key={idx}
            to={navItem.link}
            highlite={navItem.text === 'Admin'}
            large={navItem.id === 'MyProfile'}
            exact
            onClick={() => {
              if (navOpen) {
                setNavOpen(false);
              }
            }}
          >
            {navItem.icon}&nbsp;{navItem.text}
          </NavButton>
        )
      } */ else {
        return (
          <NavLink
            key={idx}
            to={navItem.link}
            highlite={navItem.text === 'Admin'}
            large={navItem.id === 'MyProfile'}
            exact
            onClick={() => {
              if (navOpen) {
                setNavOpen(false);
              }
            }}
          >
            {navItem.icon}&nbsp;{navItem.text}
          </NavLink>
        );
      }
    }
    return null;
  });
};

export default MainNavItems;
