import React, { useContext } from 'react';
import { Section, ColInSection } from '../components/Layout';
import styled from 'styled-components';
import { Context } from '../components/RootElement';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

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
  padding: 20px 10px;
  text-align: left;
  vertical-align: top;
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
  padding: 10px;
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
  list-style-type: circle;
`

const headings = [
  'Presenter',
  'Current Institution',
  'Role',
  'Subject Matter',
  'Presentations',
];

// allStrapiPresenter(sort: { order: DESC, fields: id }) {
//   nodes {
//     biography
//     city
//     email
//     role
//     institution
//     subjectMatter
//     title
//     fullName
//     id
//     slug
//     presentations {
//       name
//       image {
//         localFile {
//           childImageSharp {
//             gatsbyImageData(layout: FIXED, width: 350, height: 233)
//           }
//         }
//       }
//     }
//     profilePicture {
//       localFile {
//         childImageSharp {
//           gatsbyImageData(layout: FIXED, width: 350, height: 350)
//         }
//       }
//     }
//   }
// }

const PresentersPage = ({ data }) => {
  const { presentersArr } = useContext(Context);
  const pData = data.allStrapiPresenter.nodes;

  return (
    <Section>
      <ColInSection col={1} textAlign='center'>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                {headings.map((heading, idx) => (
                  <Th
                    colSpan={idx === 0 ? 2 : 1}
                    // style={{textAlign: 'left'}}
                    key={`heading-${idx}-${heading}`}
                  >
                    {heading}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <tbody>
              {presentersArr.map((presenter, idx) => {
                return (
                  <Tr key={`row-${idx}`}>
                    <Td>
                      <GatsbyImage
                        image={getImage(pData[idx].profilePicture.localFile)}
                        style={{ borderRadius: '50%' }}
                      />
                    </Td>
                    <Td>
                      <TdChildMultiLine style={{fontWeight: 'bold'}}>
                      {presenter.title}&nbsp;{presenter.fullName}
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
                      {headings[1]}
                      </TdChildMultiLine>
                    <TdChildMultiLine>{presenter.institution}</TdChildMultiLine>
                    </Td>
                    <Td>
                    <TdChildMultiLine style={{fontWeight: 'bold'}}>
                      {headings[2]}
                      </TdChildMultiLine>
                    <TdChildMultiLine>{presenter.role}</TdChildMultiLine>
                    </Td>
                    <Td>
                      <TdChildMultiLine style={{fontWeight: 'bold'}}>
                        {headings[3]}
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
                      {pData[idx].presentations.map((presentation, idx3) => {
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
      </ColInSection>
    </Section>
  );
};

export default PresentersPage;

export const pageQuery = graphql`
  query pageQ {
    allStrapiPresenter (sort: {fields: id, order: DESC}) {
      nodes {
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 100)
            }
          }
        }
        presentations {
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FIXED, height: 40)
              }
            }
          }
        }
      }
    }
  }
`;
