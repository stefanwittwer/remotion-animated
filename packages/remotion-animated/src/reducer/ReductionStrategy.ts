import AnimationValues from './AnimationValues';

export enum ReductionStrategy {
  Addition,
  Multiplication,
  IgnorePreviousValue,
}

const reductionStrategyForProperty = (
  property: keyof AnimationValues
): ReductionStrategy => {
  switch (property) {
    case 'translateX':
    case 'translateY':
    case 'rotate':
      return ReductionStrategy.Addition;
    case 'scaleX':
    case 'scaleY':
      return ReductionStrategy.Multiplication;
    case 'opacity':
    case 'width':
    case 'height':
    default:
      return ReductionStrategy.IgnorePreviousValue;
  }
};

export default reductionStrategyForProperty;
