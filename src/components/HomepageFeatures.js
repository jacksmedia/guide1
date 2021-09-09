import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
   {
    title: 'Join Exchanges',
    link: '/docs/exchanges/join',
    Svg: require('../../static/img/cbkc.svg').default,
    description: (
      <>
        Coinbase and KuCoin are great choices for buying crypto with traditional currency.
      </>
    ),
  },
  {
    title: 'Acquire Trust Wallet',
    link: '/docs/wallet/get-wallet',
    Svg: require('../../static/img/wallet0.svg').default,
    description: (
      <>
        When you keep your money on a blockchain, you access it with a crypto wallet. Learn how to set up your first walllet here!
      </>
    ),
  },
  {
    title: 'Power Up Your Money',
    link: '/docs/wallet/get-wallet',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
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
