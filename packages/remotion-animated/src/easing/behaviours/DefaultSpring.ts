import CustomSpring from './CustomSpring';

const DefaultSpring = CustomSpring({
  stiffness: 75,
  damping: 200,
  overshootClamping: true,
});

export default DefaultSpring;
