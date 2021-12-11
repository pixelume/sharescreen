import React, { useEffect, useState } from 'react';
import { Grommet } from 'grommet';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { theme, grommetTheme, brandColors } from '../styles/Theme';
import { useStaticQuery, graphql } from 'gatsby';
import '@fontsource/montserrat';

const client = new ApolloClient({
  // uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: `${process.env.GATSBY_STRAPI_URL}/graphql`, fetch }),
  // link: new HttpLink({ uri: 'http://localhost:1337/graphql', fetch }),
});

export const Context = React.createContext();

const RootElement = ({ children, location }) => {
  const [user, setUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [category, setCategory] = useState('')

  // Climate Crisis
  // Aquatic Ecosystems
  // Human-Wildlife Interaction
  // African Savannah Ecosystems
  // Commercialization
  // GIS

  const didMount = React.useRef(false);

  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiTermsAndConditionsPage {
        content
      }
      strapiPrivacyPolicy {
        content
      }
      strapiCookiePolicies {
        content
      }
      strapiAboutPage {
        pageContent
      }
      allStrapiPresentation(sort: { fields: published_at, order: DESC }) {
        nodes {
          description
          duration
          language
          name
          topic
          videoLink
          id
          slug
          tags
          presenter {
            fullName
            surname
            id
            title
            slug
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 450, height: 253)
              }
            }
          }
        }
      }
      allStrapiPresenter(sort: { order: DESC, fields: id }) {
        nodes {
          biography
          city
          role
          institution
          title
          fullName
          surname
          id
          slug
          subjectMatter
          qualifications
          profileVerified
          categories {
            name
          }
          User {
            id
          }
          presentations {
            name
            slug
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 350)
                }
              }
            }
          }
          profilePicture {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 450, height: 450)
              }
            }
          }
        }
      }
      # allStrapiTag(sort: {fields: Title}) {
      #   nodes {
      #     Title
      #   }
      # }
    }
  `);

  const presentationsArr = data.allStrapiPresentation.nodes;
  const presentersArr = data.allStrapiPresenter.nodes;
  // const tagsArr = data.allStrapiTag.nodes;
  const privacyPolicy = data.strapiPrivacyPolicy.content;
  const termsConditions = data.strapiTermsAndConditionsPage.content;
  const cookiePolicies = data.strapiCookiePolicies.content;
  const aboutPage = data.strapiAboutPage.pageContent;

  useEffect(() => {
    if (didMount.current) {
      if (user && user.jwt) {
        window.sessionStorage.setItem('user', JSON.stringify(user));
        console.log('I run only if user changes.');
      } else {
        window.sessionStorage.removeItem('user');
      }
    } else {
      didMount.current = true;
    }
  }, [user]);

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem('user'));
    if (storedUser && storedUser.jwt) {
      setUser(storedUser);
    }
  }, []);

  const providerValue = {
    user,
    setUser,
    searchTerm,
    setSearchTerm,
    keywords,
    setKeywords,
    presentationsArr,
    presentersArr,
    // tagsArr,
    privacyPolicy,
    termsConditions,
    cookiePolicies,
    aboutPage,
    category,
    setCategory
  };

  return (
    <Grommet theme={grommetTheme}>
      <ApolloProvider client={client}>
        <Context.Provider value={providerValue}>
          <ThemeProvider theme={brandColors}>{children}</ThemeProvider>
        </Context.Provider>
      </ApolloProvider>
    </Grommet>
  );
};

export default RootElement;
