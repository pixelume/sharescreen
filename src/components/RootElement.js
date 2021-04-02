import React, { useEffect, useState } from "react";
import { Grommet } from "grommet";
import { ThemeProvider } from "styled-components";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { theme, grommetTheme } from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyle";
import { useStaticQuery, graphql } from "gatsby";
import "@fontsource/montserrat";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export const Context = React.createContext();

const RootElement = ({ children }) => {
  const [user, setUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [keywords, setKeywords] = useState([]);
  const didMount = React.useRef(false);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPresentation(sort: { order: DESC, fields: id }) {
        nodes {
          Description
          Duration
          Language
          Name
          Topic
          VideoPreviewLink
          id
          slug
          presenter {
            fullName
            id
            Title
          }
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 350, height: 233)
              }
            }
          }
          tags {
            Title
          }
        }
      }
      allStrapiPresenter(sort: { order: DESC, fields: id }) {
        nodes {
          Biography
          City
          Email
          Organization
          Role
          Title
          fullName
          id
          slug
          presentations {
            Name
            Image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 350, height: 233)
                }
              }
            }
          }
          ProfilePicture {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 350, height: 350)
              }
            }
          }
        }
      }
    }
  `);

  const presentationsArr = data.allStrapiPresentation.nodes;
  const presentersArr = data.allStrapiPresenter.nodes;

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
  };

  return (
    <Grommet theme={grommetTheme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Context.Provider value={providerValue}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Context.Provider>
      </ApolloProvider>
    </Grommet>
  );
};

export default RootElement;
