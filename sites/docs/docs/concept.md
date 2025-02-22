---
sidebar_position: 2
---

# How it works

Remotion Animated lets you **declaratively specify animations in Remotion**.
It simplifies and speeds up the creation of simple animations in your Remotion projects, by:

- Moving the animation logic fully into the JSX, using the [`<Animated />` component](/docs/animated-component);
- Providing defaults that make animations look great out-of-the-box;
- Making it easy to chain multiple timed animations.

## Example usage

To animate something, use the [`<Animated>` component](/docs/animated-component) around the elements you'd like to animate.

```tsx
import { Animated, Move } from 'remotion-animated';

const ExampleComposition = () => (
  <Animated animations={[Move({ x: 200 })]}>
    <HelloWorld />
  </Animated>
);
```

## Example video from homepage

The example demo video from the homepage of this website is made using Remotion Animated. You can take a look at the source code.

<aside>
  <a
    className="button button--secondary"
    href="https://github.com/stefanwittwer/remotion-animated/blob/main/sites/example/src/animated-code-examples/AnimatedCodeExamples.tsx"
    target="_blank"
  >
    See code of this video
  </a>
</aside>

<video autoPlay muted loop style={{width: '100%', margin: '2rem 0'}}>

  <source src="/video/code-example.mp4" type="video/mp4" />
</video>
