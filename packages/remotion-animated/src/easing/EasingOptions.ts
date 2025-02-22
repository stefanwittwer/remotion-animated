import { SpringConfig } from 'remotion';
import { EasingBehaviour } from './EasingBehaviour';

export type EasingOptions =
  | Partial<SpringConfig>
  | {
      /**
       * You can provide an easing behaviour here instead of the spring properties.
       * This will override the spring animation.
       *
       * ### Common easing functions
       * You can use common animations from `Bezier`, such as `Bezier.linear`,
       * `Bezier.cubic`, etc.
       *
       * ### Custom easing functions
       * Alternatively, you can provide a custom easing function or pass in an
       * easing method from Remotion's `Easing` module by wrapping it with
       * `CustomBezier`:
       * - `Bezier.custom(0.33, 1, 0.68, 1)`
       * - `CustomBezier(Easing.linear)`
       * - `CustomBezier(Easing.bezier(0.33, 1, 0.68, 1))`
       */
      easing: EasingBehaviour;
    };
