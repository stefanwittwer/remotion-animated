import { valueWithEasing } from '../easing/EasingBehaviour';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export type RotateOptions = AnimationOptions & {
  /**
   * The element will be rotated clockwise by this angle in the z-axis
   * (normal rotation in 2D space).
   *
   * **Examples:**
   * - `360` means the element will do one full clockwise rotation.
   * - `0` means the element will not rotate.
   * - `-360` means the element will do one full counter-clockwise rotation.
   */
  degrees?: number;
  /**
   * The element will be rotated in 3D space clockwise by this angle in the x-axis.
   */
  degreesX?: number;
  /**
   * The element will be rotated in 3D space clockwise by this angle in the y-axis.
   */
  degreesY?: number;
  /** The proportional rotation angle that is used at the start of the animation. _Defaults to `0`._ */
  initial?: number;
  /** The x rotation angle in 3D space that is used at the start of the animation. _Defaults to `0`._ */
  initialX?: number;
  /** The y rotation angle in 3D space that is used at the start of the animation. _Defaults to `0`._ */
  initialY?: number;
};

/**
 * The `Rotate` animation rotates an element along the Z-axis.
 */
const Rotate = (options: RotateOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame, fps) => {
      const input = valueWithEasing(frame, fps, options);

      const initialX = options.initialX ?? 0;
      const initialY = options.initialY ?? 0;
      const initialZ = options.initial ?? 0;

      const rotateX = interpolateAnimation(input, options.degreesX, initialX);
      const rotateY = interpolateAnimation(input, options.degreesY, initialY);
      const rotateZ = interpolateAnimation(input, options.degrees, initialZ);

      return { rotateX, rotateY, rotateZ };
    },
  };
};

export default Rotate;
