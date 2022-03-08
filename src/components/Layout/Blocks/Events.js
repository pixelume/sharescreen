import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Section, ColInSection, H3, P } from '../';
import { useContext } from 'react';
import { Context } from '../../RootElement';
import { format } from 'date-fns';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import Carousel from 'react-material-ui-carousel';
import { useMediaQuery } from '@mui/material';

const Events = () => {
  const { eventsArr } = useContext(Context);
  const isMobile = useMediaQuery('(max-width:600px)')

  const imgStyle = {
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0px 0px 3px -1px #000000',
    minHeight: 350,
  };

  const CarouselItem = ({ item }) => {
    const image = item.image ? getImage(item.image.localFile) : null;

    return (
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} md={6}>
          {item.image ? (
            <GatsbyImage image={image} alt={item.title} style={imgStyle} />
          ) : (
            <StaticImage
              src='../../images/placeholder_image.png'
              layout='fixed'
              width={350}
              height={350}
            />
          )}
          {/* <Box
            sx={{
              width: '350px',
              height: '350px',
              backgroundColor: 'rgba(255,255,255,0.8)',
            }}
          /> */}
        </Grid>
        <Grid
          xs={12}
          md={6}
          item
          container
          direction='column'
          sx={{ color: 'white' }}
          justifyContent='space-evenly'
        >
          <Grid item>
            <Box sx={{ p: 1.5 }}>
              <H3 margin='0px' textAlign='left'>
                Date & Time:{' '}
              </H3>
              <P margin='0px' textAlign='left'>
                {format(new Date(item.date_time), 'dd MMMM yyyy, HH:mm')}
              </P>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ p: 1.5 }}>
              <H3 margin='0px' textAlign='left'>
                Title:{' '}
              </H3>
              <P margin='0px' textAlign='left'>
                {item.topic}
              </P>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ p: 1.5 }}>
              <H3 margin='0px' textAlign='left'>
                By:{' '}
              </H3>
              <P margin='0px' textAlign='left'>
                {`${item.presenter.title ?? ''} ${item.presenter.fullName}`}
                <br />
                {item.presenter.qualifications ? (
                  <>
                    {item.presenter.qualifications.map((qual, idx) => (
                      <span key={`qual-${idx}`}>{qual},&nbsp;</span>
                    ))}
                  </>
                ) : null}
              </P>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                p: 1.5,
                '&> h3 > a': { color: 'white', textDecoration: 'underline' },
              }}
            >
              <H3>
                <a
                  href={item.zoom_link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Register Here
                </a>
              </H3>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Section backgroundColor='#84986B' padding='0 0 100px' id='events'>
      <ColInSection col={1} paddingDesktop='30px 0px'>
        <H3 as='h2' textAlign='center' color='white'>
          Upcoming Events
        </H3>
      </ColInSection>
      <Box sx={{ width: '100%', height: isMobile? '100%': 'auto' }}>
        <Carousel animation='slide'>
          {eventsArr.map((event, index) => (
            <CarouselItem key={event.id} item={event} />
          ))}
        </Carousel>
      </Box>
    </Section>
  );
};

export default Events;
