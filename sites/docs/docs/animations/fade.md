---
sidebar_position: 4
---

import AnimationProps from './\_animation-props.mdx';
import AnimationEasingProps from './\_animation-easing-props.mdx';

# Fade

The `Fade` animation animates the opacity of an element.

## Usage

The following example fades the element in after 20 frames and fades it out after 60 frames.

```jsx
import { Animation, Fade } from 'remotion-animated';

const Example = () => (
  <Animated
    animations={[
      Fade({ to: 1, initial: 0, start: 20 }),
      Fade({ to: 0, start: 60 }),
    ]}
  >
    <h1>Example text</h1>
  </Animated>
);
```

## Fade options

### to?: `number`

The element's opacity will be animated to this value.

#### Examples:

- 0 means the element will become fully invisible.
- 1 means the element will become fully opaque.

### initial?: `number`

The opacity that is used at the start of the animation. _Defaults to 1._

:::note
To achieve a **fade in animation**, set `initial` to 0.
:::

## Animation options

<AnimationProps />
<AnimationEasingProps />
