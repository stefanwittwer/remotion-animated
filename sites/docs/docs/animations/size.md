---
sidebar_position: 5
---

import AnimationProps from './\_animation-props.mdx';
import AnimationSpringProps from './\_animation-spring-props.mdx';

# Size

The `Size` animation changes the width or height of an element.

## Usage

The following example changes the width to 300 pixels.

```jsx
import { Animated, Size } from 'remotion-animated';

const Example = () => (
  <Animated animations={[Size({ width: 300 })]}>
    <h1>Example text</h1>
  </Animated>
);
```

## Size options

### width?: `number`

The element's width will be animated to this value, if set.

### height?: `number`

The element's height will be animated to this value, if set.

### initialWidth?: `number`

The width that is used at the start of the animation. _Defaults to 0._

### initialHeight?: `number`

The height that is used at the start of the animation. _Defaults to 0._

## Animation options

<AnimationProps />
<AnimationSpringProps />

## Size vs. Scale

The `Size` animation will only change the width and height of the container, while the `Scale` animation scales all of its contents using a `transform`.

- If you only want to animate the size of container, you should use `Size`.
- If you only want to animate the container and the scale of its children (e.g. making the container **and** the text within it smaller), you should use [`Scale`](/docs/animations/scale).
