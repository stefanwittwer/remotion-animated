import AnimationValues from '../reducer/AnimationValues';
import SmoothSpring from '../springs/SmoothSpring';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface SizeOptions extends AnimationOptions {
  /** The element's width will be animated to this value, if set. */
  width?: number;
  /** The element's height will be animated to this value, if set. */
  height?: number;
  /** The width that is used at the start of the animation. Defaults to `0`. */
  initialWidth?: number;
  /** The height that is used at the start of the animation. Defaults to `0`. */
  initialHeight?: number;
}

/**
 * The `Size` animation changes the width or height of an element.
 */
const Size = (options: SizeOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame: number, fps: number) => {
      const values: AnimationValues = {};
      const spring = SmoothSpring(frame, fps, options);

      if (options.width)
        values.width = interpolateAnimation(
          spring,
          options.width,
          options.initialWidth
        );
      if (options.height)
        values.height = interpolateAnimation(
          spring,
          options.height,
          options.initialHeight
        );

      return values;
    },
  };
};

export default Size;
