---
sidebar_position: 1
---

import AnimationProps from './\_animation-props.mdx';
import AnimationSpringProps from './\_animation-spring-props.mdx';

# Move

The `Move` animation translates an element horizontally, vertically or both.

## Usage

The following example animates the text inside down by 80 pixels and left by 20 pixels.

```jsx
import { Animated, Move } from 'remotion-animated';

const Example = () => (
  <Animated animations={[Move({ x: -20, y: 80 })]}>
    <h1>Example text</h1>
  </Animated>
);
```

## Move options

### x?: `number`

The element will be moved to the right by this amount (in pixels).

### y?: `number`

The element will be moved down by this amount (in pixels).

### z?: `number`

The element will be moved for- or backward along the z-axis by this amount (in pixels).

This affects the element's position in 3D space, which will be visible if the element [has a perspective](https://css-tricks.com/how-css-perspective-works/).

### initialX?: `number`

The x position offset that is used at the start of the animation (in pixels). _Defaults to 0._

### initialY?: `number`

The y position offset that is used at the start of the animation (in pixels). _Defaults to 0._

### initialZ?: `number`

The z position offset that is used at the start of the animation (in pixels). _Defaults to 0._

## Animation options

<AnimationProps />
<AnimationSpringProps />

## Combining

If the element has already been moved by another `Move` animation, the element will have the combined translations of each animation in the end.

```jsx
import { Animated, Move } from 'remotion-animated';

const Example = () => (
  <Animated
    animations={[
      Move({ x: 20, y: 80 }),
      Move({ x: 20, y: -80, start: 20 }),
      Move({ x: 40, start: 40 }),
    ]}
  >
    <h1>Example text</h1>
  </Animated>
);
```

In this example, the text element will have moved to the right by 80 pixels and returned to its original y position by the end of all animations.
