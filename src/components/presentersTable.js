import React /* , { useState, useContext } */ from 'react';
import SortArrows from '../svg/sort_arrows.svg';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import {
  TableContainer,
  Table,
  Td,
  TdChildMultiLine,
  Thead,
  Tbody,
  Th,
  Tr,
  Ul,
  StLink,
  StCol,
} from './tableStyles';

const PresentersTable = ({ sortedArray, headings, sortClickHandler }) => {
  return (
    <TableContainer>
      <Table>
        <StCol minWidth='140px' />
        <StCol minWidth='140px' />
        <StCol minWidth='140px' />
        <StCol minWidth='140px' />
        <StCol minWidth='140px' />
        <StCol minWidth='250px' />
        <Thead>
          <Tr>
            {headings.map((heading, idx) => {
              const isSortable = ['Presenter', 'Current Institution'].includes(
                heading
              );
              return (
                <Th
                  // colSpan={idx === 0 ? 2 : 1}
                  // style={{textAlign: 'left'}}
                  key={`heading-${idx}-${heading}`}
                  onClick={isSortable ? () => sortClickHandler(heading) : null}
                >
                  {heading}
                  {isSortable ? (
                    <SortArrows
                      style={{ paddingLeft: 10, cursor: 'pointer' }}
                    />
                  ) : null}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {sortedArray.map((presenter, idx) => {
            return (
              <Tr key={`row-${idx}`}>
                <Td>
                  <StLink to={`/${presenter.slug}`}>
                    {presenter.profilePicture.localFile ? (
                      <GatsbyImage
                        // image={getImage(pData[idx].profilePicture.localFile)}
                        image={getImage(presenter.profilePicture.localFile)}
                        style={{ borderRadius: '50%', width: 100, height: 100 }}
                        alt={presenter.fullName}
                      />
                    ) : (
                      <StaticImage
                        src='../images/placeholder_image.png'
                        layout='fixed'
                        width={100}
                        height={100}
                      />
                    )}
                    <div
                      style={{
                        fontWeight: 'bold',
                        marginTop: 5,
                        textAlign: 'center',
                      }}
                    >
                      {presenter.title}&nbsp;{presenter.fullName}
                    </div>
                  </StLink>
                </Td>
                <Td>
                  <TdChildMultiLine style={{ fontWeight: 'bold' }}>
                    {headings[1]}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    <Ul>
                      {presenter.qualifications &&
                      presenter.qualifications.length > 0 ? (
                        presenter.qualifications.map((qualification, idx2) => (
                          <li key={`qual-${idx2}`}>{qualification}</li>
                        ))
                      ) : (
                        <li>-</li>
                      )}
                    </Ul>
                  </TdChildMultiLine>
                </Td>
                <Td>
                  <TdChildMultiLine style={{ fontWeight: 'bold' }}>
                    {headings[2]}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    {presenter.institution ? presenter.institution : '-'}
                  </TdChildMultiLine>
                </Td>
                <Td>
                  <TdChildMultiLine style={{ fontWeight: 'bold' }}>
                    {headings[3]}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    {presenter.role ? presenter.role : '-'}
                  </TdChildMultiLine>
                </Td>
                <Td>
                  <TdChildMultiLine style={{ fontWeight: 'bold' }}>
                    {headings[4]}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    <Ul>
                      {presenter.subjectMatter &&
                      presenter.subjectMatter.length > 0 ? (
                        presenter.subjectMatter.map((subj, idx3) => (
                          <li key={`presenter-${idx}-subj-${idx3}`}>{subj}</li>
                        ))
                      ) : (
                        <li>-</li>
                      )}
                    </Ul>
                  </TdChildMultiLine>
                </Td>
                <Td>
                  {presenter.presentations && presenter.presentations.length > 0
                    ? presenter.presentations.map((presentation, idx3) => {
                        return (
                          <TdChildMultiLine
                            key={`presenter-${idx}-presentation-${idx3}`}
                          >
                            <StLink to={`/${presentation.slug}`}>
                              <div
                                style={{
                                  display: 'flex',
                                  flexFlow: 'row nowrap',
                                  alignItems: 'center',
                                }}
                              >
                                <GatsbyImage
                                  image={getImage(presentation.image.localFile)}
                                  style={{
                                    marginRight: 10,
                                    width: 100,
                                    flexShrink: 0,
                                  }}
                                  alt={presentation.name}
                                />
                                <span style={{ color: 'grey' }}>
                                  {presentation.name}
                                </span>
                              </div>
                            </StLink>
                          </TdChildMultiLine>
                        );
                      })
                    : 'Coming Soon'}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PresentersTable;
