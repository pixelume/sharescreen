import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Context } from '../components/RootElement';
import { P, H3, H1, Section, ColInSection } from '../components/Layout';

const AboutPage = () => {
  const { aboutPage } = useContext(Context);
  const components = {
    h1: ({ children }) => <H1 style={{ fontSize: '2.1em' }}>{children}</H1>,
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
    h3: ({ children }) => <H3 style={{ fontSize: '1.2em', marginTop: 50 }}>{children}</H3>,
    img: ({src, alt}) => <img src={src} alt={alt} style={{objectFit: 'contain', width: '100%'}}/>
  };

  // console.log(aboutPage);
  let content = [];
  aboutPage.map((contentEl, idx) => {
    switch (contentEl.strapi_component) {
      case 'layout.heading':
        content.push(
          <ColInSection col={3/2}>
            <H1 style={{ textAlign: 'center', fontSize: '2.1em' }}>{contentEl.heading}</H1>
          </ColInSection>
        );
        break;
      case 'layout.text-block':
        content.push(
          <ColInSection col={3/2}>
            <ReactMarkdown components={components}>
              {contentEl.textBlock}
            </ReactMarkdown>
          </ColInSection>
        );
        break;
      case 'layout.video-link':
        const expression =
          /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = contentEl.videoLink.match(expression);
        if (match && match[7].length === 11) {
          const embedVideoLink = `https://youtube.com/embed/${match[7]}`;
          content.push(
            <ColInSection col={3 / 2} maintainAspect shadow borderRadius='5px'>
              <iframe
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                }}
                src={embedVideoLink}
                title='YouTube video player'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </ColInSection>
          );
        } else {
          content.push(
            <ColInSection col={3 / 2}>
              <P>Invalid Video Link</P>
            </ColInSection>
          );
        }
        break;
      default:
        break;
    }
  });

  return (
    <Section justifyContent='center'>
      {content.map((block, index) => (
        <React.Fragment key={`block-${index}`}>{block}</React.Fragment>
      ))}
    </Section>
  );
};

export default AboutPage;
