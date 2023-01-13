import { interpolate, SpringConfig } from 'remotion';
import Animation from './Animation';
import AnimationOptions from './AnimationOptions';

export interface FadeOptions
  extends Omit<AnimationOptions, keyof Partial<SpringConfig>> {
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
}

const DEFAULT_DURATION_IN_FRAMES = 15;

/**
 * The `Fade` animation animates the opacity of an element.
 */
const Fade = (options: FadeOptions): Animation => {
  const duration = options.duration ?? DEFAULT_DURATION_IN_FRAMES;
  const start = options.start ?? 0;
  return {
    in: start,
    valuesAt: (frame: number) => {
      const opacity = interpolate(
        frame,
        [start, start + duration],
        [options.initial ?? 1, options.to]
      );
      return { opacity };
    },
  };
};

export default Fade;
