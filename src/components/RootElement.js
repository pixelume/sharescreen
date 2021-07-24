import React, { useEffect, useState } from "react";
import { Grommet } from "grommet";
import { ThemeProvider } from "styled-components";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import fetch from "cross-fetch";
import { theme, grommetTheme } from "../styles/Theme";
import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/montserrat";

const client = new ApolloClient({
  // uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: "/graphql", fetch }),
});

export const Context = React.createContext();

const RootElement = ({ children, location }) => {
  const [user, setUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [keywords, setKeywords] = useState([]);
  const didMount = React.useRef(false);

  const data = useStaticQuery(graphql`
    query MyQuery {
      strapiPrivacyPolicy {
        content
      }
      allStrapiPresentation(sort: { order: DESC, fields: id }) {
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
            id
            title
            slug
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 350)
              }
            }
          }
        }
      }
      allStrapiPresenter(sort: { order: DESC, fields: id }) {
        nodes {
          biography
          city
          email
          role
          institution
          title
          fullName
          surname
          id
          slug
          subjectMatter
          qualifications
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
                gatsbyImageData(layout: CONSTRAINED, width: 350)
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
  const privacyPolicy = data.strapiPrivacyPolicy.content

  useEffect(() => {
    if (didMount.current) {
      if (user && user.jwt) {
        window.sessionStorage.setItem("user", JSON.stringify(user));
        console.log("I run only if user changes.");
      } else {
        window.sessionStorage.removeItem("user");
      }
    } else {
      didMount.current = true;
    }
  }, [user]);

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));
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
    privacyPolicy
  };

  return (
    <Grommet theme={grommetTheme}>
      <ApolloProvider client={client}>
        <Context.Provider value={providerValue}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Context.Provider>
      </ApolloProvider>
    </Grommet>
  );
};

export default RootElement;
