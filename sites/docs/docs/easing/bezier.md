---
sidebar_position: 2
---

# Bezier animations

You can also use bezier-based easing functions for your animations.

## Linear animations

The `Beziers.Linear` easing function is a linear bezier function that does not ease in or out, where the change in value is constant throughout the duration of the animation.

```jsx
Move({ y: 40, easing: Beziers.Linear });
```

## Common easing functions

In addition to linear easing, more common easing functions are available in the `Beziers` namespace:

- `Beziers.Bounce`
- `Beziers.Circle`
- `Beziers.Cubic`
- `Beziers.Ease`
- `Beziers.Quad`
- `Beziers.Quint`
- `Beziers.Exponential`
- `Beziers.Sinusoidal`
- `Beziers.Elastic(bounciness: number)`

## Custom bezier curves

If you want to use a custom bezier curve, you can use the `Beziers.Custom(x1, y1, x2, y2)` function:

```jsx
Move({ y: 40, easing: Beziers.Custom(0.33, 1, 0.68, 1) });
```

## Custom easing functions from Remotion

You can also use custom easing functions from Remotion's `Easing` module by wrapping them with `CustomBezier`:

```jsx
import { Easing } from 'remotion';

Move({ y: 40, easing: CustomBezier(Easing.linear) });
Move({ y: 40, easing: CustomBezier(Easing.bezier(0.33, 1, 0.68, 1)) });
```
