import { spring, SpringConfig } from 'remotion';
import AnimationOptions from '../../animations/AnimationOptions';
import { EasingBehaviour } from '../EasingBehaviour';

const CustomSpring =
  (withDefaultConfig?: Partial<SpringConfig>): EasingBehaviour =>
  (frame: number, fps: number, options: AnimationOptions = {}) => {
    const { start, ...overrideSpringConfig } = options;
    const driver = spring({
      fps,
      frame: frame - (start ?? 0),
      durationInFrames: options.duration,
      config: {
        ...withDefaultConfig,
        ...overrideSpringConfig,
      },
    });
    return { driver };
  };

export default CustomSpring;
