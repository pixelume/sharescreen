import React from 'react';
import styled from 'styled-components/macro';
import { CloseBtnRound } from '../FormStyles';

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  padding: 10px 0px;
`

const ElementPill = styled.div`
  position: relative;
  color: white;
  position: relative;
  padding: 5px 8px;
  background-color: ${({theme}) => theme[5]};
  border-radius: 3px;
  margin: 5px;
  /* white-space: nowrap; */
  font-size: 0.8em;
  max-width: 100%;
  /* overflow: auto; */
  /* &::after {
    position: absolute;
    content: 'x';
    right: 5px;
  } */
`
const ArrayElementsBox = ({elArray, deletePillHandler, field}) => (
  <Container>
    {elArray.map((el, idx) => (
      <ElementPill key={`arrEl-${idx}`}>
        {el}<CloseBtnRound tabIndex={-1} onClick={() => deletePillHandler(idx, field)}>&times;</CloseBtnRound>
      </ElementPill>
      ))}
  </Container>
)

export default ArrayElementsBox;