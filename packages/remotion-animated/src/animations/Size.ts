import { valueWithEasing } from '../easing/EasingBehaviour';
import AnimationValues from '../reducer/AnimationValues';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export type SizeOptions = AnimationOptions & {
  /** The element's width will be animated to this value, if set. */
  width?: number;
  /** The element's height will be animated to this value, if set. */
  height?: number;
  /** The width that is used at the start of the animation. Defaults to `0`. */
  initialWidth?: number;
  /** The height that is used at the start of the animation. Defaults to `0`. */
  initialHeight?: number;
};

/**
 * The `Size` animation changes the width or height of an element.
 */
const Size = (options: SizeOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame, fps) => {
      const values: AnimationValues = {};
      const input = valueWithEasing(frame, fps, options);

      if (options.width)
        values.width = interpolateAnimation(
          input,
          options.width,
          options.initialWidth
        );
      if (options.height)
        values.height = interpolateAnimation(
          input,
          options.height,
          options.initialHeight
        );

      return values;
    },
  };
};

export default Size;
