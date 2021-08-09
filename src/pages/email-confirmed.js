import React/* , { useContext } */ from "react";
// import ReactMarkdown from "react-markdown";
// import { Context } from "../components/RootElement";
import { P, H3, Section, ColInSection } from "../components/Layout";
import { Link } from 'gatsby';

const EmailConfirmed = () => {
  // const { cookiePolicies } = useContext(Context);
  // const components = {
  //   h1: ({ children }) => <H1 style={{fontSize: '2.1em'}}>{children}</H1>,
  //   p: ({ children }) => <P margin="1.2em auto">{children}</P>,
  //   h3: ({ children }) => <H3 style={{fontSize: '1.2em'}}>{children}</H3>,
  // };
  return (
    <Section justifyContent='center'>
      <ColInSection col={1.3}>
        <H3>Thank You</H3>
        <P>Your email is confirmed. <Link to='/login'>Login?</Link> <Link to='/'>Home?</Link></P>
        {/* <ReactMarkdown components={components}>{cookiePolicies}</ReactMarkdown> */}
      </ColInSection>
    </Section>
  );
};

export default EmailConfirmed;
