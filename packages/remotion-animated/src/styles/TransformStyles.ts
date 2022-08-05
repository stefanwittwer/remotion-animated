import AnimationValues from '../reducer/AnimationValues';

const value = (currentValue: number | undefined, defaultValue: number) =>
  currentValue === undefined ? defaultValue : currentValue.toFixed(4);

const transformStyles = (values: AnimationValues): string | null => {
  let translate: string | undefined;
  let scale: string | undefined;
  let rotate: string | undefined;

  if (values.translateX || values.translateY)
    translate = `translate(${value(values.translateX, 0)}px, ${value(
      values.translateY,
      0
    )}px)`;

  // We need to specifically check for undefined here, because 0 is a valid,
  // and more importantly non-default(!) scale value.
  if (values.scaleX !== undefined || values.scaleY !== undefined)
    scale = `scale(${value(values.scaleX, 1)}, ${value(values.scaleY, 1)})`;

  if (values.rotate) rotate = `rotate(${value(values.rotate, 0)}deg)`;

  if (!translate && !scale && !rotate) {
    return null;
  }

  let transform = '';

  if (translate) transform += translate;
  if (scale) transform += ` ${scale}`;
  if (rotate) transform += ` ${rotate}`;

  return transform.trim();
};

export default transformStyles;
