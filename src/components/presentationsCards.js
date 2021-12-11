import React /* , { useState, useContext } */ from 'react';
import SortArrows from '../svg/sort_arrows.svg';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Box, Card, CardBody, CardFooter, Grid, Text } from 'grommet';
import { BsLink } from 'react-icons/bs';
import { H3, P, H4 } from './Layout';
import { useTheme } from 'styled-components';
import { brandColors } from '../styles/Theme';
// import { Ul } from './tableStyles';

const PresentationsCards = ({ sortedArray, headings, sortClickHandler }) => {
  const color = useTheme(brandColors);

  // const renderSubjectsSummary = (subjectMatter) => {
  //   if (subjectMatter && subjectMatter.length > 0) {
  //     const summary = subjectMatter.join('|').slice(0, 50).split('|');
  //     return summary.map((subj, index) => {
  //       const idxOfLastEl = summary.length - 1
  //       return (
  //       <li key={`subj-${index}`}>
  //         {`${subj} `}{index === idxOfLastEl? <span style={{ color: color[5] }}>...see more</span>: null}
  //       </li>
  //     )
  //   });
  //   } else return null;
  // };

  return (
    <Box pad='large' height='100%'>
      {/* <Grid gap='medium' columns={{ count: 'fill', size: 'small' }}> */}
      <Grid gap='medium' columns={'350px'}>
        {sortedArray.map((presentation) => {
          console.log(presentation.image ? 'has pic' : 'no pic');
          return (
            <Card
              as={Link}
              to={`/${presentation.slug}`}
              key={presentation.id}
              // style={{maxWidth: '350px'}}
              // onClick={() => {

              //   alert('Card was Clicked!');
              // }}
            >
              <CardBody pad='small'>
                {presentation.image &&
                presentation.image.localFile ? (
                  <GatsbyImage
                    image={getImage(presentation.image.localFile)}
                    // style={{ borderRadius: '50%', width: 100, height: 100 }}
                    alt={presentation.name}
                  />
                ) : (
                  <StaticImage
                    src='../images/placeholder_image.png'
                    // layout='fixed'
                    // width={100}
                    // height={100}
                  />
                )}
                {/* <Identifier
                title={value.title}
                subTitle={value.subTitle}
                size="small"
              >
                {value.icon}
              </Identifier> */}
                {/* <ChartPreview type={value.type} /> */}
              </CardBody>
              <CardFooter
                direction='column'
                pad={{ horizontal: 'medium', vertical: 'small' }}
              >
                <H4
                  textAlign='center'
                  color='charcoal'
                >{`${presentation.name}`}</H4>
                {/* <ul style={{ textAlign: 'left' }}>
                  {renderSubjectsSummary(presenter.subjectMatter)}
                </ul> */}
                <P color='5'>
                  {`${presentation.presenter?.title ?? ''} ${presentation.presenter?.fullName ?? ''}`}
                  {/* {presenter.qualifications &&
                  presenter.qualifications.length > 0
                    ? presenter.qualifications.map((qualification, idx2) => (
                        <span key={`qual-${idx2}`}>{`${qualification}${
                          idx2 !== presenter.qualifications.length - 1
                            ? ', '
                            : ''
                        }`}</span>
                      ))
                    : null} */}
                </P>
                {/* <Text size='xsmall'>{`${presenter.title} ${presenter.fullName}`}</Text> */}
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PresentationsCards;
