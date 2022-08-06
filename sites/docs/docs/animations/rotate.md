---
sidebar_position: 3
---

import AnimationProps from './\_animation-props.mdx';
import AnimationSpringProps from './\_animation-spring-props.mdx';

# Rotate

The `Rotate` animation rotates an element along the Z-axis.

## Usage

The following example rotates the text by 180 degrees.

```jsx
import { Animation, Rotate } from 'remotion-animated';

const Example = () => (
  <Animated animations={[Rotate({ degrees: 180 })]}>
    <h1>Example text</h1>
  </Animated>
);
```

## Rotation options

### degrees?: `number`

The element will be rotated clockwise by this angle.

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
