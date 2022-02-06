import React, { useContext } from 'react';
import styled, {css} from 'styled-components';
import { Section, ColInSection, H3 } from '../Layout';
import catNavData from '../../data/catNavData';
import { Context } from '../RootElement';

const StNavItem = styled.button`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 7px;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.warmWhite};
  color: ${({ theme }) => theme[5]};
  margin: 2px;
  font-size: 0.7em;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme[3]};
    color: ${({ theme }) => theme.warmWhite};
  }
  ${({active, theme}) => active
    ? css`
        background-color: ${theme[3]};
        color: ${theme.warmWhite};
        box-shadow: 1px 1px 7px 0px rgba(0,0,0,0.75);
        transform: translate(-2px, -2px);
      `
    : null
  }
  @media screen and (orientation: landscape) {
    width: 150px;
    height: 150px;
    font-size: 1em;
    padding: 10px;
    margin: 5px;
  }
`;

  const IconSpan = styled.span`
    font-size: 2.2em;
    @media screen and (orientation: landscape) {
      font-size: 3em;
    }
  `

const NavItems = () => {
  const {category, setCategory} = useContext(Context)
  const navButtons = catNavData.map((item, idx) => {
    return (
      <StNavItem
        key={`catNav-${item.id}`}
        onClick={() => category === item.text? setCategory(''): setCategory(item.text)}
        // onClick={() => console.log(item.text)}
        active={item.id === category}
      >
        <div style={{fontSize: '3.5em', marginBottom: 10}}>{item.icon}</div>
        <div style={{fontSize: '0.75em'}}>{item.text}</div>
      </StNavItem>
    )
  })
  return navButtons
}

const CategoriesNav = () => {
  return (
    <>
      <ColInSection col={1} textAlign='center'>
        <H3 textAlign='center'>Categories</H3>
      </ColInSection>
      <ColInSection col={1} textAlign='center' display='flex' flexFlow='row wrap' justifyContent='center'>
        <NavItems/>
      </ColInSection>
    </>
  );
};

export default CategoriesNav;
