import React, { useContext } from "react";
import SubHeader from "../../components/Layout/SubHeader";
import CatalogueNavItems from "../../components/Navigation/CatalogueNavItems";
import SideDrawer from "../../components/Layout/SideDrawer";
import FilterSearch from "../../components/Forms/FilterSearch/FilterSearch";
import Cards from '../../components/Cards/Cards';
import { Context } from '../../components/RootElement';

// export const FilterSearchCtx = React.createContext();

const PresentationsPage = ({ limit }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [keywords, setKeywords] = useState(['Sudan', 'Africa']);

  const {
    presentationsArr,
    // searchTerm,
    keywords
  } = useContext(Context);

  const getKeywordData = () => {
    if (!keywords || keywords.length === 0) {
      if (presentationsArr) {
        return presentationsArr;
      }
    }
    const regex = new RegExp(keywords.join('|'), "i");
    if (regex && presentationsArr && presentationsArr.length > 0) {
      return presentationsArr.filter(
        (presentation) =>
          // regex.test(presentation.Name) ||
          // regex.test(presentation.Description) ||
          presentation.tags.filter((tag) => regex.test(tag.Title)).length > 0
      );
    }
  };

  // const getSearchData = () => {
  //   if (!searchTerm || searchTerm === "") {
  //     if (presentationData) {
  //       return presentationData;
  //     }
  //   }
  //   const regex = new RegExp(searchTerm, "i");
  //   if (regex && presentationData && presentationData.length > 0) {
  //     return presentationData.filter(
  //       (presentation) =>
  //         regex.test(presentation.Name) ||
  //         regex.test(presentation.Description) ||
  //         presentation.tags.filter((tag) => regex.test(tag.Title)).length > 0
  //     );
  //   }
  // };

  return (
    <>
      <SubHeader>
        <CatalogueNavItems />
      </SubHeader>
      {/* <FilterSearchCtx.Provider value={{ searchTerm, setSearchTerm, keywords: keywords, setKeywords }}> */}
      <SideDrawer>
        <FilterSearch />
      </SideDrawer>
      {presentationsArr && <Cards presentationsArr={getKeywordData()} limit={limit} />}
      {/* {presentationsArr && <Cards presentationsArr={getKeywordData()} limit={limit} />} */}
      {/* </FilterSearchCtx.Provider> */}
    </>
  );
};

export default PresentationsPage;
