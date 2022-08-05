import { spring, SpringConfig } from 'remotion';
import AnimationOptions from '../animations/AnimationOptions';

const AnimationSpring =
  (withDefaultConfig?: Partial<SpringConfig>) =>
  (frame: number, fps: number, options: AnimationOptions = {}) => {
    const { start, ...overrideSpringConfig } = options;
    return spring({
      fps,
      frame: frame - (start ?? 0),
      config: {
        ...withDefaultConfig,
        ...overrideSpringConfig,
      },
    });
  };

export default AnimationSpring;
