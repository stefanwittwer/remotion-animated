import AnimationOptions from '../animations/AnimationOptions';
import DefaultSpring from './behaviours/DefaultSpring';

export type EasingBehaviour = (
  frame: number,
  fps: number,
  options: AnimationOptions
) => { driver: number };

export const easingForOptions = (
  options: AnimationOptions,
  defaultingTo: EasingBehaviour = DefaultSpring
): EasingBehaviour => {
  if ('easing' in options && typeof options.easing === 'function')
    return options.easing;

  return defaultingTo;
};

export const valueWithEasing = (
  frame: number,
  fps: number,
  options: AnimationOptions,
  defaultingTo: EasingBehaviour = DefaultSpring
) => {
  const easingFunction = easingForOptions(options, defaultingTo);
  const value = easingFunction(frame, fps, options);
  if (value.driver === undefined) {
    // The user may have provided a Remotion easing function from the Easing module.
    throw new TypeError(
      'Easing function must return a driver value. You may have used an easing function from the Remotion easing module, rather than from the Beziers collection of Remotion Animated. If you intended to use a Remotion easing function, please wrap it in a CustomBezier function first.'
    );
  }
  return value.driver;
};
