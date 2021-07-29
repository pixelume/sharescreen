import React, { useContext } from 'react';
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
import useSortByPresentation from '../hooks/useSortbyPresentation';
import { Context } from '../components/RootElement';
import useSearchPresentation from '../hooks/useSearchPresentation';

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
  'Presentation', // Image
  //Name, By, Topic & Duration
  'Description',
  // 'Main Topic',
  'Tags',
  // 'Presenter',
];

const CataloguePage = () => {
  const { presentationsArr } = useContext(Context);
  const [searchString, setSearchString, filteredArray] = useSearchPresentation(presentationsArr);
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

  return (
    <>
      <SubHeader>
        <Formfield width='350px'>
          <SearchInput
            id={'search'}
            type='text'
            placeholder='Search ( Name, Tags or Description )'
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <FiSearch style={searchIcnStyle} />
        </Formfield>
      </SubHeader>
      <Section>
        <ColInSection col={1} textAlign='center'>
          <PresentationsTable {...{ sortedArray, headings, sortClickHandler }} />
        </ColInSection>
      </Section>
    </>
  );
};

export default CataloguePage;
