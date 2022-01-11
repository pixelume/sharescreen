import React /* , { useState, useContext } */ from 'react';
import SortArrows from '../svg/sort_arrows.svg';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Box, Card, CardBody, CardFooter, Grid, Text } from 'grommet';
import { BsLink } from 'react-icons/bs';
import { H3, P } from './Layout';
import { useTheme } from 'styled-components';
import { brandColors } from '../styles/Theme';
// import { Ul } from './tableStyles';

const PresentersCards = ({ sortedArray, headings, sortClickHandler }) => {
  const color = useTheme(brandColors);

  const renderSubjectsSummary = (subjectMatter) => {
    if (subjectMatter && subjectMatter.length > 0) {
      const summary = subjectMatter.join('|').slice(0, 50).split('|');
      return summary.map((subj, index) => {
        const idxOfLastEl = summary.length - 1
        return (
        <P as='li' sizeFactor={0.9} key={`subj-${index}`}>
          {`${subj} `}{index === idxOfLastEl? <span style={{ color: color[5] }}>...see more</span>: null}
        </P>
      )
    });
    } else return null;
  };

  return (
    <Box height='100%' direction='row' wrap justify='center'>
      {/* <Grid gap='medium' columns={{ count: 'fill', size: 'small' }}> */}
      {/* <Grid gap='medium' columns={'350px'}> */}
        {sortedArray.map((presenter) => {
          console.log(presenter.profilePicture ? 'has pic' : 'no pic');
          return (
            <Card
              as={Link}
              to={`/${presenter.slug}`}
              key={presenter.id}
              width='300px'
              flex={false}
              margin='5px'
              elevation='xsmall'
              background={color.warmWhite}
              round='xsmall'
              // style={{maxWidth: '350px'}}
              // onClick={() => {

              //   alert('Card was Clicked!');
              // }}
            >
              <CardBody>
                {presenter.profilePicture &&
                presenter.profilePicture.localFile ? (
                  <GatsbyImage
                    image={getImage(presenter.profilePicture.localFile)}
                    // style={{ borderRadius: '50%', width: 100, height: 100 }}
                    alt={presenter.fullName}
                  />
                ) : (
                  <StaticImage
                    src='../images/placeholder_image.png'
                    // layout='fixed'
                    // width={100}
                    // height={100}
                  />
                )}
                <H3
                  textAlign='center'
                  color='3'
                  margin='5px 0px'
                >{`${presenter.title} ${presenter.fullName}`}</H3>
                <ul style={{ textAlign: 'left' }}>
                  {renderSubjectsSummary(presenter.subjectMatter)}
                  {/* {presenter.subjectMatter && presenter.subjectMatter.length > 0
                    ? presenter.subjectMatter.map((subject, idx) => {
                        const idxOfLastEl = presenter.subjectMatter.length - 1;
                        return idx < 4 ? (
                          <li key={`subj-${idx}`}>
                            {`${subject}${idx !== idxOfLastEl ? ', ' : ''}`}
                          </li>
                        ) : idx === idxOfLastEl ? (
                          <span style={{ color: color[5] }}>...see more</span>
                        ) : null;
                      })
                    : null} */}
                </ul>
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
                
                
                <P color='5' sizeFactor={1}>
                  {presenter.qualifications &&
                  presenter.qualifications.length > 0
                    ? presenter.qualifications.map((qualification, idx2) => (
                        <span key={`qual-${idx2}`}>{`${qualification}${
                          idx2 !== presenter.qualifications.length - 1
                            ? ', '
                            : ''
                        }`}</span>
                      ))
                    : null}
                </P>
                {/* <Text size='xsmall'>{`${presenter.title} ${presenter.fullName}`}</Text> */}
              </CardFooter>
            </Card>
          );
        })}
      {/* </Grid> */}
    </Box>
  );
};

export default PresentersCards;
