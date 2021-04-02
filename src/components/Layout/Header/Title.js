import React, {useContext} from "react"
import styled from "styled-components"
// import Img from "gatsby-image"
// import { DataContext } from "../layout"
import { Link } from 'gatsby';

// import {ReactComponent as Logo} from '../../../images/logo_optimised.svg'
import Logo from '../../../svg/logo_optimised.svg'

// SVG Dimensions are 455 by 243

const TitleCont = styled(Link)`
  display: block;
  /* width: 200px; */
  /* justify-content: center; */
  /* align-items: center; */
  /* margin-left: 20px; */
  cursor: pointer;
`
export const StLogo = styled(Logo)`
  height: ${({theme}) => theme.headerHeightBig};
  width: 100px;
`

const Title = () => {

  // const {title, logo} = useContext(DataContext)

  return (
    <TitleCont to="/">
      <StLogo viewBox="0 0 455 243" width="100px" preserveAspectRatio="xMidYMid meet"/>
      {/* <Img fixed={logo} alt={title} title={title}/> */}
      {/* <h1>{title}</h1> */}
    </TitleCont>
  )
}

export default Title
