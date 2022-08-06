import SmoothSpring from '../springs/SmoothSpring';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface MoveOptions extends AnimationOptions {
  /** The element will be moved to the right by this amount (in pixels). */
  x?: number;
  /** The element will be moved down by this amount (in pixels). */
  y?: number;
  /** The x position offset that is used at the start of the animation (in pixels). _Defaults to `0`._ */
  initialX?: number;
  /** The y position offset that is used at the start of the animation (in pixels). Defaults to `0`. */
  initialY?: number;
}

/**
 * The `Move` animation translates an element horizontally, vertically or both.
 */
const Move = (options: MoveOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame: number, fps: number) => {
      const spring = SmoothSpring(frame, fps, options);

      const translateX = interpolateAnimation(
        spring,
        options.x,
        options.initialX
      );
      const translateY = interpolateAnimation(
        spring,
        options.y,
        options.initialY
      );

      return { translateX, translateY };
    },
  };
};

export default Move;
