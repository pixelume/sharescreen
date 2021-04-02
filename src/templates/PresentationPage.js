import React from "react";
import Notification from "../styles/Notification";
import { Link } from "gatsby";
// import LoadAnimation from "../styles/LoadAnimation";
import {
  Section,
  ColInSection,
  SubHeading,
  P,
  // Img,
  imgStyle,
} from "../components/Layout";
import ReactMarkdown from "react-markdown";
import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const PresentationPage = ({ data }) => {
  const renderers = {
    paragraph: ({ children }) => <P margin="1.2em auto">{children}</P>,
  };

  const pData = data.strapiPresentation;
  const profilePic = getImage(pData.presenter.ProfilePicture.localFile);
  const presentationPic = getImage(pData.Image.localFile);

  return (
    <>
      {pData && (
        <>
          <Section
            alignSelf="flex-start"
            alignItems="flex-start"
            // background="linear-gradient(90deg, rgba(255,255,255,1) 35%, rgba(240,248,255,1) 35%, rgba(240,248,255,1) 65%, rgba(255,255,255,1) 65%)"
            background="linear-gradient(90deg, aliceblue 25%, white 45%, white 55%, aliceblue 75%)"
          >
            <ColInSection col={3}>
              <SubHeading margin="0 auto 1.5em" textAlign="center">
                Presentation
              </SubHeading>
              {pData.Image ? (
                <GatsbyImage
                  image={presentationPic}
                  alt={pData.Description}
                  style={imgStyle}
                />
              ) : (
                <img
                  src="http://localhost:1337/uploads/placeholder_e8d28bfc61.png"
                  style={imgStyle}
                  alt="Image Placeholder"
                />
              )}
              <SubHeading margin="1.5em auto" color="olive">
                {pData.Name}
              </SubHeading>
              {pData.presenter ? (
                <h3>
                  by {pData.presenter.Title ? pData.presenter.Title : null}
                  &nbsp;
                  {pData.presenter.fullName}
                </h3>
              ) : null}
            </ColInSection>
            <ColInSection col={3} display="flex" flexFlow="column">
              <SubHeading margin="0 auto 1.5em" textAlign="center">
                Description
              </SubHeading>
              <div>
                <ReactMarkdown renderers={renderers}>
                  {pData.Description}
                </ReactMarkdown>
              </div>
              {/* <div>
              {pData.Description.split(`\n`).map((par, idx) => (
                <P key={`par-${idx}`} margin="1.2em auto">{par}</P>
              ))}
              </div> */}
              {/* <Notification color="blue">
                <h2>Column Content</h2>
              </Notification> */}
            </ColInSection>
            <ColInSection col={3}>
              <SubHeading margin="0 auto 1.5em" textAlign="center">
                Presenter
              </SubHeading>
              {pData.presenter ? (
                <>
                  {/* <Link to={`/presenters/${pData.presenter.id}`}> */}
                  <Link to={`/${pData.presenter.slug}`}>
                    {pData.presenter.ProfilePicture ? (
                      <GatsbyImage
                        image={profilePic}
                        alt={pData.presenter.fullName}
                        style={imgStyle}
                      />
                    ) : (
                      <img
                        src="http://localhost:1337/uploads/placeholder_e8d28bfc61.png"
                        style={imgStyle}
                      />
                    )}
                    <SubHeading>
                      {pData.presenter.Title ? pData.presenter.Title : null}
                      &nbsp;
                      {pData.presenter.fullName}
                    </SubHeading>
                  </Link>
                  <h3>{pData.presenter.Role}</h3>
                  <h3>at {pData.presenter.Organization}</h3>
                </>
              ) : (
                <Notification borderRadius="10px" color="orange">
                  <h4>
                    This presentation has not been linked to a presenter yet
                  </h4>
                </Notification>
              )}
            </ColInSection>
          </Section>
        </>
      )}
      {/* {error && <Notification color="red">{error}</Notification>}
      {loading && <LoadAnimation />} */}
    </>
  );
};

export default PresentationPage;

export const pageQuery = graphql`
  query($slug: String!) {
    strapiPresentation(slug: { eq: $slug }) {
      Description
      Duration
      Language
      Name
      Topic
      VideoPreviewLink
      id
      presenter {
        fullName
        Title
        Role
        Organization
        slug
        ProfilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      Image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
