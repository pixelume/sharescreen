import React, { useContext, useState } from 'react';
import { Section, ColInSection } from '../components/Layout';
import PresentersTable from '../components/presentersTable';
// import styled from 'styled-components';
import {
  Input,
  Formfield,
  clearBtnStyle as searchIcnStyle,
} from '../components/Forms/FormStyles';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { Context } from '../components/RootElement';
import PresentersCards from '../components/presentersCards';
import CategoriesNav from '../components/Navigation/CategoriesNav';

const useSortByPresenter = (arrayToSort, headings) => {
  const [sortBy, setSortBy] = useState(false);

  const sortedArray = () => {
    switch (sortBy.heading) {
      case headings[0]: // by Presenter
        const arr0 = arrayToSort.sort((a, b) =>
          `${a.surname}${a.name}`.localeCompare(`${b.surname}${b.name}`)
        );
        return sortBy.ascending ? arr0 : arr0.reverse();
      case headings[2]: // by Current Institution
        const arr1 = arrayToSort.sort((a, b) =>
          a.institution.localeCompare(b.institution)
        );
        return sortBy.ascending ? arr1 : arr1.reverse();
      default:
        return arrayToSort;
    }
  };
  return [sortBy, setSortBy, sortedArray(sortBy)];
};

const useSearchPresenter = (arrayToFilter) => {
  const [searchString, setSearchString] = useState('');
  const filteredArray = arrayToFilter.filter((presenter) => {
    const searchFullName = presenter.fullName
      ? presenter.fullName
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      : false;
    const searchInstitution = presenter.institution
      ? presenter.institution
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      : false;
    const searchSubjectMatter = presenter.subjectMatter
      ? presenter.subjectMatter
          .join(',')
          .toLowerCase()
          .includes(searchString.toLowerCase().trim())
      : false;
    return searchFullName || searchInstitution || searchSubjectMatter;
  });
  return [searchString, setSearchString, filteredArray];
};

const SubHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  'Presenter',
  'Qualifications',
  'Current Institution',
  'Role',
  'Subject Matter',
  'Presentations',
];

const PresentersPage = () => {
  const { presentersArr, category, setCategory } = useContext(Context);
  const [searchString, setSearchString, filteredArray] =
    useSearchPresenter(presentersArr);
  const [sortBy, setSortBy, sortedArray] = useSortByPresenter(
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

  return (
    <>
      <Section padding='40px 0px 0px'>
        <CategoriesNav />
        <ColInSection col={1}>
        <Formfield width='350px' style={{margin: 'auto'}}>
          <SearchInput
            id={'search'}
            type='text'
            placeholder='Search ( Name, Institution or Subject Matter)'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <FiSearch style={searchIcnStyle} />
        </Formfield>
        </ColInSection>
      </Section>
      {/* <SubHeader>
      </SubHeader> */}
      <Section padding='0px'>
        <ColInSection col={1} textAlign='center'>
          {/* <PresentersTable {...{ sortedArray, headings, sortClickHandler }} /> */}
          <PresentersCards {...{ sortedArray, headings, sortClickHandler }} />
        </ColInSection>
      </Section>
    </>
  );
};

export default PresentersPage;
