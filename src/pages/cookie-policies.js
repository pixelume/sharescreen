import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Context } from "../components/RootElement";
import { P, H3, H1, Section, ColInSection } from "../components/Layout";

const Privacy = () => {
  const { cookiePolicies } = useContext(Context);
  const components = {
    h1: ({ children }) => <H1 style={{fontSize: '2.1em'}}>{children}</H1>,
    p: ({ children }) => <P margin="1.2em auto">{children}</P>,
    h3: ({ children }) => <H3 style={{fontSize: '1.2em'}}>{children}</H3>,
  };
  return (
    <Section justifyContent='center'>
      <ColInSection col={1.3}>
        <ReactMarkdown components={components}>{cookiePolicies}</ReactMarkdown>
      </ColInSection>
    </Section>
  );
};

export default Privacy;
