import { valueWithEasing } from '../easing/EasingBehaviour';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export type MoveOptions = AnimationOptions & {
  /** The element will be moved to the right by this amount (in pixels). */
  x?: number;
  /** The element will be moved down by this amount (in pixels). */
  y?: number;
  /** The element will be moved along the z-axis by this amount (in pixels). */
  z?: number;
  /** The x position offset that is used at the start of the animation (in pixels). _Defaults to `0`._ */
  initialX?: number;
  /** The y position offset that is used at the start of the animation (in pixels). Defaults to `0`. */
  initialY?: number;
  /** The z position offset that is used at the start of the animation (in pixels). Defaults to `0`. */
  initialZ?: number;
};

/**
 * The `Move` animation translates an element horizontally, vertically or both.
 */
const Move = (options: MoveOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame, fps) => {
      const input = valueWithEasing(frame, fps, options);
      const translateX = interpolateAnimation(
        input,
        options.x,
        options.initialX
      );
      const translateY = interpolateAnimation(
        input,
        options.y,
        options.initialY
      );
      const translateZ = interpolateAnimation(
        input,
        options.z,
        options.initialZ
      );
      return { translateX, translateY, translateZ };
    },
  };
};

export default Move;
