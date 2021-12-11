import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"
// import { DataContext } from "../layout"
import { Link } from 'gatsby';

// import {ReactComponent as Logo} from '../../../images/logo_optimised.svg'
// import Logo from '../../../svg/logo_optimised.svg'
// import Logo from '../../../images/web_logo.png'
import { StaticImage } from "gatsby-plugin-image"


// SVG Dimensions are 455 by 243

const TitleCont = styled(Link)`
  display: flex;
  /* width: 200px; */
  justify-content: center;
  align-items: center;
  /* margin-left: 20px; */
  cursor: pointer;
  color: #84986b;
  flex-shrink: 0;
`
// export const StLogo = styled(Logo)`
//   height: ${({theme}) => theme.headerHeightBig}px;
//   width: 100px;
// `

const Title = () => {

  // const {title, logo} = useContext(DataContext)

  return (
    <TitleCont to="/">
      <StaticImage width={70} 
        height={70} src="../../../images/web_logo.png" 
        alt="ShareScreen Logo"
        // style={{overflow: 'visible'}}
        // imgStyle={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.25))'}}
      />
      <span style={{textAlign: "center"}}><span style={{fontWeight: "bold", marginLeft: 10}}>ShareScreen</span><br/><span>Africa</span></span>
      {/* <StLogo viewBox="0 0 455 243" width="100px" preserveAspectRatio="xMidYMid meet"/> */}
      {/* <Img fixed={logo} alt={title} title={title}/> */}
      {/* <h1>{title}</h1> */}
    </TitleCont>
  )
}

export default Title
