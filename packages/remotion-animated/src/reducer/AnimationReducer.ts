import AnimationValues from './AnimationValues';
import reductionStrategyForProperty, {
  ReductionStrategy,
} from './ReductionStrategy';

const reduceComputedValues = (valueLists: AnimationValues[]) =>
  valueLists.reduce((acc, valueList) => {
    const properties = Object.keys(valueList) as (keyof AnimationValues)[];
    const reducedValues = { ...acc };

    properties.forEach((property) => {
      let reducedValue = valueList[property];
      if (acc[property] !== undefined && reducedValue !== undefined) {
        reducedValue = reduceValue(property, reducedValue, acc);
      }
      reducedValues[property] = reducedValue;
    });

    return reducedValues;
  }, <AnimationValues>{});

function reduceValue(
  property: keyof AnimationValues,
  reducedValue: AnimationValues[typeof property],
  acc: AnimationValues
) {
  const strategy = reductionStrategyForProperty(property);
  switch (strategy) {
    case ReductionStrategy.Addition:
      return (acc[property] ?? 0) + (reducedValue ?? 0);
    case ReductionStrategy.Multiplication:
      return (acc[property] ?? 1) * (reducedValue ?? 1);
    case ReductionStrategy.IgnorePreviousValue:
    default:
      return reducedValue;
  }
}

export default reduceComputedValues;
