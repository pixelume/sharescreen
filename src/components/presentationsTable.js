import React /* , { useState, useContext } */ from 'react';
import SortArrows from '../svg/sort_arrows.svg';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
// import { Context } from './RootElement';
// import useSortBy from '../hooks/useSortby';
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
} from './tableStyles';

const PresentationsTable = ({ sortedArray, headings, sortClickHandler }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {headings.map((heading, idx) => {
              const isSortable = ['Name', 'Presenter'].includes(heading);
              return (
                <Th
                  key={`heading-${idx}-${heading}`}
                  onClick={isSortable ? () => sortClickHandler(heading) : null}
                  colSpan={idx == 0 ? 2 : 1}
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
          {sortedArray.map((presentation, idx) => {
            return (
              <Tr key={`row-${idx}`}>
                <Td style={{verticalAlign: 'middle'}}>
                  <StLink to={`/${presentation.slug}`}>
                    {presentation.image.localFile ? (
                      <GatsbyImage
                        // image={getImage(pData[idx].profilePicture.localFile)}
                        image={getImage(presentation.image.localFile)}
                        style={{ borderRadius: '3px', width: 250 }}
                        alt={presentation.name}
                      />
                    ) : (
                      <StaticImage
                        src='../images/placeholder_image.png'
                        layout='fixed'
                        width={100}
                        height={100}
                      />
                    )}
                    {/* <div
                      style={{
                        fontWeight: 'bold',
                        marginTop: 5,
                        textAlign: 'center',
                      }}
                    >
                      {presentation.title}&nbsp;{presentation.fullName}
                    </div> */}
                  </StLink>
                </Td>
                <Td style={{verticalAlign: 'middle'}}>
                  {/* <TdChildMultiLine style={{ fontWeight: 'bold' }}>
                    {headings[0]}
                  </TdChildMultiLine> */}
                  <TdChildMultiLine style={{ fontWeight: 'bold', marginBottom: 15 }}>
                    {presentation.name}
                    {/* <Ul>
                      {presentation.qualifications &&
                      presentation.qualifications.length > 0 ? (
                        presentation.qualifications.map((qualification, idx2) => (
                          <li key={`qual-${idx2}`}>{qualification}</li>
                        ))
                      ) : (
                        <li>-</li>
                      )}
                    </Ul> */}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    <span style={{fontWeight: 'bold'}}>By:</span>&nbsp;
                    <StLink
                      to={
                        presentation.presenter
                          ? `/${presentation.presenter.slug}`
                          : '#'
                      }
                    >
                      {presentation.presenter
                        ? presentation.presenter.fullName
                        : '-'}
                    </StLink>
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                  <span style={{fontWeight: 'bold'}}>Topic:</span>&nbsp;{presentation.topic ? presentation.topic : '-'}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                  <span style={{fontWeight: 'bold'}}>Duration:</span>&nbsp;
                    {presentation.duration ? presentation.duration : '-'}
                  </TdChildMultiLine>
                </Td>
                <Td width='40%'>
                  <TdChildMultiLine style={{ fontWeight: 'bold', marginBottom: 15 }}>
                    {headings[1]}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    {presentation.description ? presentation.description : '-'}
                  </TdChildMultiLine>
                </Td>
                <Td width='15%'>
                  <TdChildMultiLine style={{ fontWeight: 'bold' }}>
                    {headings[2]}
                  </TdChildMultiLine>
                  <TdChildMultiLine>
                    <Ul>
                      {presentation.tags &&
                      presentation.tags.length > 0 ? (
                        presentation.tags.map((tag, idx2) => (
                          <li key={`tag-${idx2}`}>{tag}</li>
                        ))
                      ) : (
                        <li>-</li>
                      )}
                    </Ul>
                  </TdChildMultiLine>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PresentationsTable;
