import React, { useContext, useState } from "react";
import { Formfield, Input } from "../FormStyles";
import { MdClear } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
// import { FilterSearchCtx } from '../../../Pages/Catalogue';
import { Context } from "../../../components/RootElement";
// import { Context } from "../../../App";
// import {FilterSearchCtx} from "../../../Pages/Catalogue";
import { OpenBtn } from "../../Layout/SideDrawer";
import { IoFunnelOutline } from "react-icons/io5";
import { H3 } from "../../Layout";
import { useQuery, gql } from "@apollo/client";
import LoadAnimation from "../../../styles/LoadAnimation";
import Notification from '../../../styles/Notification';
import { Select } from 'grommet';

const GET_TAGS = gql`
  query GetTagsData {
    tags {
      Title
    }
  }
`;

const FilterIcon = styled(OpenBtn).attrs({
  as: "div",
})`
  position: static;
  margin-right: 0.5em;
`;

const SearchInput = styled(Input)`
  /* height: 3em; */
  font-size: 1.2em;
  padding-left: 3em;
`;

const iconStyle = {
  display: "block",
  position: "absolute",
  left: "0.5em",
  top: "0.375em",
  color: "darkgrey",
  fontSize: "1.5em",
};

const clearBtnStyle = {
  display: "block",
  position: "absolute",
  right: "0.75em",
  top: "0.25em",
  color: "darkgrey",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "1.5em",
};

const FlexBox = styled.div`
  display: flex;
  margin: 1em 0;
  flex-wrap:${({wrap}) => wrap || 'nowrap'};
`;

const KeywordContainer = styled.div`
  position: relative;
  padding: 0.1em 1.8em 0.1em 0.3em;
  background-color: ${({theme}) => theme.dark1};
  border-radius: 10px;
  color: white;
  margin: 0.2em;
  font-size: 0.8em;
`

const KeywCloseBtn = styled.button.attrs({type: 'button'})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  /* border-radius: 50%; */
  /* border: 2px solid white; */
  width: 1.1em;
  height: 100%;
  font-size: 1.5em;
  background-color: rgba(255,255,255,0.5);
  cursor: pointer;
`

const FilterSearch = (props) => {
  // const [keywords, setKeywords] = useState([])
  const { searchTerm, setSearchTerm, keywords, setKeywords, tagsArr } = useContext(Context);
  // const { searchTerm, setSearchTerm, keywords, setKeywords } = useContext(FilterSearchCtx);
  const { loading, error, data } = useQuery(GET_TAGS);

  const removeKeyw = keyw => {
    const indexOfKeyw = keywords.indexOf(keyw);
    let newArr = [];
    switch (indexOfKeyw) {
      case 0:
        newArr = keywords.slice(1);
        break;
      case keywords.length-1:
        newArr = keywords.slice(0, keywords.length-1);
        break;
      case -1:
        newArr = keywords
        break
      default:
        newArr = keywords.slice(0, indexOfKeyw).concat(keywords.slice(indexOfKeyw+1))
        break;
    }
    setKeywords(newArr);
  }

  return (
    <>
      <FlexBox>
        <FilterIcon>
          <IoFunnelOutline />
        </FilterIcon>
        <H3>Fliter by</H3>
      </FlexBox>
        <form>
          <FlexBox>
            <h3 style={{margin: 'auto 1em auto 0'}}>Tags:</h3>
            <Select
              options={tagsArr.map(tagObj => tagObj.Title)}
              onChange={({ option }) => setKeywords(keywords.concat(option))}
              clear={{position:'bottom'}}
              value=''
              // closeOnChange={false}
            />
          </FlexBox>
          <FlexBox wrap="wrap">{keywords? keywords.map((keyw, idx) => <KeywordContainer key={`keyw${idx}`}>{keyw}<KeywCloseBtn onClick={() => removeKeyw(keyw)}>&times;</KeywCloseBtn></KeywordContainer>): null}</FlexBox>
        </form>
      {/* {loading && <LoadAnimation />}
      {data && data.tags && (
        <form>
          <FlexBox>
            <h3 style={{margin: 'auto 1em auto 0'}}>Tags:</h3>
            <Select
              options={data.tags.map(tagObj => tagObj.Title)}
              onChange={({ option }) => setKeywords(keywords.concat(option))}
              clear={{position:'bottom'}}
              value=''
              // closeOnChange={false}
            />
          </FlexBox>
          <FlexBox wrap="wrap">{keywords? keywords.map((keyw, idx) => <KeywordContainer key={`keyw${idx}`}>{keyw}<KeywCloseBtn onClick={() => removeKeyw(keyw)}>&times;</KeywCloseBtn></KeywordContainer>): null}</FlexBox>
        </form>
      )}
      {error && <Notification color="red"><h3>Error fetching tags list</h3></Notification>} */}
    {/* <form>
      <Formfield style={{boxShadow: '0px 0px 3px -1px #000000', borderRadius: '10px'}}>
        <SearchInput
          placeholder="Search Presentations"
          id="search"
          type="search"
          aria-label="Description"
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <FiSearch style={iconStyle} />
      </Formfield>
    </form> */}
    </>

  );
};

export default FilterSearch;
