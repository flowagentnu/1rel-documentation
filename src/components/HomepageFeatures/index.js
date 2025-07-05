import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_runner-start.svg').default,
    link: '/docs/category/getting-started',
    description: 'Start here to learn the basics and set up FlowAgent for your team.',
  },
  {
    title: 'Sites',
    Svg: require('@site/static/img/undraw_shortcuts.svg').default,
    link: '/docs/category/sites',
    description: 'Explore how to manage users, groups, modules, and more within Sites.',
  },
  {
    title: 'Modules',
    Svg: require('@site/static/img/undraw_add-post.svg').default,
    link: '/docs/category/modules',
    description: 'Dive into modules, widgets, forms, and advanced configuration.',
  },
  {
    title: 'Apps',
    Svg: require('@site/static/img/undraw_app-installation.svg').default,
    link: '/docs/category/apps',
    description: 'Integrate and extend FlowAgent with apps and resource planning tools.',
  },
  {
    title: 'JSON',
    Svg: require('@site/static/img/undraw_code-review.svg').default,
    link: '/docs/category/json',
    description: 'Reference for JSON queries, actions, and dynamic values.',
  },
  {
    title: 'Miscellaneous',
    Svg: require('@site/static/img/undraw_switches.svg').default,
    link: '/docs/category/miscellaneous',
    description: 'Icons, languages, templates, and other helpful resources.',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <a href={link} className={styles.featureLinkBox}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
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
