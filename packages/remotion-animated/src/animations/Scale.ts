import { valueWithEasing } from '../easing/EasingBehaviour';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export type ScaleOptions = AnimationOptions & {
  /**
   * The element will be proportionately scaled up or down by this factor
   * along the x and y axes.
   *
   * **Examples:**
   * - `1` means the element will stay the same size.
   * - `2` means the element will scale up to be twice as big.
   * - `0.5` means the element will scale down to be half as big.
   */
  by?: number;
  /** The element will be scaled up or down horizontally by this factor. */
  x?: number;
  /** The element will be scaled up or down vertically by this factor. */
  y?: number;
  /** The element will be scaled in 3D space up or down along the z-axis by this factor. */
  z?: number;
  /** The proportional scale factor that is used at the start of the animation. _Defaults to `1`._ */
  initial?: number;
  /** The x scale factor that is used at the start of the animation. _Defaults to the value of `initial`._ */
  initialX?: number;
  /** The y scale factor that is used at the start of the animation. _Defaults to the value of `initial`._ */
  initialY?: number;
  /** The z scale factor that is used at the start of the animation. _Defaults to the value of `initial`._ */
  initialZ?: number;
};

/**
 * The `Scale` animation scales an element horizontally, vertically or both, using a `transform`.
 */
const Scale = (options: ScaleOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame, fps) => {
      const input = valueWithEasing(frame, fps, options);

      const initial = options.initial ?? 1;

      const initialX = options.initialX ?? initial;
      const initialY = options.initialY ?? initial;
      const initialZ = options.initialZ ?? initial;

      const scaleX = interpolateAnimation(
        input,
        options.x ?? options.by,
        initialX
      );
      const scaleY = interpolateAnimation(
        input,
        options.y ?? options.by,
        initialY
      );
      const scaleZ = interpolateAnimation(input, options.z, initialZ);

      return { scaleX, scaleY, scaleZ };
    },
  };
};

export default Scale;
