import { SpringConfig } from 'remotion';

interface AnimationOptions extends Partial<SpringConfig> {
  /**
   * Frame at which the animation should start. _Defaults to `0`._
   *
   * **Note**: Initial values aren't applied before the `start` frame.
   * - If you want to hide the element before the animation starts, use the `in` prop on the `<Animated />` component to set the "In" frame for the entire animation.
   * - If you want the animated property to have a different initial value, you may change it beforehand using your own styling.
   */
  start?: number;
  /**
   * Number of frames for which the spring animation is stretched.
   */
  duration?: number;
}

export default AnimationOptions;
