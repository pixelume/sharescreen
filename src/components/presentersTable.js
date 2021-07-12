import React, {useState, useContext} from 'react';
import styled from 'styled-components/macro';
import SortArrows from '../svg/sort_arrows.svg';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Context } from './RootElement';
import useSortBy from '../hooks/useSortby';

const TableContainer = styled.div`
  position: relative;
  padding: 5px;
  margin: 25px auto auto;
  overflow-x: auto;
  font-size: 0.7em;
  @media screen and (min-width: 1024px) {
    width: 80%;
    font-size: 0.9em;
  }
`

const Table = styled.table`
  margin: auto;
  border-radius: 10px;
  font-size: 0.8em;
  border-collapse: collapse;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const Td = styled.td`
  text-align: left;
  padding: 20px;
  text-align: left;
  vertical-align: top;
  &:nth-child(1) {
    background-color: ${({theme}) => theme.whitish};
    padding: 30px;
  }
`;

const TdChildMultiLine = styled.div`
  margin-bottom: 5px;
  &:nth-last-child() {
    margin-bottom: 0px;
  }
`;

const Thead = styled.thead`
  background-color: ${({theme}) => theme.whitish};
`

const Th = styled.th`
  padding: 10px 20px;
  text-align: left;
  white-space: nowrap;
  &:nth-child(1) {
    text-align: center;
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid rgb(238, 243, 246);
`;

const Ul = styled.ul`
  padding-left: 15px;
`

const headings = [
  'Presenter',
  'Qualifications',
  'Current Institution',
  'Role',
  'Subject Matter',
  'Presentations',
];


const PresentersTable = () => {
  const { presentersArr } = useContext(Context);
  const [sortBy, setSortBy, sortedArray] = useSortBy(presentersArr, headings)

  const sortClickHandler = clickedHeading => {
    if (sortBy.heading && sortBy.heading === clickedHeading) {

      setSortBy((sortBy) => ({...sortBy, ascending: !sortBy.ascending}));
    } else {
      setSortBy({heading: clickedHeading, ascending: true})
    }
  }

  return (
    <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {headings.map((heading, idx) => {
                  const isSortable = ['Presenter', 'Current Institution'].includes(heading)
                  return (
                  <Th
                    // colSpan={idx === 0 ? 2 : 1}
                    // style={{textAlign: 'left'}}
                    key={`heading-${idx}-${heading}`}
                    onClick={isSortable? () => sortClickHandler(heading): null}
                  >
                    {heading}{isSortable? <SortArrows style={{paddingLeft: 10, cursor: 'pointer'}}/>: null}
                  </Th>
                )
                })}
              </Tr>
            </Thead>
            <tbody>
              {sortedArray.map((presenter, idx) => {
                return (
                  <Tr key={`row-${idx}`}>
                    <Td>
                      <GatsbyImage
                        // image={getImage(pData[idx].profilePicture.localFile)}
                        image={getImage(presenter.profilePicture.localFile)}
                        style={{ borderRadius: '50%', width: 100, height: 100 }}
                        alt={presenter.fullName}
                      />
                      <div style={{fontWeight: 'bold', marginTop: 5, textAlign: 'center'}}>{presenter.title}&nbsp;{presenter.fullName}</div>
                    </Td>
                    <Td>
                      <TdChildMultiLine style={{fontWeight: 'bold'}}>
                      {headings[1]}
                      </TdChildMultiLine>
                      <TdChildMultiLine>
                      <Ul>
                        {presenter.qualifications.map((qualification, idx2) => (
                          <li key={`qual-${idx2}`}>{qualification}</li>
                        ))}
                      </Ul>
                      </TdChildMultiLine>
                    </Td>
                    <Td>
                    <TdChildMultiLine style={{fontWeight: 'bold'}}>
                      {headings[2]}
                      </TdChildMultiLine>
                    <TdChildMultiLine>{presenter.institution}</TdChildMultiLine>
                    </Td>
                    <Td>
                    <TdChildMultiLine style={{fontWeight: 'bold'}}>
                      {headings[3]}
                      </TdChildMultiLine>
                    <TdChildMultiLine>{presenter.role}</TdChildMultiLine>
                    </Td>
                    <Td>
                      <TdChildMultiLine style={{fontWeight: 'bold'}}>
                        {headings[4]}
                      </TdChildMultiLine>
                      <TdChildMultiLine>
                        <Ul>
                        {presenter.subjectMatter.map((subj, idx3) => (
                          <li key={`presenter-${idx}-subj-${idx3}`}>{subj}</li>
                        ))}
                        </Ul>
                      </TdChildMultiLine>
                    </Td>
                    <Td>
                      {presenter.presentations.map((presentation, idx3) => {
                        return (
                          <TdChildMultiLine
                            key={`presenter-${idx}-presentation-${idx3}`}
                          >
                            <div
                              style={{
                                display: 'flex',
                                flexFlow: 'row nowrap',
                                alignItems: 'center',
                              }}
                            >
                              <GatsbyImage
                                image={getImage(presentation.image.localFile)}
                                style={{ marginRight: 10, width: 60, flexShrink: 0 }}
                                alt={presentation.name}
                              />
                              <span>{presentation.name}</span>
                            </div>
                          </TdChildMultiLine>
                        );
                      })}
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
  );
}

export default PresentersTable;