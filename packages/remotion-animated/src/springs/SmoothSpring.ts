import AnimationSpring from './AnimationSpring';

const SmoothSpring = AnimationSpring({
  stiffness: 75,
  damping: 200,
  overshootClamping: true,
});

export default SmoothSpring;
