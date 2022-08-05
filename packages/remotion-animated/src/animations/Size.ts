import AnimationValues from '../reducer/AnimationValues';
import SmoothSpring from '../springs/SmoothSpring';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface SizeOptions extends AnimationOptions {
  width?: number;
  height?: number;
  initialWidth?: number;
  initialHeight?: number;
}

const Size = (options: SizeOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame: number, fps: number) => {
      const values: AnimationValues = {};
      const spring = SmoothSpring(frame, fps, options);

      if (options.width)
        values.width = interpolateAnimation(
          spring,
          options.width,
          options.initialWidth
        );
      if (options.height)
        values.height = interpolateAnimation(
          spring,
          options.height,
          options.initialHeight
        );

      return values;
    },
  };
};

export default Size;
