import { SpringConfig } from 'remotion';
import { EasingBehaviour } from './EasingBehaviour';

export type EasingOptions =
  | Partial<SpringConfig>
  | {
      /**
       * You can provide an easing behaviour here instead of the spring properties.
       * This will override the spring animation.
       * Learn more in the [documentation](https://www.remotion-animated.dev/docs/easing/custom).
       *
       * ### Common easing behaviours
       * You can use common animations from the `Ease` namespace from
       * remotion-animated, such as `Ease.Linear`, `Ease.Cubic`, etc.
       *
       * ### Custom timing functions
       * Alternatively, you can provide a custom easing function or pass in an
       * easing method from Remotion's `Easing` module by wrapping it with
       * `CustomEasing`:
       * - `Ease.Bezier(0.33, 1, 0.68, 1)`
       * - `CustomEasing(Easing.linear)`
       * - `CustomEasing(Easing.bezier(0.33, 1, 0.68, 1))`
       */
      ease: EasingBehaviour;
    };
