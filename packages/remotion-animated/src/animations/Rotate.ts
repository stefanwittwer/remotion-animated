import SmoothSpring from '../springs/SmoothSpring';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface RotateOptions extends AnimationOptions {
  degrees: number;
  initial?: number;
}

const Rotate = (options: RotateOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame: number, fps: number) => {
      const spring = SmoothSpring(frame, fps, options);
      const initial = options.initial ?? 1;

      const rotate = interpolateAnimation(spring, options.degrees, initial);
      return { rotate };
    },
  };
};

export default Rotate;
