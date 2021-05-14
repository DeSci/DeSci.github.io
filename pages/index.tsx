import { NextSeo } from 'next-seo';
import styled from 'styled-components';

export const config = {
  unstable_runtimeJS: false,
}

const SANS_FAMILY = `Inter, ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
  "Segoe UI Symbol", "Noto Color Emoji"`;

const StyledTitle = styled.h1`
  font-family: ${SANS_FAMILY};

  font-size: 6rem;
  margin: 4rem auto;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  color: rgb(31,41,55);

  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
    font-size: 3rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
  }
  @media (max-width: 440px) {
    font-weight: 500;
    font-size: 2.25rem;
  }
`;

const StyledSubtitle = styled.h1`
  font-family: ${SANS_FAMILY};

  font-size: 1.875rem;
  margin: 4rem auto;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;
  color: rgb(107,114,128);

  @media (max-width: 1024px) {
    margin: 2rem 0 3rem 0;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin: 2rem 0 2rem 0;
    font-weight: 500;
  }
  @media (max-width: 440px) {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 1rem;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(8rem, 1fr));
  grid-gap: 21px;
  max-width: 900px;
  margin: 0 auto;
`;

export const FooterLink = styled.a`
  font-family: ${SANS_FAMILY};
  font-size: 14px;
  color: rgb(31, 41, 55);
  text-decoration: none;
`;

export const FooterHeading = styled.p`
  font-family: ${SANS_FAMILY};
  font-size: 16px;
  color: rgb(17, 24, 39);
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="DeSci"
        description="DeSci Home Page"
        canonical="https://desci.pub/"
        openGraph={{
          title: 'DeSci',
          description: 'DeSci Home Page',
          url: 'https://desci.pub',
          site_name: 'DeSci',
        }}
        twitter={{
          handle: '@DeSciPub',
          site: '@DeSciPub',
          cardType: 'summary',
        }}
      />
      <StyledTitle>DeSci</StyledTitle>
      <StyledSubtitle>Building Decentralized Science</StyledSubtitle>
      <hr />
      <FooterRow>
        <FooterColumn>
          <FooterHeading>Community</FooterHeading>
          <FooterLink href="https://github.com/DeSci" target="_blank">GitHub &#8599;</FooterLink>
          <FooterLink href="https://twitter.com/DeSciPub" target="_blank">Twitter &#8599;</FooterLink>
          <FooterLink href="https://discord.gg/mgTdFFPvVN" target="_blank">Discord &#8599;</FooterLink>
          <FooterLink href="https://www.reddit.com/r/DeSci/" target="_blank">Reddit &#8599;</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterHeading>About Us</FooterHeading>
          <FooterLink href="mailto:contact@desci.pub">contact@desci.pub</FooterLink>
        </FooterColumn>
      </FooterRow>
    </>
  )
};

export default HomePage;
