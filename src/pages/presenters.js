import React, { useContext } from 'react';
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
import useSortByPresenter from '../hooks/useSortByPresenter';
import useSearchPresenter from '../hooks/useSearchPresenter';
import { Context } from '../components/RootElement';

const SubHeader = styled.div`
  width: 100vw;
  padding: 5px 5vw;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.whitish};
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
  const { presentersArr } = useContext(Context);
  const [searchString, setSearchString, filteredArray] = useSearchPresenter(presentersArr);
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
      <SubHeader>
        <Formfield width='350px'>
          <SearchInput
            id={'search'}
            type='text'
            placeholder='Search ( Name, Institution or Subject Matter)'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <FiSearch style={searchIcnStyle} />
        </Formfield>
      </SubHeader>
      <Section>
        <ColInSection col={1} textAlign='center'>
          <PresentersTable {...{ sortedArray, headings, sortClickHandler }} />
        </ColInSection>
      </Section>
    </>
  );
};

export default PresentersPage;
