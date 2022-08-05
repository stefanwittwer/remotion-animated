import SmoothSpring from '../springs/SmoothSpring';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface ScaleOptions extends AnimationOptions {
  by?: number;
  x?: number;
  y?: number;
  initial?: number;
  initialX?: number;
  initialY?: number;
}

const Scale = (options: ScaleOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame: number, fps: number) => {
      const spring = SmoothSpring(frame, fps, options);

      const initial = options.initial ?? 1;
      const initialX = options.initialX ?? initial;
      const initialY = options.initialY ?? initial;

      const scaleX = interpolateAnimation(
        spring,
        options.x ?? options.by,
        initialX
      );
      const scaleY = interpolateAnimation(
        spring,
        options.y ?? options.by,
        initialY
      );

      return { scaleX, scaleY };
    },
  };
};

export default Scale;
