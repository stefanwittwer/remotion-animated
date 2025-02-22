import { interpolate } from 'remotion';

const interpolateAnimation = (
  input: number,
  to: number | undefined,
  initialValue = 0,
  defaultValue = initialValue,
  clamp = false
) => {
  if (to === undefined) return defaultValue;
  return interpolate(input, [0, 1], [initialValue, to], {
    extrapolateLeft: clamp ? 'clamp' : undefined,
    extrapolateRight: clamp ? 'clamp' : undefined,
  });
};

export default interpolateAnimation;
