import { valueWithEasing } from '../easing/EasingBehaviour';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export type FadeOptions = AnimationOptions & {
  /**
   * The element's opacity will be animated to this value.
   *
   * **Examples:**
   * - 0 means the element will become fully invisible.
   * - 1 means the element will become fully opaque.
   * */
  to: number;
  /**
   * The opacity that is used at the start of the animation. _Defaults to `1`._
   *
   * **Note:**
   * To achieve a fade in animation, set `initial` to `0`.
   */
  initial?: number;
  /**
   * Number of frames for which the fade animation runs. _Defaults to `15` frames._
   */
  duration?: number;
};

/**
 * The `Fade` animation animates the opacity of an element.
 */
const Fade = (options: FadeOptions): Animation => {
  const start = options.start ?? 0;
  return {
    in: start,
    valuesAt: (frame, fps) => {
      const input = valueWithEasing(frame, fps, options);
      const initial = options.initial ?? 1;
      const opacity = interpolateAnimation(
        input,
        options.to,
        initial,
        initial,
        true
      );
      return { opacity };
    },
  };
};

export default Fade;
