import styled from 'styled-components'
import React from 'react'


export const StyledBurger = styled.button`
  display: none;
  
  &:focus {
    outline: none;
  }

  @media(max-width: ${({theme}) => theme.mobileMenu}) {
    position: fixed;
    top: calc(${({theme}) => theme.headerHeightBig/2}px - 1rem);
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({theme}) => theme.textDark1};
    /* background: ${({ theme }) => theme.primaryLight}; */
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateY(10px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
`;

const Burger = ({open, clickHandler}) => {
  return (
    <StyledBurger onClick={clickHandler} open={open}>
      <div style={{backgroundColor: 'black'}}/>
      <div style={{backgroundColor: 'black'}}/>
      <div style={{backgroundColor: 'black'}}/>
    </StyledBurger>
  )
}

export default Burger;