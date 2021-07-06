import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Context } from "../components/RootElement";
import { P, H3, H1, Section, ColInSection } from "../components/Layout";

const Privacy = () => {
  const { privacyPolicy } = useContext(Context);
  const components = {
    h1: ({ children }) => <H1>{children}</H1>,
    p: ({ children }) => <P margin="1.2em auto">{children}</P>,
    h3: ({ children }) => <H3>{children}</H3>,
  };
  return (
    <Section justifyContent='center'>
      <ColInSection col={1.3}>
        <ReactMarkdown components={components}>{privacyPolicy}</ReactMarkdown>
      </ColInSection>
    </Section>
  );
};

export default Privacy;
