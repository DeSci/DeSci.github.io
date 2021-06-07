import { NextSeo } from 'next-seo';

import Footer from '@/components/Footer';

export const config = {
  unstable_runtimeJS: false,
}

const DESCRIPTION = "Publishing and review today are broken. We're building a new research economy.";

const HomePage = () => {
  return (
    <>
      <NextSeo
        title="DeSci"
        description={DESCRIPTION}
        canonical="https://desci.pub/"
        openGraph={{
          title: 'DeSci',
          description: DESCRIPTION,
          url: 'https://desci.pub',
          site_name: 'DeSci',
        }}
        twitter={{
          handle: '@DeSciPub',
          site: '@DeSciPub',
          cardType: 'summary',
        }}
      />
      <header>
        <div id="homepage-hero">
          <div id="homepage-hero-container">
            <div id="homepage-hero-content">
              <h1 id="homepage-title" className="homepage-hero-text">DeSci</h1>
              <h2 className="homepage-hero-text">Building a new research economy</h2>
              <a className="hero-link" href="https://discord.gg/mgTdFFPvVN" target="_blank">
                Coming soon - join Discord for updates
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="homepage-content">
        <div className="responsive-width">
          <h2>Publishing and review today are broken.</h2>
          Long and opaque review processes using unpaid labor stall progress.
          At the same time, hefty publication fees and subscription fees eat away at funding,
          and the centralization of grantmaking and editorial decisions leaves great research unrecognized.
        </div>
      </div>
      <div className="homepage-content">
        <div className="responsive-width">
          <h2>We’re returning power to the community.</h2>
          Readers decide what research is valuable, and authors capture the reward - not intermediaries.
        </div>
      </div>
      <div className="homepage-content">
        <div className="responsive-width">
          <h2>No matter the contribution</h2>
          Whether it’s peer review, replication, refutation, surveying,
          or summarizing - any value created should be recognized and rewarded.
        </div>
      </div>
      <div className="homepage-content">
        <div className="responsive-width">
          <h2>Science for everyone</h2>
          Ideas should be judged by merit, not pedigree. DeSci is open-access,
          and everyone is welcome to give feedback and submit work for community feedback.
        </div>
      </div>
      <div className="homepage-content">
        <div className="responsive-width">
          <h2>Fund exciting projects</h2>
          Whether it’s creating a new prize, calling for research related to a protocol,
          or placing a bounty on a problem of personal interest, DeSci enables it.
        </div>
      </div>
      <div className="homepage-content">
        <div className="responsive-width">
          <h2>Expand your philanthropic portfolio</h2>
          DeSci enables public patronage of research through NFTs (non-fungible tokens).
          Curate quality research and be a part of history.
        </div>
      </div>
      <Footer />
    </>
  )
};

export default HomePage;
