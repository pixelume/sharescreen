import React from 'react';
import Notification from '../styles/Notification';
// import { withRouter } from "react-router-dom";
// import LoadAnimation from "../styles/LoadAnimation";
// import getData from "../functions/getData";
import { Section, ColInSection, H3, P, imgStyle } from '../components/Layout';
// import ReactPlayer from "react-player";
import Cards from '../components/Cards/Cards';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const SinglePresenter = ({ data }) => {
  // const cardId = JSON.parse(props.match.params.id);

  // const [data, setData] = useState(false);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  // useEffect(() => {
  //   // console.log(props.match.params.id);
  //   getData(
  //     `http://localhost:1337/presenters/${cardId}`,
  //     setData,
  //     setError,
  //     setLoading
  //   );
  // }, [cardId]);

  const pData = data.strapiPresenter;
  const profilePic = getImage(pData.profilePicture.localFile);
  // const presentationPic = getImage(pData.presentations.Image.localFile);

  const getPresentationColData = () => {
    const presentationsArr = data.strapiPresenter.presentations;
    if (presentationsArr) {
      if (presentationsArr && presentationsArr.length > 0) {
        return (
          <Cards
            cardMargin='auto'
            withoutContainer
            presentationsArr={presentationsArr}
            fullName={pData.fullName}
          />
        );
      } else {
        return (
          <Notification color='blue'>
            <h2>No Presentations Yet</h2>
          </Notification>
        );
      }
    }
  };

  return (
    <>
      {pData && (
        <>
          <Section
            alignSelf='flex-start'
            alignItems='flex-start'
            background='linear-gradient(90deg, aliceblue 25%, white 45%, white 55%, aliceblue 75%)'
          >
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presenter
              </H3>
              {pData.profilePicture ? (
                <GatsbyImage
                  image={profilePic}
                  alt={pData.fullName}
                  style={imgStyle}
                />
              ) : (
                <StaticImage
                  src='../images/placeholder_image.png'
                  layout='fixed'
                  width={350}
                  height={233}
                />
              )}
              <H3 margin='1.5em auto' color='dark1'>
                {pData.title ? pData.title + ' ' : null}
                {pData.fullName}
              </H3>
              <h3>{pData.role}</h3>
              <h3>{pData.institution}</h3>
            </ColInSection>
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                biography
              </H3>
              <ReactMarkdown components={components}>
                {pData.biography}
              </ReactMarkdown>
            </ColInSection>
            <ColInSection col={3} padding='0px'>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presentations
              </H3>
              {getPresentationColData()}
              {/* <ColInSection maintainAspect shadow col={3}>
                {getPresentationColData()}
              </ColInSection> */}
            </ColInSection>
          </Section>
        </>
      )}
      {/* {loading && <LoadAnimation />} */}
      {/* {error && (
        <Notification color="red">
          <h2>{error}</h2>
        </Notification>
      )} */}
    </>
  );
};

export default SinglePresenter;

export const pageQuery = graphql`
  query ($slug: String!) {
    strapiPresenter(slug: { eq: $slug }) {
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      biography
      title
      fullName
      role
      institution
      presentations {
        id
        name
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 350, height: 233)
            }
          }
        }
      }
    }
  }
`;
