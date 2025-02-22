import { Easing } from 'remotion';
import CustomEasing from './CustomEasing';

// We intentionally don't call this namespace `Easing` to avoid conflicts with
// Remotion's `Easing` module when package users attempt to import it.

/**
 * A library of easing behaviours that can be used in the `easing` option of
 * animations in Remotion Animated.
 */
namespace Ease {
  export const Linear = CustomEasing(Easing.linear);

  export const QuadraticIn = CustomEasing(Easing.in(Easing.quad));
  export const QuadraticOut = CustomEasing(Easing.out(Easing.quad));
  export const QuadraticInOut = CustomEasing(Easing.inOut(Easing.quad));

  export const CubicIn = CustomEasing(Easing.in(Easing.cubic));
  export const CubicOut = CustomEasing(Easing.out(Easing.cubic));
  export const CubicInOut = CustomEasing(Easing.inOut(Easing.cubic));

  export const QuarticIn = CustomEasing(Easing.in(Easing.poly(4)));
  export const QuarticOut = CustomEasing(Easing.out(Easing.poly(4)));
  export const QuarticInOut = CustomEasing(Easing.inOut(Easing.poly(4)));

  export const QuinticIn = CustomEasing(Easing.in(Easing.poly(5)));
  export const QuinticOut = CustomEasing(Easing.out(Easing.poly(5)));
  export const QuinticInOut = CustomEasing(Easing.inOut(Easing.poly(5)));

  export const SinusoidalIn = CustomEasing(Easing.in(Easing.sin));
  export const SinusoidalOut = CustomEasing(Easing.out(Easing.sin));
  export const SinusoidalInOut = CustomEasing(Easing.inOut(Easing.sin));

  export const CircularIn = CustomEasing(Easing.in(Easing.circle));
  export const CircularOut = CustomEasing(Easing.out(Easing.circle));
  export const CircularInOut = CustomEasing(Easing.inOut(Easing.circle));

  export const ExponentialIn = CustomEasing(Easing.in(Easing.exp));
  export const ExponentialOut = CustomEasing(Easing.out(Easing.exp));
  export const ExponentialInOut = CustomEasing(Easing.inOut(Easing.exp));

  export const BounceIn = CustomEasing(Easing.in(Easing.bounce));
  export const BounceOut = CustomEasing(Easing.out(Easing.bounce));
  export const BounceInOut = CustomEasing(Easing.inOut(Easing.bounce));

  /**
   * Defines a custom cubic bezier curve.
   */
  export const Bezier = (x1: number, y1: number, x2: number, y2: number) =>
    CustomEasing(Easing.bezier(x1, y1, x2, y2));
}

export default Ease;
