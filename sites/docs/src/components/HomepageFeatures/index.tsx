import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build and experiment quickly',
    description: (
      <>
        Remotion Animated is simple by default, supercharging your workflow.
        Animations look great right out of the box.
      </>
    ),
  },
  {
    title: 'Put the animation logic in the JSX',
    description: (
      <>
        Instead of having lots of <code>interpolate</code> calls at the top, you
        can put the animation logic in the JSX, right by the actual element
        that's being animated.
      </>
    ),
  },
  {
    title: 'Combine animations easily',
    description: (
      <>
        Remotion Animated makes it easy to combine multiple animations together
        and rapidly iterate and experiment with them.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
