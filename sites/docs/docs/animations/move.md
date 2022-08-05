---
sidebar_position: 1
---

# Move

The `Move` animation translates an element horizontally, vertically or both.

## Usage

The following example animates the text inside down by 80 pixels and left by 20 pixels.

```jsx
import { Animation, Move } from 'remotion-animated';

const Example = () => (
  <Animated animations={[Move({ x: -20, y: 80 })]}>
    <h1>Example text</h1>
  </Animated>
);
```

## Options

### x?: `number`

The element will be moved to the right by this amount (in pixels).

### y?: `number`

The element will be moved down by this amount (in pixels).

### initialX?: `number`

The x position offset that is used at the start of the animation (in pixels). _Defaults to 0._

### initialY?: `number`

The y position offset that is used at the start of the animation (in pixels). _Defaults to 0._
