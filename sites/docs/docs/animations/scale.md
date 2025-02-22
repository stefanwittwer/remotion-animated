---
sidebar_position: 2
---

import AnimationProps from './\_animation-props.mdx';
import AnimationSpringProps from './\_animation-spring-props.mdx';

# Scale

The `Scale` animation scales an element horizontally, vertically or both, using a `transform`. It can also scale in 3D space along the z-axis.

## Usage

The following example scales the text by the factor 1.5.

```jsx
import { Animated, Scale } from 'remotion-animated';

const Example = () => (
  <Animated animations={[Scale({ by: 1.5 })]}>
    <h1>Example text</h1>
  </Animated>
);
```

## Scale options

### by?: `number`

The element will be proportionately scaled up or down by this factor in the x and y axes.

#### Examples:

- 1 means the element will stay the same size.
- 2 means the element will scale up to be twice as big.
- 0.5 means the element will scale down to be half as big.

### x?: `number`

The element will be scaled up or down horizontally by this factor.

### y?: `number`

The element will be scaled up or down vertically by this factor.

### z?: `number`

The element will be scaled in 3D space up or down along the z-axis by this factor.

This affects the element's scale in 3D space, which will be visible if the element [has a perspective](https://css-tricks.com/how-css-perspective-works/).

### initial?: `number`

The proportional scale factor that is used at the start of the animation. _Defaults to 1._

### initialX?: `number`

The x scale factor that is used at the start of the animation. _Defaults to the value of `initial`._

### initialY?: `number`

The y scale factor that is used at the start of the animation. _Defaults to the value of `initial`._

### initialZ?: `number`

The z scale factor that is used at the start of the animation.

## Animation options

<AnimationProps />
<AnimationSpringProps />

## Origin

By default, the element is scaled from the middle, as this animation uses the `transform` property.
To change this, set the `transform-origin` using your custom styling.
