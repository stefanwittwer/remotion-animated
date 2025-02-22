---
sidebar_position: 2
---

# Custom easing

You can also use bezier-based and custom easing functions for your animations.

:::info Ease collection vs. Easing from Remotion
To use standard timing functions in the Animated component, ensure that you're using the `Ease` collection from `remotion-animated`.

If you want to use an easing function from Remotion directly, you'll need to wrap it in a `CustomEasing` function first (see “Custom easing functions” below).
:::

## Linear animations

The `Ease.Linear` easing function is a linear bezier function that does not ease in or out, where the change in value is constant throughout the duration of the animation.

```jsx
Move({ y: 40, ease: Ease.Linear });
```

## Common easing functions

In addition to linear easing, many common easing functions are included in the `Ease` collection:

:::note Types of easing

Most common easing functions in the `Ease` collection have three variations:

- `In`: Starts slow, speeds up.
- `Out`: Starts fast, slows down.
- `InOut`: Smooth acceleration and deceleration.

:::

### Quadratic

A simple easing function using a squared curve (t²).

- `Ease.QuadraticIn`
- `Ease.QuadraticOut`
- `Ease.QuadraticInOut`

### Cubic

Uses a cubic curve (t³) for smoother transitions than quadratic, with a more gradual acceleration/deceleration.

- `Ease.CubicIn`
- `Ease.CubicOut`
- `Ease.CubicInOut`

### Quartic

Uses a fourth-power curve (t⁴) for stronger acceleration/deceleration; good for dramatic, fluid motion.

- `Ease.QuarticIn`
- `Ease.QuarticOut`
- `Ease.QuarticInOut`

### Quintic

Uses a fifth-power curve (t⁵). Transitions very quickly between values in the middle of the animation, with a very gradual acceleration/deceleration.

- `Ease.QuinticIn`
- `Ease.QuinticOut`
- `Ease.QuinticInOut`

### Sinusoidal

Uses a sine wave for varying acceleration.

- `Ease.SinusoidalIn`
- `Ease.SinusoidalOut`
- `Ease.SinusoidalInOut`

### Circular

Based on the geometry of a circle.

- `Ease.CircularIn`
- `Ease.CircularOut`
- `Ease.CircularInOut`

### Exponential

Uses an exponential curve for varying acceleration.

- `Ease.ExponentialIn`
- `Ease.ExponentialOut`
- `Ease.ExponentialInOut`

### Bounce

Simulates real-world bouncing motion with multiple deceleration points.

- `Ease.BounceIn`
- `Ease.BounceOut`
- `Ease.BounceInOut`

## Custom bezier curves

If you want to use a custom bezier curve, you can use the `Ease.Bezier(x1, y1, x2, y2)` function:

```jsx
Move({ y: 40, ease: Ease.Bezier(0.33, 1, 0.68, 1) });
```

## Custom easing functions from Remotion

You can also use custom easing functions from Remotion's `Easing` module by wrapping them with `CustomEasing`:

```jsx
import { Easing } from 'remotion';

Move({ y: 40, ease: CustomEasing(Easing.linear) });
Move({ y: 40, ease: CustomEasing(Easing.bezier(0.33, 1, 0.68, 1)) });
```
