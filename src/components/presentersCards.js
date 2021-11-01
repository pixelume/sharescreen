import React /* , { useState, useContext } */ from 'react';
import SortArrows from '../svg/sort_arrows.svg';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Box, Card, CardBody, CardFooter, Grid, Text } from 'grommet';
import { BsLink } from 'react-icons/bs';
import { H3, P } from './Layout';
import { useTheme } from 'styled-components';
import { brandColors } from '../styles/Theme';

const PresentersCards = ({ sortedArray, headings, sortClickHandler }) => {
  const color = useTheme(brandColors);
  return (
    <Box pad='large' height='100%'>
      {/* <Grid gap='medium' columns={{ count: 'fill', size: 'small' }}> */}
      <Grid gap='medium' columns={'350px'}>
        {sortedArray.map((presenter) => {
          console.log(presenter.profilePicture ? 'has pic' : 'no pic');
          return (
            <Card
              as={Link}
              to={`/${presenter.slug}`}
              key={presenter.id}
              // style={{maxWidth: '350px'}}
              // onClick={() => {

              //   alert('Card was Clicked!');
              // }}
            >
              <CardBody pad='small'>
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
                <H3
                  textAlign='center'
                  color='3'
                >{`${presenter.title} ${presenter.fullName}`}</H3>
                <P>
                  {presenter.subjectMatter && presenter.subjectMatter.length > 0
                    ? presenter.subjectMatter.map((subject, idx2) => {
                        const idxOfLastEl = presenter.subjectMatter.length - 1;
                        return idx2 < 4 ? (
                          <span key={`qual-${idx2}`}>{`${subject}${
                            idx2 !== idxOfLastEl ? ', ' : ''
                          }`}</span>
                        ) : idx2 === idxOfLastEl ? (
                          <span style={{ color: color[5] }}>...see more</span>
                        ) : null;
                      })
                    : null}
                </P>
                <P color='5'>
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
      </Grid>
    </Box>
  );
};

export default PresentersCards;
