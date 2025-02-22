import AnimationOptions from '../animations/AnimationOptions';
import DefaultSpring from './behaviours/DefaultSpring';

/**
 * An easing behaviour is a function that takes in the current frame, the FPS,
 * and options and returns a driver value.
 *
 * You'll typically use easing behaviours from the `Ease` namespace from
 * `remotion-animated`, such as `Ease.Linear`, `Ease.Cubic`, etc.,
 * or you can create a custom easing behaviour using the `CustomEasing` function.
 */
export type EasingBehaviour = (
  frame: number,
  fps: number,
  options: AnimationOptions
) => { driver: number };

export const easingForOptions = (
  options: AnimationOptions,
  defaultingTo: EasingBehaviour = DefaultSpring
): EasingBehaviour => {
  if ('ease' in options && typeof options.ease === 'function')
    return options.ease;

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
      'Easing function must return a driver value. You may have imported an easing function from Remotion directly, rather than from the `Ease` collection of `remotion-animated`. If you intended to use a Remotion easing function directly, wrap it with the `CustomEasing` function first.'
    );
  }
  return value.driver;
};
