import SmoothSpring from '../springs/SmoothSpring';
import Animation from './Animation';
import interpolateAnimation from './AnimationInterpolation';
import AnimationOptions from './AnimationOptions';

export interface MoveOptions extends AnimationOptions {
  x?: number;
  y?: number;
  initialX?: number;
  initialY?: number;
}

const Move = (options: MoveOptions): Animation => {
  return {
    in: options.start ?? 0,
    valuesAt: (frame: number, fps: number) => {
      const spring = SmoothSpring(frame, fps, options);

      const translateX = interpolateAnimation(
        spring,
        options.x,
        options.initialX
      );
      const translateY = interpolateAnimation(
        spring,
        options.y,
        options.initialY
      );

      return { translateX, translateY };
    },
  };
};

export default Move;
