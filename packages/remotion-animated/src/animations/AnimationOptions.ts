import { SpringConfig } from 'remotion';

interface AnimationOptions extends Partial<SpringConfig> {
  start?: number;
}

export default AnimationOptions;
