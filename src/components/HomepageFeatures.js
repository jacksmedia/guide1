import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
   {
    title: 'New App + Currency Exchange',
    link: '/docs/exchanges/join',
    Svg: require('../../static/img/vlcb.svg').default,
    description: (
      <>
        Valora and Coinbase are great choices for buying crypto with traditional currency, and sending money to other people.
      </>
    ),
  },
  {
    title: 'Acquire Trust Wallet',
    link: '/docs/wallet/get-wallet',
    Svg: require('../../static/img/wallet0.svg').default,
    description: (
      <>
        When you keep your money on a blockchain, you access it with a personal crypto wallet. This is also how to browse Web 3.0, built with crypto!
      </>
    ),
  },
  {
    title: 'Power Up Your Money',
    link: '/docs/basics/sending',
    Svg: require('../../static/img/signpost1.svg').default,
    description: (
      <>
        Learn some fundamental ways to use cryptocurrency-- send, spend, save, stake!
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className="unfancy-link">
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
