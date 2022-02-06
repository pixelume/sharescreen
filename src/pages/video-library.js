import React, { useContext, useState } from 'react';
import { Section, ColInSection } from '../components/Layout';
import PresentationsTable from '../components/presentationsTable';
// import styled from 'styled-components';
import {
  Input,
  Formfield,
  clearBtnStyle as searchIcnStyle,
} from '../components/Forms/FormStyles';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { Context } from '../components/RootElement';
import PresentationsCards from '../components/presentationsCards';
import CategoriesNav from '../components/Navigation/CategoriesNav';

const useSortByPresentation = (arrayToSort, headings) => {
  const [sortBy, setSortBy] = useState(false);

  const sortedArray = () => {
    switch (sortBy.heading) {
      case headings[0]: // by Name
        const arr0 = arrayToSort.sort((a, b) => a.name.localeCompare(b.name));
        return sortBy.ascending ? arr0 : arr0.reverse();
      case headings[4]: // by Presenter
        const arr1 = arrayToSort.sort((a, b) =>
          (a.presenter
            ? a.presenter.surname
              ? a.presenter.surname
              : ''
            : ''
          ).localeCompare(
            b.presenter ? (b.presenter.surname ? b.presenter.surname : '') : ''
          )
        );
        return sortBy.ascending ? arr1 : arr1.reverse();
      default:
        return arrayToSort;
    }
  };
  return [sortBy, setSortBy, sortedArray(sortBy)];
};

const useSearchPresentation = (arrayToFilter) => {
  const [searchString, setSearchString] = useState('');
  const filteredArray = arrayToFilter.filter((presentation) => {
    const searchInName = presentation.name
      ? presentation.name
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      : false;
    const searchInDescription = presentation.description
      ? presentation.description
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      : false;
    const searchInTags = presentation.tags
      ? presentation.tags
          .join(',')
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      : false;
    return searchInName || searchInDescription || searchInTags;
  });
  return [searchString, setSearchString, filteredArray];
};

const SubHeader = styled.div`
  width: 100vw;
  padding: 5px 5vw;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.coolWhite};
  @media only screen and (min-width: 768) {
    padding: 5px 5px;
  }
`;

const SearchInput = styled(Input)`
  box-shadow: 1px 1px 5px rgb(0 0 0 / 10%);
`;

const headings = [
  'Presentation', // Image
  //Name, By, Topic & Duration
  'Description',
  // 'Main Topic',
  'Tags',
  // 'Presenter',
];

const VideoLibraryPage = () => {
  const { presentationsArr, category } = useContext(Context);
  const [searchString, setSearchString, filteredArray] =
    useSearchPresentation(presentationsArr);
  const [sortBy, setSortBy, sortedArray] = useSortByPresentation(
    filteredArray,
    headings
  );

  const sortClickHandler = (clickedHeading) => {
    if (sortBy.heading && sortBy.heading === clickedHeading) {
      setSortBy((sortBy) => ({ ...sortBy, ascending: !sortBy.ascending }));
    } else {
      setSortBy({ heading: clickedHeading, ascending: true });
    }
  };

  const catFilteredArray = presentationsArr.filter(presentation => presentation.categories.map(cat => cat.name).includes(category))

  const getArrToPass = () => {
    if (category && category !== "Uncategorised") {
      return catFilteredArray
    }
    return sortedArray
  }

  return (
    <>
      <Section padding='40px 0px 0px'>
        <CategoriesNav />
        <ColInSection col={1}>
        <Formfield width='350px' style={{margin: 'auto'}}>
          <SearchInput
            id={'search'}
            type='text'
            placeholder='Search...'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <FiSearch style={searchIcnStyle} />
        </Formfield>
        </ColInSection>
      </Section>
      <Section>
        <ColInSection col={1} textAlign='center'>
          <PresentationsCards arrToDisplay={getArrToPass()} {...{ headings, sortClickHandler }} />
          {/* <PresentationsTable
            {...{ sortedArray, headings, sortClickHandler }}
          /> */}
        </ColInSection>
      </Section>
    </>
  );
};

export default VideoLibraryPage;
