---
sidebar_position: 3
---

import AnimationProps from './\_animation-props.mdx';
import AnimationSpringProps from './\_animation-spring-props.mdx';

# Rotate

The `Rotate` animation rotates an element clockwise along the Z-axis. It can also rotate in 3D space clockwise along the x and y axes.

## Usage

The following example rotates the text by 180 degrees in 2D space.

```jsx
import { Animated, Rotate } from 'remotion-animated';

const Example = () => (
  <Animated animations={[Rotate({ degrees: 180 })]}>
    <h1>Example text</h1>
  </Animated>
);
```

### 3D rotation

The following example rotates the text by 180 degrees in 3D space along the x-axis.

```jsx
import { Animated, Rotate } from 'remotion-animated';

const Example = () => (
  <div style={{ perspective: '1200px' }}>
    <Animated animations={[Rotate({ degreesX: 180 })]}>
      <h1>Example text</h1>
    </Animated>
  </div>
);
```

## Rotation options

### degrees?: `number`

The element will be rotated clockwise by this angle along the z-axis (normal rotation in 2D space).

### degreesX?: `number`

The element will be rotated in 3D space clockwise by this angle in the x-axis.

This affects the element's rotation in 3D space, which will be visible if the element [has a perspective](https://css-tricks.com/how-css-perspective-works/).

### degreesY?: `number`

The element will be rotated in 3D space clockwise by this angle in the y-axis.

This affects the element's rotation in 3D space, which will be visible if the element [has a perspective](https://css-tricks.com/how-css-perspective-works/).

#### Examples:

- 360 means the element will do one full clockwise rotation.
- 0 means the element will not rotate.
- -360 means the element will do one full counter-clockwise rotation.

### initial?: `number`

The proportional rotation angle that is used at the start of the animation. _Defaults to 0._

## Animation options

<AnimationProps />
<AnimationSpringProps />

## Origin

By default, the element is rotated from the middle, as this animation uses the `transform` property.
To change this, set the `transform-origin` using your custom styling.
