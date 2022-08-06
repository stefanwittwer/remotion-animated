---
sidebar_position: 2
---

# Concept

The idea behind Remotion Animated is to simplify and speed up the creation of simple animations in your Remotion projects, by:

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
