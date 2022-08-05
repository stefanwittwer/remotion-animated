import { interpolate, SpringConfig } from 'remotion';
import Animation from './Animation';
import { ClampInterpolationOptions } from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface FadeOptions
  extends Omit<AnimationOptions, keyof Partial<SpringConfig>> {
  to: number;
  initial?: number;
  duration?: number;
}

const Fade = (options: FadeOptions): Animation => {
  const duration = options.duration ?? 15;
  const start = options.start ?? 0;
  return {
    in: start,
    valuesAt: (frame: number) => {
      const opacity = interpolate(
        frame,
        [start, start + duration],
        [options.initial ?? 1, options.to],
        ClampInterpolationOptions
      );
      return { opacity };
    },
  };
};

export default Fade;
