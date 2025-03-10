import { interpolate } from 'remotion';
import AnimationOptions from '../../animations/AnimationOptions';
import { EasingBehaviour } from '../EasingBehaviour';

const DEFAULT_DURATION = 15;

const CustomEasing =
  (easingFunction: (t: number) => number): EasingBehaviour =>
  (frame: number, _fps: number, options: AnimationOptions = {}) => {
    const { start } = options;
    const durationInFrames = options.duration ?? DEFAULT_DURATION;
    const driver = interpolate(
      frame - (start ?? 0),
      [0, durationInFrames],
      [0, 1],
      {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: easingFunction,
      }
    );
    return { driver };
  };

export default CustomEasing;
