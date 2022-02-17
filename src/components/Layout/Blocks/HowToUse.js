import React, { useEffect, useState } from 'react';
import { ColInSection, Section, H3, P } from '../';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserChart,
  faUserPlus,
  faFileSearch,
  faHandshakeAlt,
  faUsersClass,
  faCommentAltSmile,
} from '@fortawesome/pro-light-svg-icons';
import { FaYoutube } from 'react-icons/fa';
import { useMediaQuery } from '@mui/material';
const HowToUse = () => {
  const [stepCount, setStepCount] = useState(0);
  // const [vertical, setVertical] = useState(window.innerWidth < 1024? true: false)
  const isVertical = useMediaQuery('(max-width: 1024px)');

  const SxBox = ({ children }) => (
    <Box
      sx={{
        padding: '10px',
        borderRadius: '50%',
        // border: '2px solid black',
        // boxShadow: '1px 1px 15px -3px rgba(0,0,0,0.75)',
        fontSize: '2em',
        height: '2.2em',
        width: '2.2em',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: 'rgba(255,255,255,1.0)',
        color: '#515c35',
      }}
    >
      {children}
    </Box>
  );

  const steps = [
    {
      label: 'Presenters donate their time & expertise',
      description: 'Description for Step 1',
      icon: () => (
        <SxBox>
          <FontAwesomeIcon icon={faUserChart} />
        </SxBox>
      ),
    },
    {
      label: 'Users register on sharescreenafrica.org',
      description: 'Description for Step 2',
      icon: () => (
        <SxBox>
          <FontAwesomeIcon icon={faUserPlus} />
        </SxBox>
      ),
    },
    {
      label: 'Users browse & apply to be linked to appropriate experts',
      description: 'Description for Step 3',
      icon: () => (
        <SxBox>
          <FontAwesomeIcon icon={faFileSearch} />
        </SxBox>
      ),
    },
    {
      label: 'SSA introduce presenters & users',
      description: 'Description for Step 4',
      icon: () => (
        <SxBox>
          <FontAwesomeIcon icon={faHandshakeAlt} />
        </SxBox>
      ),
    },
    {
      label:
        'Virtual teaching event: Students & conservation professionals are equipped and empowered',
      description: 'Description for Step 5',
      icon: () => (
        <SxBox>
          <FontAwesomeIcon icon={faUsersClass} />
        </SxBox>
      ),
    },
    {
      label:
        'All presentations captured on YouTube',
      description: 'Description for Step 6',
      icon: () => (
        <SxBox>
          <FaYoutube/>
        </SxBox>
      ),
    },
    {
      label: 'Feedback from both users and presenters',
      description: 'Description for Step 7',
      icon: () => (
        <SxBox>
          <FontAwesomeIcon icon={faCommentAltSmile} />
        </SxBox>
      ),
    },
  ];

  const zoomedStep = {
    alignItems: 'stretch',
    '& .MuiStep-root': {
      margin: '0px 2px',
      '& .MuiStepConnector-line': {
        display: 'none',
      },
    },
    '& .MuiStepLabel-labelContainer': {
      padding: '5px',
      '& .MuiStepLabel-label': {
        fontFamily: 'Montserrat',
        fontSize: '0.9em',
      },
    },
    '& .MuiStep-root.Mui-completed': {
      borderRadius: '15px',
      backgroundColor: '#dfdfce',
      transition: 'background-color 0.5s ease-out',
      '& .MuiStepLabel-iconContainer': {
        transform: 'scale(1.2)',
        transition: 'transform 0.5s ease-out',
        '& .MuiBox-root': {
          boxShadow: '1px 1px 15px -3px rgba(0,0,0,0.75)',
          transition: 'box-shadow 0.5s ease-out',
        },
      },
    },
  };

  useEffect(() => {
    const timeoutFn = () => {
      setStepCount((stepCount) => (stepCount >= 7 ? 0 : stepCount + 1));
    };
    setTimeout(timeoutFn, 3500);
    return () => clearTimeout(timeoutFn);
  }, [stepCount]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1024) {
  //       if (!vertical) {
  //         setVertical(true)
  //       }
  //     } else {
  //       if (vertical) {
  //         setVertical(false)
  //       }
  //     }
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // })

  return (
    <Section backgroundColor='warmWhite'>
      <ColInSection col={1} padding='0 0 30px'>
        <H3 textAlign='center' color='#515c35'>
          How to use ShareScreen Africa
        </H3>
        {/* <H3 textAlign='center'>Latest Presentations</H3> */}
      </ColInSection>
      <ColInSection col={1} style={{ overflow: 'visible' }}>
        <Stepper
          sx={zoomedStep}
          activeStep={stepCount}
          alternativeLabel={!isVertical}
          orientation={isVertical ? 'vertical' : 'horizontal'}
        >
          {steps.map((step, idx) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={step.icon}>
                <br />
                {step.label}
              </StepLabel>
              {/* <StepContent>{step.description}</StepContent> */}
            </Step>
          ))}
        </Stepper>
      </ColInSection>
    </Section>
  );
};

export default HowToUse;
