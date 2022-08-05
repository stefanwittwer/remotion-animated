import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="/img/remotion-animated.svg" alt="" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
};

const Home = (): JSX.Element => (
  <Layout
    title={`Documentation`}
    description="A delightful way to animate objects in Remotion."
  >
    <HomepageHeader />
    <video autoPlay muted loop className={styles.video}>
      <source src="/video/code-example.mp4" type="video/mp4" />
    </video>
    <main>
      <HomepageFeatures />
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/">
          Visit docs
        </Link>
      </div>
    </main>
  </Layout>
);

export default Home;
