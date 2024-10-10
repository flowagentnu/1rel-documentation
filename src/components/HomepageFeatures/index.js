import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'New to FlowAgent?',
    Svg: require('@site/static/img/undraw_getting_started.svg').default,
    description: (
      <>
        <a href="/docs/category/getting-started">
          Learn how to configure FlowAgent and get the most out of the platform.
        </a>
      </>
    ),
  },
  {
    title: 'Shortcuts',
    Svg: require('@site/static/img/undraw_shortcuts.svg').default,
    description: (
      <>
        <a href="/docs/shortcuts">
          Shortcuts to typical configurations and setups.
        </a>
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('@site/static/img/undraw_knowledge_base.svg').default,
    description: (
      <>
        <a href="/docs/knowledge-base/knb-intro">
          Learn more about FlowAgent and how you can use the platform.
        </a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
